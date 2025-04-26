
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast.error('Por favor ingresa tu correo electrónico');
      return;
    }
    
    // Here you would typically send the email to your API
    toast.success('¡Te has suscrito a nuestro newsletter!');
    setEmail('');
  };

  return (
    <section className="py-16">
      <div className="container-custom">
        <div className="relative rounded-2xl overflow-hidden bg-estelar-purple p-8 md:p-12">
          {/* Background decoration */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-estelar-gold/10 -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-estelar-purple-light/20 translate-x-1/4 translate-y-1/4 blur-3xl"></div>
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 justify-between">
            <div className="text-white max-w-md">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                ¡Suscríbete a nuestro Newsletter!
              </h2>
              <p className="text-white/80">
                Recibe ofertas exclusivas, novedades de productos y consejos para mejorar tu hogar directamente en tu bandeja de entrada.
              </p>
            </div>
            
            <form 
              onSubmit={handleSubscribe}
              className="w-full max-w-md flex flex-col sm:flex-row gap-3"
            >
              <Input
                type="email"
                placeholder="Tu correo electrónico"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:border-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button 
                type="submit"
                className="whitespace-nowrap bg-estelar-gold hover:bg-estelar-gold/90 text-estelar-gray-dark font-medium"
              >
                Suscribirme
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
