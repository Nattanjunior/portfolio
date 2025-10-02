import { Header } from '@/components/header/header';
import { HeroSection } from '@/components/hero/hero-section';
import dynamic from 'next/dynamic';
import { Suspense } from 'react';
import { Footer } from '@/components/footer/footer';

// Lazy load heavy components
const ProjectsSection = dynamic(() => import('@/components/project/projects-section'), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center">
    <div className="animate-pulse w-12 h-12 rounded-full bg-gradient-to-r from-gray-800 to-gray-700"></div>
  </div>,
  ssr: true
});

const ExperienceSection = dynamic(() => import('@/components/experience/experience-section'), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center">
    <div className="animate-pulse w-12 h-12 rounded-full bg-gradient-to-r from-gray-800 to-gray-700"></div>
  </div>,
  ssr: true
});

const ContactSection = dynamic(() => import('@/components/contact/contact-section'), {
  loading: () => <div className="min-h-[400px] flex items-center justify-center">
    <div className="animate-pulse w-12 h-12 rounded-full bg-gradient-to-r from-gray-800 to-gray-700"></div>
  </div>,
  ssr: true
});

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-black text-white">
        <HeroSection />
        <Suspense fallback={
          <div className="min-h-[200px] flex items-center justify-center">
            <div className="animate-pulse w-12 h-12 rounded-full bg-gradient-to-r from-gray-800 to-gray-700"></div>
          </div>
        }>
          <ExperienceSection />
        </Suspense>
        <Suspense fallback={
          <div className="min-h-[400px] flex items-center justify-center">
            <div className="animate-pulse w-12 h-12 rounded-full bg-gradient-to-r from-gray-800 to-gray-700"></div>
          </div>
        }>
          <ProjectsSection />
        </Suspense>
        <Suspense fallback={
          <div className="min-h-[400px] flex items-center justify-center">
            <div className="animate-pulse w-12 h-12 rounded-full bg-gradient-to-r from-gray-800 to-gray-700"></div>
          </div>
        }>
          <ContactSection />
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
