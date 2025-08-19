'use client';

import { useEffect, useRef } from 'react';
import { Marquee } from '@/components/magicui/marquee';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';

interface TechIconProps {
  name: string;
  icon: string;
}



const techIcons: TechIconProps[] = [
  { name: 'Node.js', icon: 'https://skillicons.dev/icons?i=nodejs' },
  { name: 'TypeScript', icon: 'https://skillicons.dev/icons?i=ts' },
  { name: 'NestJS', icon: 'https://skillicons.dev/icons?i=nestjs' },
  { name: 'Express', icon: 'https://skillicons.dev/icons?i=express' },
  { name: 'Fastify', icon: 'https://fastify.dev/img/logos/fastify-white.svg' },
  { name: 'Prisma', icon: 'https://skillicons.dev/icons?i=prisma' },
  { name: 'PostgreSQL', icon: 'https://skillicons.dev/icons?i=postgres' },
  { name: 'MongoDB', icon: 'https://skillicons.dev/icons?i=mongodb' },
  { name: 'Redis', icon: 'https://skillicons.dev/icons?i=redis' },
  { name: 'Docker', icon: 'https://skillicons.dev/icons?i=docker' },
  { name: 'AI', icon: 'https://skillicons.dev/icons?i=ai' },
  { name: 'JavaScript', icon: 'https://skillicons.dev/icons?i=js' },
  { name: 'Git', icon: 'https://skillicons.dev/icons?i=git' },
  { name: 'Jest', icon: 'https://skillicons.dev/icons?i=jest' },
  { name: 'React', icon: 'https://skillicons.dev/icons?i=react' },
  { name: 'TanStack Query', icon: 'https://tanstack.com/assets/logo-color-100w-br5_Ikqp.png' },
  { name: 'Next.js', icon: 'https://skillicons.dev/icons?i=nextjs' },
  { name: 'TailwindCSS', icon: 'https://skillicons.dev/icons?i=tailwindcss' },
  // { name: 'Zustand', icon: 'Zustand' },
  { name: 'HTML', icon: 'https://skillicons.dev/icons?i=html' },
  { name: 'CSS', icon: 'https://skillicons.dev/icons?i=css' },
];

function TechIcon({ name, icon }: TechIconProps) {
  return (
    <div className="flex flex-col items-center justify-center mx-4 group">
      <div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-2 transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary/10 group-hover:scale-110">
        <img src={icon} alt={name} className="w-8 h-8 md:w-10 md:h-10" />
      </div>
      <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors duration-300">{name}</span>
    </div>
  );
}

export function TechStack() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Animação de entrada para os ícones
    gsap.fromTo(
      '.tech-icon',
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.03,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      }
    );
  }, { scope: containerRef });

  return (
    <div id="tech" ref={containerRef} className="py-12 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 mb-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold mb-2">Tecnologias</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ferramentas e linguagens que utilizo para criar soluções modernas e eficientes
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Gradientes nas bordas para efeito de fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10"></div>

        <Marquee className="py-4" pauseOnHover={true}>
          {techIcons.slice(0, Math.ceil(techIcons.length / 2)).map((tech, index) => (
            <div key={index} className="tech-icon">
              <TechIcon name={tech.name} icon={tech.icon} />
            </div>
          ))}
        </Marquee>

        <Marquee className="py-4" reverse={true} pauseOnHover={true}>
          {techIcons.slice(Math.ceil(techIcons.length / 2)).map((tech, index) => (
            <div key={index} className="tech-icon">
              <TechIcon name={tech.name} icon={tech.icon} />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}