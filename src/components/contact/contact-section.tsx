'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contact</h2>
        
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-gray-300 mb-8">
            Interested in hiring me? Feel free to reach out and let's discuss how I can contribute to your project or organization.
          </p>
          
          <form className="space-y-6">
            <div>
              <Input 
                type="text" 
                placeholder="Your Name" 
                className="bg-gray-900 border-gray-700 text-white"
              />
            </div>
            
            <div>
              <Input 
                type="email" 
                placeholder="Your Email" 
                className="bg-gray-900 border-gray-700 text-white"
              />
            </div>
            
            <div>
              <Textarea 
                placeholder="Your Message" 
                className="bg-gray-900 border-gray-700 text-white min-h-[150px]"
              />
            </div>
            
            <div className="text-center">
              <Button className="bg-white text-black hover:bg-gray-200 px-8 py-2">
                Send Message
              </Button>
            </div>
          </form>
          
          <div className="mt-12 text-center">
            <p className="text-gray-400">Email: example@email.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}