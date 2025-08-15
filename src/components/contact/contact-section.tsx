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
    <ContentWrapper {...wrapperProps}>
      <Card className="h-full transition-all hover:shadow-md bg-card backdrop-blur-sm border border-white/10 hover:border-primary/20">
        <CardContent className="flex flex-col items-center text-center p-6">
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary">
            {icon}
          </div>
          <h3 className="font-medium mb-1">{title}</h3>
          <p className="text-muted-foreground">{content}</p>
        </CardContent>
      </Card>
    </ContentWrapper>
  );
}

export function ContactSection() {
  const contactInfo: ContactInfoProps[] = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email',
      content: 'brooklyn@example.com',
      href: 'mailto:brooklyn@example.com',
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      href: 'tel:+15551234567',
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Location',
      content: 'San Francisco, CA',
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Contact</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Feel free to reach out if you want to collaborate with me, or simply have a chat.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="bg-card backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Get in touch</h3>
                <ContactForm />
              </CardContent>
            </Card>
          </div>
          
          <div>
            <div className="grid grid-cols-1 gap-4 mb-8">
              {contactInfo.map((info, index) => (
                <ContactInfoCard key={index} {...info} />
              ))}
            </div>
            
            <Card className="bg-card backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden p-6">
              <h3 className="text-xl font-semibold mb-4">My Socials</h3>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 9H2V21H6V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 8V8.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.5 16C11.0913 16 12.5 14.5913 12.5 13C12.5 11.4087 11.0913 10 9.5 10C7.90872 10 6.5 11.4087 6.5 13C6.5 14.5913 7.90872 16 9.5 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14.5 9C16.0913 9 17.5 7.59128 17.5 6C17.5 4.40872 16.0913 3 14.5 3C12.9087 3 11.5 4.40872 11.5 6C11.5 7.59128 12.9087 9 14.5 9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14.5 21C16.0913 21 17.5 19.5913 17.5 18C17.5 16.4087 16.0913 15 14.5 15C12.9087 15 11.5 16.4087 11.5 18C11.5 19.5913 12.9087 21 14.5 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}