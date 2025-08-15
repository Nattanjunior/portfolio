'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const navItems = [
  { name: 'Início', href: '#home' },
  { name: 'Sobre', href: '#about' },
  { name: 'Processo', href: '#process' },
  { name: 'Portfólio', href: '#portfolio' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm border-b border-primary/10' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="#home" className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center mr-2">
            <span className="text-white font-bold">N.A</span>
          </div>
          <span className="text-xl font-bold text-foreground">Nataniel Junior</span>
        </Link>
        
        {/* Desktop Navigation - visível apenas em desktop */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link 
              key={item.name} 
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <Button asChild className="ml-4 bg-primary text-white hover:bg-primary/90">
            <Link href="#contact">Contato</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}