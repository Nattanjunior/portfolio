import { Header } from '@/components/header/header';
import { HeroSection } from '@/components/hero/hero-section';
import { ExperienceSection } from '@/components/experience/experience-section';
import { SkillsSection } from '@/components/skills/skills-section';
import { ProjectsSection } from '@/components/project/projects-section';
import { ContactSection } from '@/components/contact/contact-section';
import { Footer } from '@/components/footer/footer';
import { TechStack } from '@/components/tech/tech-stack';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SkillsSection />
        {/* <ExperienceSection /> */}
        <TechStack />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
