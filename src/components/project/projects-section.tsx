'use client';

import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectProps {
  title: string;
  image: string;
  type: string;
  link: string;
}

const projects: ProjectProps[] = [
  {
    title: 'HTML TUTORIAL',
    image: '/Givoo.png',
    type: 'HTML TUTORIAL',
    link: '#'
  },
  {
    title: 'CSS MAGIC',
    image: '/Givoo.png',
    type: 'CSS TUTORIAL',
    link: '#'
  }
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">PROJECTS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Link href={project.link} key={index}>
              <Card className="bg-gray-900 border-0 overflow-hidden hover:transform hover:scale-105 transition-all duration-300">
                <div className="relative h-48">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <span className="text-sm bg-gray-800 px-2 py-1 rounded">{project.type}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}