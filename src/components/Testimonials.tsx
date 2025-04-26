
import React from 'react';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  productBought: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Carlos Ramírez',
    role: 'Bogotá',
    content: 'La calidad de los muebles es excelente. La entrega fue puntual y el servicio al cliente excepcional. ¡Definitivamente volveré a comprar!',
    rating: 5,
    productBought: 'Sofá Modular de Cuero'
  },
  {
    id: 2,
    name: 'María Jiménez',
    role: 'Medellín',
    content: 'Mi nueva Smart TV llegó perfectamente empacada y la instalación fue muy sencilla. La imagen es impresionante, superó todas mis expectativas.',
    rating: 5,
    productBought: 'Smart TV 4K UltraHD'
  },
  {
    id: 3,
    name: 'Andrés Morales',
    role: 'Cali',
    content: 'La laptop que compré tiene un rendimiento excelente. El proceso de compra fue rápido y seguro, y el envío llegó incluso antes de lo prometido.',
    rating: 4,
    productBought: 'Laptop Ultradelgada'
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={cn(
            "h-5 w-5",
            i < rating ? "text-estelar-gold" : "text-gray-300"
          )}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-white to-estelar-gray-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4 text-gradient">Lo que dicen nuestros clientes</h2>
          <p className="text-estelar-gray max-w-2xl mx-auto">
            Descubre las experiencias de quienes ya han confiado en ElectroEstelar para transformar sus hogares.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={cn(
                "bg-white p-6 rounded-lg shadow-lg transform transition-all duration-300 hover:-translate-y-2",
                index === 1 ? "md:translate-y-8" : ""
              )}
            >
              <div className="mb-4">
                <StarRating rating={testimonial.rating} />
              </div>
              <blockquote className="text-estelar-gray-dark mb-6 italic">
                "{testimonial.content}"
              </blockquote>
              <div className="flex items-center">
                <div className="bg-estelar-purple/10 text-estelar-purple font-bold rounded-full w-10 h-10 flex items-center justify-center">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <p className="font-semibold text-estelar-gray-dark">{testimonial.name}</p>
                  <p className="text-sm text-estelar-gray">{testimonial.role}</p>
                  <p className="text-xs text-estelar-purple mt-1">
                    Compró: {testimonial.productBought}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
