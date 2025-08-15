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
      {/* Background gradients */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Contato</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Sinta-se à vontade para entrar em contato se quiser colaborar comigo ou simplesmente conversar.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <Card className="bg-card backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-6">Entre em contato</h3>
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
            

          </div>
        </div>
      </div>
    </section>
  );
}