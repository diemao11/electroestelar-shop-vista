
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-r from-estelar-purple-dark via-estelar-purple to-estelar-purple-light">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-white/30 blur-3xl"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-white/20 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-estelar-gold/30 blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-white space-y-6 animate-fade-in">
          <h1 className="heading-xl leading-tight">
            Transforma tu hogar con <span className="text-estelar-gold">ElectroEstelar</span>
          </h1>
          <p className="text-lg md:text-xl font-light max-w-xl">
            Descubre muebles elegantes, electrodomésticos innovadores y tecnología de vanguardia para elevar tu estilo de vida.
          </p>
          <div className="flex flex-wrap gap-4 pt-4">
            <Button asChild className="bg-white text-estelar-purple hover:bg-estelar-gold hover:text-estelar-gray-dark transition-colors duration-300 font-medium px-6 py-6 text-base">
              <Link to="/productos">
                Explorar Productos
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-white text-white hover:bg-white/10 transition-colors duration-300 font-medium px-6 py-6 text-base">
              <Link to="/ofertas">
                Ver Ofertas
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="relative hidden lg:block">
          <div className="relative h-[500px] w-full animate-float">
            <div className="absolute inset-0 glass-card rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80" 
                alt="Modern Living Room" 
                className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-estelar-purple-dark/50 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-xl font-semibold">Diseños que transforman tu espacio</h3>
                <p className="text-white/80 mt-2">Confort y estilo para cada rincón de tu hogar</p>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 h-36 w-36 glass-card rounded-lg shadow-lg animate-float p-3 flex flex-col justify-center items-center">
              <div className="bg-estelar-gold/20 p-2 rounded-full mb-2">
                <span className="text-estelar-gold font-bold text-lg">100%</span>
              </div>
              <p className="text-white text-sm font-medium text-center">Compra Segura</p>
            </div>
            
            <div className="absolute -bottom-4 -left-4 h-40 w-40 glass-card rounded-lg shadow-lg animate-float [animation-delay:1s] p-3 flex flex-col justify-center">
              <p className="text-white text-sm font-medium">Desde</p>
              <p className="text-white text-2xl font-bold">$299.900 COP</p>
              <p className="text-white/80 text-xs mt-2">Financiación disponible</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
