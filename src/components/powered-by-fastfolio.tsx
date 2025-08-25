'use client';

import Image from 'next/image';

export function PoweredByFastfolio() {
  return (
    <a
      href="https://fastfol.io?utm_source=toukoum_portfolio&utm_medium=powered_by&utm_campaign=portfolio_conversion"
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-1.5 pb-4 md:pb-0 text-xs text-gray-500 hover:text-gray-700 transition-colors"
    >
      <span>Powered by</span>
      <Image 
        src="/fastfolio-logo.png" 
        alt="Fastfolio" 
        width={16} 
        height={16}
        className="object-contain"
      />
      <span className="font-medium">Fastfolio</span>
    </a>
  );
}