'use client';
import { Button } from '@/components/ui/button';
import { useEffect, useState, useRef } from 'react';

export function HeroSection() {
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
    
    // Efeito de parallax no movimento do mouse
    const handleMouseMove = (e: MouseEvent) => {
      if (!cardRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calcular a posição relativa do mouse (valores entre -1 e 1)
      const xPos = (clientX / innerWidth - 0.5) * 2;
      const yPos = (clientY / innerHeight - 0.5) * 2;
      
      // Aplicar transformação 3D suave
      cardRef.current.style.transform = `
        perspective(1000px) 
        rotateY(${xPos * 3}deg) 
        rotateX(${yPos * -3}deg)
        translateZ(10px)
        scale3d(1.02, 1.02, 1.02)
      `;
    };

    // Resetar a transformação quando o mouse sai
    const handleMouseLeave = () => {
      if (!cardRef.current) return;
      cardRef.current.style.transform = `
        perspective(1000px)
        rotateY(0deg)
        rotateX(0deg)
        translateZ(0)
        scale3d(1, 1, 1)
      `;
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      heroElement.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (heroElement) {
        heroElement.removeEventListener('mousemove', handleMouseMove);
        heroElement.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
  }, []);

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen flex justify-center items-center pt-16 relative overflow-hidden"
    >
      {/* Fundo com efeito de gradiente animado melhorado */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-purple-800/40 to-purple-700/40 animate-gradient"></div>
      
      {/* Malha de pontos para efeito de profundidade */}
      <div className="absolute inset-0 opacity-10" 
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}>
      </div>
      
      {/* Efeito de estrelas/partículas */}
      <div className="stars absolute inset-0"></div>
      
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 animate-float">
        {/* Efeito de reflexo - círculos em tons de roxo desfocados no fundo */}
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-800 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        <div className="absolute bottom-1/3 left-1/4 w-60 h-60 bg-purple-900 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-3000"></div>
        
        {/* Card com efeito de vidro líquido e 3D melhorado */}
        <div 
          ref={cardRef}
          className={`relative backdrop-blur-2xl backdrop-saturate-[2] bg-gradient-to-br from-white/15 via-white/20 to-white/10 border border-white/30 shadow-[0_10px_50px_rgba(0,0,0,0.2)] rounded-3xl p-10 overflow-hidden transition-all duration-300 ${mounted ? 'opacity-100' : 'opacity-0'}`}
          style={{ 
            transformStyle: 'preserve-3d',
            transition: 'transform 0.3s ease-out'
          }}
        >
          {/* Reflexos de luz melhorados */}
          <div className="absolute -top-20 -left-20 w-60 h-60 bg-white/40 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-white/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-30 h-30 bg-blue-400/30 rounded-full blur-2xl animate-pulse"></div>
          
          {/* Efeito de brilho na borda */}
          <div className="absolute inset-0 rounded-3xl border border-white/50 opacity-50"></div>
          
          {/* Linhas de grade para efeito futurista */}
          <div className="absolute inset-0 opacity-5" 
            style={{
              backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }}>
          </div>
          
          <div className="relative z-10 flex flex-col justify-center items-center">
            <p className={`text-primary font-medium text-lg animate-fadeIn opacity-0 ${mounted ? 'opacity-100' : ''}`}>
              Olá, eu sou
            </p>
            
            {/* Nome com gradiente animado melhorado */}
            <h1 className={`text-5xl md:text-7xl font-bold mb-4 mt-2 bg-gradient-to-r from-purple-700 via-purple-500 to-purple-900 bg-clip-text text-transparent animate-gradient animate-fadeIn delay-100 opacity-0 ${mounted ? 'opacity-100' : ''}`}
              style={{ textShadow: '0 0 40px rgba(88, 28, 135, 0.3)' }}>
              Nattan Junior
            </h1>

            {/* Subtítulo com efeito de digitação */}
            <div className={`typewriter mb-6 animate-fadeIn delay-150 opacity-0 ${mounted ? 'opacity-100' : ''}`}>
              <h2 className="text-xl md:text-2xl text-white/80 font-light">
                Desenvolvedor Full Stack
              </h2>
            </div>

            <div className={`animate-fadeIn delay-200 opacity-0 ${mounted ? 'opacity-100' : ''}`}>
              <p className="text-white/80 text-lg mb-8 max-w-2xl text-center backdrop-blur-sm py-3 px-4 rounded-xl bg-white/5">
                Sou Desenvolvedor Full Stack com experiência no desenvolvimento de aplicações completas, do back-end ao front-end. Trabalho principalmente com Node.js, TypeScript, NestJS e PostgreSQL, criando APIs robustas, integrações entre sistemas e modelagem de dados com Prisma ORM.
                <br />
                <br />
                Tenho experiência em otimização de queries, implementação de regras de negócio e boas práticas que garantem código limpo, escalável e eficiente. Atualmente curso Engenharia de Software na FIAP e sigo evoluindo em arquitetura limpa, design de sistemas e performance.
              </p>
            </div>

            <div className={`flex flex-wrap gap-4 animate-fadeIn delay-300 opacity-0 ${mounted ? 'opacity-100' : ''}`}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 text-white hover:opacity-90 border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:translate-y-[-3px] relative overflow-hidden group" 
                asChild
              >
                <a href="#contact">
                  <span className="absolute top-0 left-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                  <span className="relative z-10">Diga Olá!</span>
                </a>
              </Button>
            </div>

            <div className={`mt-12 flex items-center gap-6 animate-fadeIn delay-400 opacity-0 ${mounted ? 'opacity-100' : ''}`}>
              <a href="https://www.linkedin.com/in/nattanjunior" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-110 hover:translate-y-[-3px]">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </a>
              <a href="https://github.com/Nattanjunior" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors">
                <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-110 hover:translate-y-[-3px]">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}