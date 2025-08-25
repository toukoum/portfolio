'use client';

import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export function FastfolioCTA() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleClick = () => {
    window.open('https://fastfol.io?utm_source=toukoum_portfolio&utm_medium=floating_cta&utm_campaign=portfolio_conversion', '_blank');
  };

  const position = 'fixed top-8 left-6 z-51';

  return (
    <motion.button
      className={`${position} cursor-pointer group flex items-center gap-2 rounded-full bg-transparent backdrop-blur-2xl  px-4 py-2.5 border hover:shadow-xl transition-all duration-300`}
      onClick={handleClick}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Image 
        src="/fastfolio-logo.png" 
        alt="Fastfolio" 
        width={24} 
        height={24}
        className="object-contain"
      />
      <span className="text-sm font-medium text-foreground hidden sm:inline">
        Build your AI portfolio
      </span>
      <span className="text-sm font-medium text-foreground sm:hidden">
        Build yours
      </span>
      <ChevronRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform hidden sm:block" />
    </motion.button>
  );
}