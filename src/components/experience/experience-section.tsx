'use client';

import { Marquee } from '@/components/magicui/marquee';
import Image from 'next/image';

interface TechIconProps {
  name: string;
  icon: string;
}

// Using the same list of technologies from the old tech-stack component
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
  { name: 'Next.js', icon: 'https://skillicons.dev/icons?i=nextjs' },
  { name: 'TailwindCSS', icon: 'https://skillicons.dev/icons?i=tailwindcss' },
  { name: 'HTML', icon: 'https://skillicons.dev/icons?i=html' },
  { name: 'CSS', icon: 'https://skillicons.dev/icons?i=css' }
];

function TechIcon({ icon, name }: TechIconProps) {
  return (
    <div className="flex items-center justify-center mx-8" title={name}>
     <Image
        src={icon} 
        alt={name} 
        className="w-12 h-12 transition-all duration-300 filter grayscale hover:filter-none hover:scale-110"
        width={48}
        height={48}
      />
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-black">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-lg font-semibold text-white/50 tracking-[0.2em] uppercase mb-12">
          Experience With
        </h3>
        
        <div className="relative flex items-center justify-center">
          <Marquee pauseOnHover className="[--gap:1rem]">
            {techIcons.map((tech) => (
              <TechIcon key={tech.name} name={tech.name} icon={tech.icon} />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}