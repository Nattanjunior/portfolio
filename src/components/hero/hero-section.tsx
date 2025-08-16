import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowDown, ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background elements from Figma */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-6">
              <p className="text-primary font-medium mb-4">Olá, eu sou</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                Nataniel Junior
              </h1>
            </div>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              Sou um Desenvolvedor Full Stack com experiência em sistemas CRM usando Next.js, JavaScript, Node.js e PostgreSQL. 
              Atuo na implementação de funcionalidades, integração de APIs e otimização de performance, 
              sempre focado em soluções que agreguem valor aos projetos e aos clientes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90" asChild>
                <a href="#portfolio">Diga Olá!</a>
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <a href="https://www.linkedin.com/in/nattanjunior" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-all">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </a>
              <a href="https://github.com/Nattanjunior" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-all">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.477 2 2 6.477 2 12C2 16.418 4.865 20.166 8.84 21.49C9.34 21.581 9.52 21.272 9.52 21.007C9.52 20.719 9.512 20.061 9.512 19.194C7 19.69 6.35 18.574 6.15 17.977C6.037 17.692 5.55 16.825 5.125 16.537C4.775 16.31 4.275 15.814 5.112 15.802C5.9 15.79 6.462 16.627 6.65 16.925C7.55 18.437 8.988 18.012 9.56 17.747C9.65 17.077 9.912 16.632 10.2 16.377C7.975 16.122 5.65 15.262 5.65 11.475C5.65 10.387 6.037 9.487 6.675 8.787C6.575 8.537 6.225 7.512 6.775 6.137C6.775 6.137 7.612 5.872 9.525 7.162C10.325 6.937 11.175 6.825 12.025 6.825C12.875 6.825 13.725 6.937 14.525 7.162C16.437 5.862 17.275 6.137 17.275 6.137C17.825 7.512 17.475 8.537 17.375 8.787C18.012 9.487 18.4 10.375 18.4 11.475C18.4 15.275 16.063 16.122 13.838 16.377C14.2 16.697 14.513 17.312 14.513 18.262C14.513 19.607 14.5 20.619 14.5 21.007C14.5 21.272 14.688 21.591 15.188 21.49C17.173 20.822 18.915 19.542 20.11 17.825C21.305 16.108 21.893 14.046 21.775 11.962C21.657 9.878 20.84 7.891 19.452 6.348C18.064 4.805 16.186 3.793 14.116 3.482C12.046 3.172 9.938 3.583 8.127 4.648C6.316 5.714 4.903 7.375 4.109 9.359C3.315 11.344 3.183 13.539 3.733 15.611C4.283 17.683 5.483 19.529 7.163 20.864C8.843 22.198 10.914 22.947 13.058 22.998C15.202 23.049 17.306 22.4 19.058 21.143C20.81 19.886 22.107 18.09 22.775 16.007C23.443 13.923 23.443 11.669 22.775 9.585C22.107 7.501 20.81 5.705 19.058 4.448C17.306 3.191 15.202 2.542 13.058 2.593C10.914 2.644 8.843 3.393 7.163 4.727C5.483 6.062 4.283 7.908 3.733 9.98C3.183 12.052 3.315 14.247 4.109 16.232C4.903 18.216 6.316 19.877 8.127 20.943C9.938 22.008 12.046 22.419 14.116 22.109C16.186 21.798 18.064 20.786 19.452 19.243C20.84 17.7 21.657 15.713 21.775 13.629C21.893 11.545 21.305 9.483 20.11 7.766C18.915 6.049 17.173 4.769 15.188 4.101C14.688 4 14.5 4.25 14.5 4.5V6.15C11.988 5.65 11.35 6.762 11.15 7.362C11.037 7.65 10.55 8.512 10.125 8.8C9.775 9.025 9.275 9.525 10.112 9.537C10.9 9.55 11.462 8.712 11.65 8.412C12.55 6.9 13.988 7.325 14.56 7.59C14.65 8.26 14.912 8.705 15.2 8.96C12.975 9.215 10.65 10.075 10.65 13.862C10.65 14.95 11.037 15.85 11.675 16.55C11.575 16.8 11.225 17.825 11.775 19.2C11.775 19.2 12.612 19.465 14.525 18.175C15.325 18.4 16.175 18.512 17.025 18.512C17.875 18.512 18.725 18.4 19.525 18.175C21.437 19.475 22.275 19.2 22.275 19.2C22.825 17.825 22.475 16.8 22.375 16.55C23.012 15.85 23.4 14.962 23.4 13.862C23.4 10.062 21.063 9.215 18.838 8.96C19.2 8.64 19.513 8.025 19.513 7.075C19.513 5.73 19.5 4.718 19.5 4.33C19.5 4.065 19.688 3.746 20.188 3.847C19.975 3.786 19.756 3.746 19.538 3.706" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/10 shadow-lg shadow-primary/20">
              <div className="w-full h-full bg-primary/20 flex items-center justify-center">
                <Image 
                  src="/profile.png"
                  alt="Nataniel Junior"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}