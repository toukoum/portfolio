'use client';

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { CheckCircle2, Sparkles, Globe, BarChart3 } from 'lucide-react';

interface FastfolioPopupProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function FastfolioPopup({ open, onOpenChange }: FastfolioPopupProps) {
  const handleCTA = () => {
    window.open('https://fastfol.io?utm_source=toukoum_portfolio&utm_medium=popup&utm_campaign=portfolio_conversion', '_blank');
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px] p-0 overflow-hidden border-none">
        <div className="relative">
          <Image 
            src="/portfolio-preview.png" 
            alt="Fastfolio Preview" 
            width={500}
            height={250}
            className="w-full h-[200px] object-cover"
          />
          {/*<Badge 
            className="absolute top-4 right-4 bg-white/90 text-gray-900 backdrop-blur-sm"
            variant="secondary"
          >
            Join 500+ developers
          </Badge>*/}
        </div>
        
        <div className="p-6 space-y-8">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              Impressed? Build Your Own <br /> AI Portfolio in 5 Minutes
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Stand out get more clients
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[#4c55fa] mt-0.5" />
              <div>
                <p className="font-medium text-sm">GPT-4o powered conversations</p>
                <p className="text-xs text-muted-foreground">Engage visitors with intelligent AI responses</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Globe className="w-5 h-5 text-[#4c55fa] mt-0.5" />
              <div>
                <p className="font-medium text-sm">Custom domain support</p>
                <p className="text-xs text-muted-foreground">Your portfolio, your brand</p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <BarChart3 className="w-5 h-5 text-[#4c55fa] mt-0.5" />
              <div>
                <p className="font-medium text-sm">Advanced analytics & insights</p>
                <p className="text-xs text-muted-foreground">Track visitor engagement and conversions</p>
              </div>
            </div>
          </div>

          <div className="flex gap-3 pt-2">
            <Button 
              onClick={handleCTA}
              className="flex-1 bg-[#4c55fa] hover:bg-[#4c55fa]/80 cursor-pointer"
            >
              Start Building for Free →
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}