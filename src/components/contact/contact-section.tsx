'use client'

import { useState, useEffect } from 'react';
import { ContactForm } from '@/components/forms/contact-form';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  href?: string;
}

function ContactInfoCard({ icon, title, content, href }: ContactInfoProps) {
  const ContentWrapper = href ? 'a' : 'div';
  const wrapperProps = href ? { href, target: '_blank', rel: 'noopener noreferrer' } : {};
  
  return (
    <ContentWrapper {...wrapperProps} className="group">
      <Card className="h-full transition-all duration-300 bg-white/5 backdrop-blur-xl border border-white/20 hover:border-blue-500/50 hover:shadow-lg shadow-md rounded-xl transform hover:translate-y-[-5px]">
        <CardContent className="flex flex-col items-center text-center p-6">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-md flex items-center justify-center mb-4 text-white border border-white/20 group-hover:border-blue-500/30 transition-all duration-300 shadow-inner group-hover:shadow-blue-500/20">
            {icon}
          </div>
          <h3 className="font-medium mb-1 text-white/90 group-hover:text-blue-400 transition-colors">{title}</h3>
          <p className="text-white/70 group-hover:text-white/90 transition-colors">{content}</p>
        </CardContent>
      </Card>
    </ContentWrapper>
  );
}

export default function ContactSection() {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const contactInfo: ContactInfoProps[] = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      content: 'fnatanieljunior@gmail.com',
      href: 'mailto:fnatanieljunior@gmail.com',
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Telefone',
      content: '(82) 99650-6043',
      href: 'tel:+5582996506043',
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Localização',
      content: 'Maceió, AL',
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent opacity-60"></div>
      
      {/* Dotted grid pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)',
        backgroundSize: '30px 30px'
      }}></div>
      
      {/* Background gradients */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl opacity-50 animate-pulse"></div>
      <div className="absolute bottom-0 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl opacity-50 animate-pulse" style={{ animationDelay: '2s' }}></div>
      
      <div className={`container mx-auto px-4 relative z-10 ${mounted ? 'animate-fadeIn' : 'opacity-0'}`}>
        <div className="mb-16 text-center" data-aos="fade-up">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-gradient">Contato</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-white/70 max-w-2xl mx-auto backdrop-blur-sm bg-white/5 p-4 rounded-xl border border-white/10">
            Sinta-se à vontade para entrar em contato se quiser colaborar comigo ou simplesmente conversar.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div data-aos="fade-right">
            <Card className="bg-white/5 backdrop-blur-xl border border-white/20 rounded-xl overflow-hidden shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Entre em contato</h3>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
          
          <div data-aos="fade-left">
            <div className="grid grid-cols-1 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <ContactInfoCard key={index} {...info} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}