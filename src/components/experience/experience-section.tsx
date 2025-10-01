'use client';

import { Card, CardContent } from '@/components/ui/card';
import Image from 'next/image';

interface ExperienceProps {
  company: string;
  position: string;
  period: string;
  description: string;
  icon: string;
}

const experiences: ExperienceProps[] = [
  {
    company: 'Google',
    position: 'Lead Software Engineer',
    period: 'Oct 2020 - Present',
    description: 'As a Software Engineer at Google, I provide technical leadership for Google\'s innovative products. I collaborate with cross-functional teams to design scalable solutions for millions of users.',
    icon: 'google'
  },
  {
    company: 'Apple',
    position: 'Junior Software Engineer',
    period: 'Oct 2018 - Sept 2020',
    description: 'Working on the iOS team, I helped develop features for iPhone apps. I collaborated with designers to implement intuitive user interfaces and improved app performance.',
    icon: 'apple'
  },
  {
    company: 'Meta',
    position: 'Software Engineer',
    period: 'Jan 2016 - Sept 2018',
    description: 'At Meta, I worked on developing scalable backend solutions for the platform. I designed and implemented APIs and optimized database queries for better performance.',
    icon: 'meta'
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">EXPERIENCE</h2>
        
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-4 items-start">
              <div className="flex-shrink-0 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                {exp.icon === 'google' && (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 11V8L17 12L12 16V13H7V11H12Z" fill="currentColor" />
                  </svg>
                )}
                {exp.icon === 'apple' && (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 11V8L17 12L12 16V13H7V11H12Z" fill="currentColor" />
                  </svg>
                )}
                {exp.icon === 'meta' && (
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 11V8L17 12L12 16V13H7V11H12Z" fill="currentColor" />
                  </svg>
                )}
              </div>
              
              <Card className="flex-1 bg-gray-900 border-0">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold">{exp.position} at {exp.company}</h3>
                    <span className="text-sm text-gray-400">{exp.period}</span>
                  </div>
                  <p className="text-gray-300">{exp.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}