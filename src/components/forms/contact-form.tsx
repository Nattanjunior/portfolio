'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { Send, Loader2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { contactFormSchema, ContactFormValues } from '@/lib/validators/contact-form-validator';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    mode: 'onChange', // Validação em tempo real
  });

  function onSubmit(values: ContactFormValues) {
    setIsSubmitting(true);
    
    try {
      // Construir uma mensagem mais completa para o WhatsApp
      const message = `Olá! Meu nome é ${values.name}.\n\nEmail: ${values.email}\nTelefone: ${values.phone}\n\nMensagem: ${values.message}`;
      const whatsappUrl = `https://wa.me/5582996506043?text=${encodeURIComponent(message)}`;
      
      // Simular um pequeno atraso para mostrar o estado de carregamento
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
        toast.success('Redirecionando para o WhatsApp!', {
          description: 'Sua mensagem foi preparada para envio.',
          icon: '✨',
          position: 'top-center',
          duration: 3000,
        });
        form.reset();
        setIsSubmitting(false);
      }, 800);
      
    } catch (error) {
      toast.error('Algo deu errado. Por favor, tente novamente.', {
        description: 'Ocorreu um erro ao processar sua solicitação.',
        icon: '❌',
      });
      console.error(error);
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={`space-y-6 relative ${mounted ? 'animate-fadeIn' : 'opacity-0'}`}>
        {/* Animated background elements */}
        <div className="absolute -z-10 inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-pink-500/10 rounded-xl opacity-50"></div>
        <div className="absolute -z-10 inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent rounded-xl"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem className="transition-all duration-300 transform hover:translate-y-[-2px]">
                <FormLabel className="font-medium text-white/90">Nome</FormLabel>
                <FormControl>
                <Input 
                  placeholder="Seu nome" 
                  {...field} 
                  className="bg-white/5 backdrop-blur-xl border border-white/20 focus:border-blue-500/50 focus:ring-blue-500/20 rounded-lg shadow-sm transition-all duration-300"
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="transition-all duration-300 transform hover:translate-y-[-2px]">
                <FormLabel className="font-medium text-white/90">Email</FormLabel>
                <FormControl>
                <Input 
                  type="email" 
                  placeholder="seu.email@exemplo.com" 
                  {...field} 
                  className="bg-white/5 backdrop-blur-xl border border-white/20 focus:border-blue-500/50 focus:ring-blue-500/20 rounded-lg shadow-sm transition-all duration-300"
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                />
                </FormControl>
                <FormMessage className="text-red-400" />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="transition-all duration-300 transform hover:translate-y-[-2px]">
              <FormLabel className="font-medium text-white/90">Telefone</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Seu número de telefone" 
                  {...field} 
                  className="bg-white/5 backdrop-blur-xl border border-white/20 focus:border-blue-500/50 focus:ring-blue-500/20 rounded-lg shadow-sm transition-all duration-300"
                  onFocus={() => setFocusedField('phone')}
                  onBlur={() => setFocusedField(null)}
                />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem className="transition-all duration-300 transform hover:translate-y-[-2px]">
              <FormLabel className="font-medium text-white/90">Mensagem</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Sua mensagem" 
                  className="min-h-32 bg-white/5 backdrop-blur-xl border border-white/20 focus:border-blue-500/50 focus:ring-blue-500/20 rounded-lg shadow-sm transition-all duration-300" 
                  {...field} 
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-gradient-to-r from-purple-900 via-purple-800 to-purple-700 text-white hover:opacity-90 border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] hover:translate-y-[-2px] relative overflow-hidden group rounded-lg py-6"
        >
          <span className="absolute top-0 left-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
          <span className="relative z-10 flex items-center justify-center gap-2">
            {isSubmitting ? (
              <>
                <Loader2 className="h-5 w-5 animate-spin" />
                <span>Enviando...</span>
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                <span>Enviar Mensagem</span>
              </>
            )}
          </span>
        </Button>
      </form>
    </Form>
  );
}