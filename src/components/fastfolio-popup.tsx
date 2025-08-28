'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { BarChart3, Globe, MessageSquare, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { PoweredByFastfolio } from './powered-by-fastfolio';

interface FastfolioPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  hasReachedLimit?: boolean;
}

export function FastfolioPopup({ open, onOpenChange, hasReachedLimit = false }: FastfolioPopupProps) {
  const handleCTA = () => {
    window.open(
      'https://fastfol.io?utm_source=toukoum_portfolio&utm_medium=popup&utm_campaign=portfolio_conversion',
      '_blank'
    );
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="overflow-hidden border-none p-0 sm:max-w-[500px]">
        <div className="relative">
          <Image
            src="/portfolio-preview.png"
            alt="Fastfolio Preview"
            width={500}
            height={250}
            className="h-[200px] w-full object-cover"
          />
          {/*<Badge 
            className="absolute top-4 right-4 bg-white/90 text-gray-900 backdrop-blur-sm"
            variant="secondary"
          >
            Join 500+ developers
          </Badge>*/}
        </div>

        <div className="space-y-8 p-6">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              {hasReachedLimit ? (
                <>You've reached your message limit</>
              ) : (
                <>Build Your Own <span className="text-[#4c55fa]">AI Portfolio</span></>
              )}
            </DialogTitle>
            {/*<DialogDescription className="text-muted-foreground">
              {hasReachedLimit ? (
                <>Create your own Fastfolio to continue chatting!</>
              ) : (
                <>Find your Jobs - More clients - Better Opportunities</>
              )}
            </DialogDescription>*/}
          </DialogHeader>

          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <MessageSquare className="mt-0.5 h-5 w-5 text-[#4c55fa]" />
              <div>
                <p className="text-sm font-medium">
                  Answers 24/7 in your voice
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Sparkles className="mt-0.5 h-5 w-5 text-[#4c55fa]" />
              <div>
                <p className="text-sm font-medium">
                  GPT-5 powered conversations
                </p>
                {/*<p className="text-xs text-muted-foreground">Engage visitors with intelligent AI responses</p>*/}
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Globe className="mt-0.5 h-5 w-5 text-[#4c55fa]" />
              <div>
                <p className="text-sm font-medium">Custom domain support</p>
                {/*<p className="text-xs text-muted-foreground">Your portfolio, your brand</p>*/}
              </div>
            </div>

            <div className="flex items-start gap-3">
              <BarChart3 className="mt-0.5 h-5 w-5 text-[#4c55fa]" />
              <div>
                <p className="text-sm font-medium">
                  Advanced analytics & insights
                </p>
                {/*<p className="text-xs text-muted-foreground">Track visitor engagement and conversions</p>*/}
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <Button
              onClick={handleCTA}
              className="flex-1 cursor-pointer border-none bg-[#4c55fa] hover:bg-[#4c55fa]/80"
            >
              Create Your Portfolio
            </Button>
          </div>

          <PoweredByFastfolio />
        </div>
      </DialogContent>
    </Dialog>
  );
}
