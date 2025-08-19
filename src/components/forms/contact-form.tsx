'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';

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

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
  });

  function onSubmit(values: ContactFormValues) {
    setIsSubmitting(true);
    
    try {
      // Redirecionar para o WhatsApp com a mensagem
      const message = `${values.message}`;
      const whatsappUrl = `https://wa.me/5582996506043?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      
      toast.success('Redirecionando para o WhatsApp!');
      form.reset();
    } catch (error) {
      toast.error('Algo deu errado. Por favor, tente novamente.');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nome</FormLabel>
                <FormControl>
                <Input 
                  placeholder="Seu nome" 
                  {...field} 
                  className="bg-card backdrop-blur-sm border border-white/10 focus:border-primary/20 focus:ring-primary/10"
                />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                <Input 
                  type="email" 
                  placeholder="seu.email@exemplo.com" 
                  {...field} 
                  className="bg-card backdrop-blur-sm border border-white/10 focus:border-primary/20 focus:ring-primary/10"
                />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Telefone</FormLabel>
              <FormControl>
                <Input 
                  placeholder="Seu número de telefone" 
                  {...field} 
                  className="bg-card backdrop-blur-sm border border-white/10 focus:border-primary/20 focus:ring-primary/10"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mensagem</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Sua mensagem" 
                  className="min-h-32 bg-card backdrop-blur-sm border border-white/10 focus:border-primary/20 focus:ring-primary/10" 
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-primary text-white hover:bg-primary/90"
        >
          {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
        </Button>
      </form>
    </Form>
  );
}