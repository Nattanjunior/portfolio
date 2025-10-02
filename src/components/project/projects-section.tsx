'use client';

import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Github, ExternalLink } from 'lucide-react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './project-slider.css';

interface ProjectProps {
  title: string;
  description: string;
  image: string;
  link?: string;
  githubUrl: string;
}

const projects: ProjectProps[] = [
  {
    title: 'Givoo',
    description: 'Givoo é uma plataforma de doações simples, segura e integrada ao Stripe. Ideal para todos, streamers, produtores de conteúdo e vários outros que desejam monetizar seu trabalho online.',
    image: '/Givoo.png',
    link: 'https://givoo.vercel.app',
    githubUrl: 'https://github.com/Nattanjunior/Givoo',
  },
  {
    title: 'Sistema de Autenticação e Autorização',
    description: 'Sistema completo de autenticação e autorização com controle de acesso baseado em roles (RBAC) com CASL. Este projeto demonstra uma implementação robusta de autenticação moderna.',
    image: '/auth-system.png', // Placeholder image
    githubUrl: 'https://github.com/Nattanjunior/nestjs-auth',
  },
  {
    title: 'Sistema de Notificações',
    description: 'Este é um microsserviço de notificações construído com NestJS, Prisma e PostgreSQL. O objetivo é fornecer uma API robusta e escalável para criar, gerenciar e consultar notificações.',
    image: '/notification-system.png', // Placeholder image
    githubUrl: 'https://github.com/Nattanjunior/notifications-service',
  },
];

function ProjectCard({ project }: { project: ProjectProps }) {
  return (
    <Card className="bg-gray-900/50 border-white/10 overflow-hidden h-full flex flex-col group">
      <div className="relative h-52 overflow-hidden">
        <Image
          src={project.image || '/placeholder.png'}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
              <ExternalLink className="w-6 h-6 text-white" />
            </a>
          )}
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors">
            <Github className="w-6 h-6 text-white" />
          </a>
        </div>
      </div>
      <CardContent className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-sm text-gray-400 flex-grow">{project.description}</p>
      </CardContent>
    </Card>
  );
}

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">PROJECTS</h2>
        
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          className="project-swiper"
        >
          {projects.map((project) => (
            <SwiperSlide key={project.title}>
              <ProjectCard project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}