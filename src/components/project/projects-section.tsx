import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

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
    title: 'Fintech Mobile App',
    description: 'A financial technology app with a clean and intuitive interface, designed to help users manage their finances on the go.',
    imageSrc: '/projects/ecommerce.jpg',
    tags: ['Mobile App', 'UI/UX Design', 'Fintech'],
    liveUrl: 'https://example.com/fintech',
    githubUrl: 'https://github.com/brooklyn/fintech',
  },
  {
    title: 'E-commerce Website',
    description: 'A modern e-commerce platform with a focus on user experience, featuring a responsive design and seamless checkout process.',
    imageSrc: '/projects/taskapp.jpg',
    tags: ['Web Design', 'E-commerce', 'UI/UX'],
    liveUrl: 'https://example.com/ecommerce',
    githubUrl: 'https://github.com/brooklyn/ecommerce',
  },
];

export function ProjectsSection() {
  return (
    <section id="portfolio" className="py-20 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 -left-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Portfolio</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each project is a unique piece of development 🧩
          </p>
        </div>
        
        <div className="space-y-24">
          {projects.map((project, index) => (
            <Card key={index} className="bg-transparent border-none shadow-none overflow-visible">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div className={`${index % 2 === 0 ? 'order-1' : 'order-1 lg:order-2'}`}>
                    <div className="relative h-[300px] w-full overflow-hidden rounded-xl border border-white/10 shadow-xl">
                      <Image
                        src={project.imageSrc}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                  <div className={`${index % 2 === 0 ? 'order-2' : 'order-2 lg:order-1'}`}>
                    <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-muted-foreground mb-6">{project.description}</p>
                    <div className="flex gap-4">
                      {project.githubUrl && (
                        <Button variant="outline" size="sm" asChild className="border-white/10 hover:border-primary/20 hover:bg-primary/5 hover:text-primary">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </a>
                        </Button>
                      )}
                      {project.liveUrl && (
                        <Button size="sm" asChild className="bg-primary text-white hover:bg-primary/90">
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}