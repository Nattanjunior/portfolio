import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowDown, ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background elements from Figma */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="mb-6">
              <p className="text-primary font-medium mb-4">Hello, I'm</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                Brooklyn Gilbert
              </h1>
            </div>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              I'm a Freelance UI/UX Designer and Developer based in London, England. 
              I strives to build immersive and beautiful web applications through 
              carefully crafted code and user-centric design.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90" asChild>
                <a href="#portfolio">Say Hello!</a>
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <a href="#" className="text-foreground/80 hover:text-primary transition-colors">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-all">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </a>
              <a href="#" className="text-foreground/80 hover:text-primary transition-colors">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-all">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM9.5 16.5H7.5V10.5H9.5V16.5ZM8.5 9.5C7.95 9.5 7.5 9.05 7.5 8.5C7.5 7.95 7.95 7.5 8.5 7.5C9.05 7.5 9.5 7.95 9.5 8.5C9.5 9.05 9.05 9.5 8.5 9.5ZM17.5 16.5H15.5V13.5C15.5 12.95 15.05 12.5 14.5 12.5C13.95 12.5 13.5 12.95 13.5 13.5V16.5H11.5V10.5H13.5V11.5C13.8 11 14.4 10.5 15 10.5C16.38 10.5 17.5 11.62 17.5 13V16.5Z" fill="currentColor"/>
                  </svg>
                </div>
              </a>
              <a href="#" className="text-foreground/80 hover:text-primary transition-colors">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-all">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM14.59 8L12 10.59L9.41 8L8 9.41L10.59 12L8 14.59L9.41 16L12 13.41L14.59 16L16 14.59L13.41 12L16 9.41L14.59 8Z" fill="currentColor"/>
                  </svg>
                </div>
              </a>
              <a href="#" className="text-foreground/80 hover:text-primary transition-colors">
                <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary/20 hover:border-primary/30 transition-all">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10.29 13.88C10.2 13.97 10.2 14.11 10.29 14.2C10.38 14.29 10.52 14.29 10.61 14.2L16.2 8.61C16.29 8.52 16.29 8.38 16.2 8.29C16.11 8.2 15.97 8.2 15.88 8.29Z" fill="currentColor"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/10 shadow-lg shadow-primary/20">
              <Image
                src="/profile.jpg"
                alt="Brooklyn Gilbert - UI/UX Designer"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}