'use client'

import Image from 'next/image';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Info } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import 'swiper/css/autoplay';

// Import project slider styles
import './project-slider.css';

export interface ProjectProps {
  title: string;
  description: string;
  imageSrc: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

// Sample project data - replace with your actual projects
const projects: ProjectProps[] = [
  {
    title: 'Givoo',
    description: 'Givoo é uma plataforma de doações simples, segura e integrada ao Stripe. Ideal para todos, streamers, produtores de conteúdo e vários outros que desejam monetizar seu trabalho online.',
    imageSrc: '/Givoo.png',
    tags: ['Next.js', 'Node.js', 'TypeScript', 'Stripe', 'Prisma', 'PostgreSQL', 'Docker'],
    liveUrl: 'https://givoo.vercel.app',
    githubUrl: 'https://github.com/Nattanjunior/Givoo',
  },
  {
    title: 'Sistema de Autenticação e Autorização',
    description: 'Sistema completo de autenticação e autorização com controle de acesso baseado em roles (RBAC) com CASL. Este projeto demonstra uma implementação robusta de autenticação moderna, integrando múltiplos provedores de identidade e um sistema granular de permissões.',
    imageSrc: '',
    tags: ['Node.js', 'TypeScript', 'Nest.js', 'JWT', 'Passport.js', 'OAuth 2.0', 'RBAC', 'CASL'],
    liveUrl: '',
    githubUrl: 'https://github.com/Nattanjunior/nestjs-auth',
  },
  {
    title: 'Sistema de Notificações',
    description: 'Este é um microsserviço de notificações construído com NestJS, Prisma e PostgreSQL. O objetivo é fornecer uma API robusta e escalável para criar, gerenciar e consultar notificações.',
    imageSrc: '',
    tags: ['Node.js', 'TypeScript', 'Nest.js', 'Prisma', 'PostgreSQL', 'Jest ', 'Docker'],
    liveUrl: '',
    githubUrl: 'https://github.com/Nattanjunior/notifications-service',
  },
];
export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  
  // Efeito para animação de entrada
  useState(() => {
    setMounted(true);
  });
  
  const toggleProjectDetails = (index: number) => {
    setActiveProject(activeProject === index ? null : index);
  };
  
  return (
    <section id="project" className="py-12 md:py-20 relative overflow-hidden font-poppins">
      {/* Fundo com efeito de gradiente animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-purple-800/10 to-purple-700/10 animate-gradient opacity-50"></div>
      
      {/* Malha de pontos para efeito de profundidade */}
      <div className="absolute inset-0 opacity-5" 
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="mb-10 md:mb-16 text-center" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 md:mb-4 font-poppins bg-gradient-to-r from-purple-700 via-purple-500 to-purple-900 bg-clip-text text-transparent animate-gradient">
            Projetos
          </h2>
          <div className="w-20 md:w-24 h-1 bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 mx-auto mb-4 md:mb-6"></div>
          <p className="text-white/80 max-w-2xl mx-auto font-Preahvihear text-base md:text-lg backdrop-blur-sm py-2 px-4 rounded-xl bg-white/5 inline-block">
            Cada projeto é uma peça única de desenvolvimento ✨
          </p>
        </div>

        <div className="swiper-container" data-aos="fade-up" data-aos-delay="200">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 25 },
              1024: { slidesPerView: 3, spaceBetween: 30 },
            }}
            navigation={{
              enabled: true,
              hideOnClick: true,
            }}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="project-swiper"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <Card className="card-3d bg-card/50 backdrop-blur-xl backdrop-saturate-[1.8] border border-white/20 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <CardContent className="p-6 flex flex-col h-full relative">
                    {/* Reflexos de luz */}
                    <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl"></div>
                    
                    <div className="flex flex-col gap-6 h-full relative z-10">
                      <div className="relative h-[220px] w-full overflow-hidden rounded-xl border border-white/20 shadow-lg group">
                        <div className="w-full h-full bg-gradient-to-br from-purple-900/40 via-purple-800/40 to-purple-700/40 flex items-center justify-center overflow-hidden">
                          {project.imageSrc ? (
                            <Image
                              src={project.imageSrc}
                              alt={project.title}
                              className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                              width={600}
                              height={300}
                              quality={80}
                              priority={index === 0}
                              loading={index === 0 ? "eager" : "lazy"}
                              placeholder="blur"
                              blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48bGluZWFyR3JhZGllbnQgaWQ9ImciIHgxPSIwJSIgeTE9IjAlIiB4Mj0iMTAwJSIgeTI9IjEwMCUiPjxzdG9wIHN0b3AtY29sb3I9IiMyZDFiNjkiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMWEwZjNkIiBvZmZzZXQ9IjUwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiM0ZTNhOGEiIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxyZWN0IHdpZHRoPSI2MDAiIGhlaWdodD0iMzAwIiBmaWxsPSJ1cmwoI2cpIi8+PC9zdmc+"
                              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                            />
                          ) : (
                            <div className="flex items-center justify-center h-full w-full bg-gradient-to-br from-purple-900/30 via-purple-800/30 to-purple-700/30">
                              <span className="text-white/70">Imagem não disponível</span>
                            </div>
                          )}
                          
                          {/* Overlay com efeito hover */}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                            <div className="p-4 w-full">
                              <div className="flex gap-2 justify-end">
                                {project.githubUrl && (
                                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" 
                                     className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-300 hover:-translate-y-1">
                                    <Github className="h-5 w-5" />
                                  </a>
                                )}
                                {project.liveUrl && (
                                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                                     className="p-2 bg-white/10 backdrop-blur-md rounded-full hover:bg-white/20 transition-all duration-300 hover:-translate-y-1">
                                    <ExternalLink className="h-5 w-5" />
                                  </a>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col flex-grow">
                        <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-700 to-purple-900 bg-clip-text text-transparent">{project.title}</h3>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center rounded-full bg-white/10 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 px-2 py-0.5 text-xs font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="description-container">
                          <div className="overflow-auto custom-scrollbar">
                            <p className={`text-white/70 text-sm mb-4 ${activeProject === index ? '' : 'line-clamp-3'}`}>
                              {project.description}
                            </p>
                          </div>
                          <div className="mt-auto">
                            <Button 
                              variant="ghost" 
                              size="sm" 
                              onClick={(e) => {
                                e.preventDefault();
                                toggleProjectDetails(index);
                              }} 
                              className="self-start mb-2 bg-gradient-to-r from-purple-900/20 to-purple-700/20 hover:from-purple-900/30 hover:to-purple-700/30 border border-white/20 hover:border-white/40 transition-all duration-300 group"
                            >
                              <Info className="mr-1 h-3 w-3 group-hover:rotate-12 transition-transform duration-300" />
                              <span className="group-hover:translate-x-1 transition-transform duration-300">
                                {activeProject === index ? 'Ver menos' : 'Ver mais'}
                              </span>
                            </Button>
                          </div>
                        </div>
                        <div className="flex gap-3 mt-auto">
                          {project.githubUrl && (
                            <Button variant="outline" size="sm" asChild className="border-white/10 hover:border-primary/20 hover:bg-primary/5 hover:text-primary flex-1">
                              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                <Github className="mr-2 h-4 w-4" />
                                Código
                              </a>
                            </Button>
                          )}
                          {project.liveUrl && (
                            <Button size="sm" asChild className="bg-primary text-white hover:bg-primary/90 flex-1">
                              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="mr-2 h-4 w-4" />
                                Demo
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}