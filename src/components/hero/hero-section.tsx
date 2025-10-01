'use client';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Github, Linkedin } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="bg-black text-white min-h-screen flex items-center justify-center pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="mb-8">
            <Image 
              src="/profile.jpeg" 
              alt="Profile" 
              width={220} 
              height={220} 
              className="rounded-full border-4 border-gradient-to-r from-pink-500 to-purple-500"
            />
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            I do code and make content 
            <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"> about it!</span>
          </h1>
          
          <p className="text-gray-300 max-w-2xl mb-8">
            I am a passionate full-stack developer that loves to create and share content with others!
            It comes to professional experience, specializing in frontend development.
            My background includes creating responsive web applications and delivering exceptional user experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Button className="bg-white text-black hover:bg-gray-200 px-6 py-2 rounded-md flex items-center gap-2">
              Get In Touch
              <ArrowRight size={16} />
            </Button>
            
            <Button variant="outline" className="border-white text-white hover:bg-white/10 px-6 py-2 rounded-md">
              Download CV
            </Button>
          </div>
          
          <div className="flex gap-4">
            <Link href="https://github.com" className="text-white hover:text-pink-500 transition-colors">
              <Github size={24} />
            </Link>
            <Link href="https://linkedin.com" className="text-white hover:text-pink-500 transition-colors">
              <Linkedin size={24} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}