import Image from 'next/image';
import { Button } from '@/components/ui/button';

import { TypingAnimation } from '@/components/magicui/typing-animation';

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
            <div>
              <p className="text-primary font-medium">Olá, eu sou</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                <TypingAnimation
                  className="font-preahvihear"
                  duration={100}
                  delay={0}
                  startOnView={true}
                >
                  Nattan Junior
                </TypingAnimation>
              </h1>
            </div>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              Sou um Desenvolvedor Full Stack com experiência em sistemas CRM usando Next.js, JavaScript, Node.js e PostgreSQL.
              Atuo na implementação de funcionalidades, integração de APIs e otimização de performance,
              sempre focado em soluções que agreguem valor aos projetos e aos clientes.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90" asChild>
                <a href="#contact">Diga Olá!</a>
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <a href="https://www.linkedin.com/in/nattanjunior" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-all">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </a>
              <a href="https://github.com/Nattanjunior" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-all">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/10 shadow-lg shadow-primary/20">
              <div className="absolute -inset-1 bg-primary/30 rounded-full blur-3xl"></div>
              <div className="w-full h-full bg-primary/20 flex items-center justify-center relative z-10">
                <Image
                  src="/profile.jpeg"
                  alt="Nattan Junior"
                  fill
                  quality={100}
                  priority
                  className="object-cover rounded-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}