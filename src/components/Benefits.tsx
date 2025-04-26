
import React from 'react';
import { Truck, ShieldCheck, Clock, CreditCard } from 'lucide-react';

interface Benefit {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const benefits: Benefit[] = [
  {
    id: 1,
    title: 'Envíos rápidos',
    description: 'Recibe tus productos directamente en la puerta de tu casa en tiempo récord.',
    icon: <Truck className="h-10 w-10" />
  },
  {
    id: 2,
    title: 'Garantía de calidad',
    description: 'Todos nuestros productos cuentan con garantía y respaldo de las mejores marcas.',
    icon: <ShieldCheck className="h-10 w-10" />
  },
  {
    id: 3,
    title: 'Atención 24/7',
    description: 'Nuestro equipo está disponible para resolver tus dudas cuando lo necesites.',
    icon: <Clock className="h-10 w-10" />
  },
  {
    id: 4,
    title: 'Créditos flexibles',
    description: 'Opciones de pago adaptadas a tus necesidades y múltiples métodos disponibles.',
    icon: <CreditCard className="h-10 w-10" />
  }
];

const Benefits = () => {
  return (
    <section className="py-16 bg-estelar-purple text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id} 
              className="flex flex-col items-center text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="mb-4 text-estelar-gold">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-white/80">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
