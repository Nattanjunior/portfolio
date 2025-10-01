'use client';

import { useState, useEffect } from 'react';
import CardNav from '../CardNav';

const navItems = [
  { name: 'Início', href: '#home' },
  { name: 'Sobre', href: '#about' },
  { name: 'Tecnologias', href: '#tech' },
  { name: 'Projetos', href: '#project' },
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

  const cardNavItems = [
    {
      label: 'Navegação',
      bgColor: '#16132A',
      textColor: '#FFFFFF',
      links: navItems.map((item) => ({
        label: item.name,
        href: item.href,
        ariaLabel: `Ir para ${item.name}`
      }))
    }
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50`}
    >
      <CardNav
        logo="/logo_N.png"
        items={cardNavItems}
        baseColor="#100C2A"
        menuColor="#E5E7EB"
        buttonBgColor="#6D28D9"
        buttonTextColor="#FFFFFF"
        ctaHref="#contact"
        ctaLabel="Contato"
        ctaClassName="hover:opacity-90"
      />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-60" />
    </header>
  );
}