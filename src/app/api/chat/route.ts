import { openai } from '@ai-sdk/openai';
import { streamText, type Message } from 'ai';
import { z } from 'zod';
import { SYSTEM_PROMPT } from './prompt';
import { getContact } from './tools/getContact';
import { getCrazy } from './tools/getCrazy';
import { getInternship } from './tools/getIntership';
import { getPresentation } from './tools/getPresentation';
import { getProjects } from './tools/getProjects';
import { getResume } from './tools/getResume';
import { getSkills } from './tools/getSkills';
import { getSports } from './tools/getSport';

export const maxDuration = 30;

// The per-IP request rate is limited by the Vercel firewall rule
// "Rate limit /api/chat per IP" (20 requests / hour). The checks below bound
// what a single request can cost.

// Same as MESSAGE_LIMIT in src/lib/fastfolio-tracking.ts: the browser stops a
// visitor after 4 questions, the server refuses longer conversations so a
// script cannot skip that limit.
const MAX_USER_MESSAGES = 4;
const MAX_MESSAGES = MAX_USER_MESSAGES * 2;
const MAX_USER_MESSAGE_CHARS = 1000;
const MAX_OUTPUT_TOKENS = 800;

const messagesSchema = z
  .array(
    z
      .object({
        role: z.enum(['user', 'assistant']),
        content: z.string(),
      })
      .passthrough()
      .refine(
        (m) => m.role !== 'user' || m.content.length <= MAX_USER_MESSAGE_CHARS
      )
  )
  .min(1)
  .max(MAX_MESSAGES);

// Browsers always send Origin on a POST, so the real chat UI passes this check
// on every domain of the site; bare scripts usually don't send it.
function isSameOrigin(req: Request) {
  const origin = req.headers.get('origin');
  const host = req.headers.get('x-forwarded-host') ?? req.headers.get('host');
  if (!origin || !host) return false;
  try {
    return new URL(origin).host === host;
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  if (!isSameOrigin(req)) {
    return new Response('Forbidden', { status: 403 });
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return new Response('Invalid request', { status: 400 });
  }

  const parsed = messagesSchema.safeParse(
    (body as { messages?: unknown } | null)?.messages
  );
  if (!parsed.success) {
    return new Response('Invalid request', { status: 400 });
  }

  const messages = parsed.data;
  if (messages.filter((m) => m.role === 'user').length > MAX_USER_MESSAGES) {
    return new Response('Message limit reached', { status: 429 });
  }

  try {
    const result = streamText({
      model: openai('gpt-4o-mini'),
      system: SYSTEM_PROMPT.content,
      messages: messages as unknown as Omit<Message, 'id'>[],
      toolCallStreaming: true,
      tools: {
        getProjects,
        getPresentation,
        getResume,
        getContact,
        getSkills,
        getSports,
        getCrazy,
        getInternship,
      },
      maxSteps: 2,
      maxTokens: MAX_OUTPUT_TOKENS,
    });

    return result.toDataStreamResponse({
      // Never send provider errors to the browser (they include the OpenAI
      // org id and rate-limit details); keep the detail in the logs.
      getErrorMessage: (error) => {
        console.error('[CHAT-API] stream error:', error);
        return 'Something went wrong, try again in a moment.';
      },
    });
  } catch (err) {
    console.error('[CHAT-API] error:', err);
    return new Response('Something went wrong, try again in a moment.', {
      status: 500,
    });
  }
}
