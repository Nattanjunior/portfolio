'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 bg-transparent ${isScrolled ? 'bg-[#53348B] backdrop-blur-sm border-b border-white/10' : 'bg-transparent'}`}>

      <div className="container mx-auto px-4 py-3 flex justify-between md:justify-center items-center gap-24 relative">
        <Link href="/" className="flex justify-center items-center">
          <Image 
            src="/logo_N.png" 
            alt="Logo" 
            width={40}
            height={40} 
            className="rounded-full"
          />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex  left-1/2 top-1/2  items-center space-x-8">
          {navItems.map((item) => (
            <Link 
              key={item.name}
              href={item.href}
              className="text-sm text-white/80 hover:text-white transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <button className="text-white p-2">
                <Menu size={20} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-black/90 backdrop-blur-lg border-l border-white/10">
              <nav className="flex flex-col space-y-8 pt-16">
                {navItems.map((item) => (
                  <Link 
                    key={item.name}
                    href={item.href}
                    className="text-white text-2xl text-center hover:text-purple-400 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
     