
import React from 'react';
import { Link } from 'react-router-dom';
import { Tv, Sofa, Laptop } from 'lucide-react';

interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  image: string;
  href: string;
}

const categories: Category[] = [
  {
    id: 'muebles',
    name: 'Muebles',
    icon: <Sofa className="h-8 w-8" />,
    description: 'Diseños que transforman tu espacio. Confort y estilo para cada rincón de tu hogar.',
    image: 'https://images.unsplash.com/photo-1567016376408-0226e4d0c1ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
    href: '/categoria/muebles'
  },
  {
    id: 'electrodomesticos',
    name: 'Electrodomésticos',
    icon: <Tv className="h-8 w-8" />,
    description: 'Disfruta del sonido, la imagen y la innovación. Tecnología que se escucha y se siente.',
    image: 'https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
    href: '/categoria/electrodomesticos'
  },
  {
    id: 'tecnologia',
    name: 'Tecnología',
    icon: <Laptop className="h-8 w-8" />,
    description: 'Equipos de alto rendimiento para mentes brillantes. Conéctate con el futuro, hoy mismo.',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
    href: '/categoria/tecnologia'
  }
];

const CategorySection = () => {
  return (
    <section className="section-padding bg-estelar-gray-light">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4 text-gradient">Nuestras Categorías</h2>
          <p className="text-estelar-gray max-w-2xl mx-auto">
            Explora nuestra amplia selección de productos cuidadosamente seleccionados para transformar tu hogar y mejorar tu día a día.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <Link 
              key={category.id}
              to={category.href}
              className="group"
            >
              <div className="product-card h-full overflow-hidden">
                <div className="relative h-60 overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 rounded-full p-4 transform group-hover:scale-110 transition-transform duration-300">
                      <div className="text-estelar-purple">
                        {category.icon}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="heading-sm mb-2 group-hover:text-estelar-purple transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-estelar-gray text-sm mb-4">
                    {category.description}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="text-estelar-purple font-medium group-hover:underline transition-all duration-300">
                      Ver productos
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;
