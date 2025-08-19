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
    title: 'ApoiaDev',
    description: 'ApoiaDev é uma plataforma moderna para criadores de conteúdo receberem doações e apoios de sua comunidade de forma simples, segura e integrada ao Stripe. Ideal para desenvolvedores, streamers, educadores e produtores de conteúdo que desejam monetizar seu trabalho online e criar uma conexão direta com seus apoiadores.',
    imageSrc: '/apoiadev.png',
    tags: ['Next.js', 'Node.js', 'TypeScript', 'Stripe', 'Prisma', 'PostgreSQL', 'Docker'],
    liveUrl: 'https://apoia-devv.vercel.app',
    githubUrl: 'https://github.com/Nattanjunior/ApoiaDev',
  },
  {
    title: 'Sistema de Autenticação e Autorização',
    description: 'Sistema completo de autenticação e autorização construído com NestJS, implementando JWT, OAuth 2.0 e controle de acesso baseado em roles (RBAC) com CASL. Este projeto demonstra uma implementação robusta de autenticação moderna, integrando múltiplos provedores de identidade e um sistema granular de permissões. Ideal para aplicações que necessitam de controle de acesso sofisticado e flexível.',
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
export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<number | null>(null);
  
  const toggleProjectDetails = (index: number) => {
    setActiveProject(activeProject === index ? null : index);
  };
  return (
    <section id="project" className="py-20 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-semibold mb-4 font-poppins">Projetos</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-Preahvihear">
            Cada projeto é uma peça única de desenvolvimento 🧩
          </p>
        </div>

        <div className="swiper-container">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            className="project-swiper"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <Card className="bg-card/50 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden shadow-md hover:shadow-lg hover:border-primary/20 transition-all duration-300 h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex flex-col gap-6 h-full">
                      <div className="relative h-[220px] w-full overflow-hidden rounded-xl border border-white/10 shadow-md">
                        <div className="w-full h-full bg-primary/10 flex items-center justify-center">
                          {project.imageSrc ? (
                            <Image
                              src={project.imageSrc}
                              alt={project.title}
                              className='w-full h-full object-fit'
                              width={600}
                              height={300}
                              quality={100}
                              priority={index === 0}
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <h3 className="text-xl font-bold text-center">{project.title}</h3>
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="flex flex-col flex-grow">
                        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                        <div className="flex flex-wrap gap-1 mb-3">
                          {project.tags.map((tag) => (
                            <span
                              key={tag}
                              className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium text-primary"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="description-container">
                          <div className="overflow-auto custom-scrollbar">
                            <p className={`text-muted-foreground text-sm mb-4 ${activeProject === index ? '' : 'line-clamp-3'}`}>
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
                              className="self-start mb-2 text-primary hover:bg-primary/10"
                            >
                              <Info className="mr-1 h-3 w-3" />
                              {activeProject === index ? 'Ver menos' : 'Ver mais'}
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