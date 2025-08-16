import Link from 'next/link';

const navItems = [
  { name: 'Início', href: '#home' },
  { name: 'Sobre', href: '#about' },
  { name: 'Tecnologias', href: '#tech' },
  { name: 'Projetos', href: '#project' },
  { name: 'Contato', href: '#contact' },
];

const socialLinks = [
  { icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ), href: 'https://www.linkedin.com/in/nattanjunior', label: 'LinkedIn' },
  { icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ), href: 'https://github.com/Nattanjunior', label: 'GitHub' },
];

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card backdrop-blur-sm border-t border-white/10 py-12 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute bottom-0 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <Link href="#home" className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white mr-2">
                <span className="text-lg font-bold">N</span>
              </div>
              <span className="text-xl font-bold">Nataniel Junior</span>
            </Link>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-6 mb-6 md:mb-0">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors text-sm"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Nataniel Junior. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}