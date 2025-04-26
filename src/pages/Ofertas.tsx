
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { toast } from 'sonner';
import { Tag, Percent } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Ofertas = () => {
  // Datos de ofertas simulados
  const ofertas = [
    {
      id: 1,
      nombre: 'Smart TV 55" QLED',
      precioOriginal: 3499900,
      precioOferta: 2899900,
      descuento: 17,
      imagen: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      categoria: 'electrodomesticos'
    },
    {
      id: 2,
      nombre: 'Laptop Ultra Delgada',
      precioOriginal: 4299900,
      precioOferta: 3699900,
      descuento: 14,
      imagen: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      categoria: 'tecnologia'
    },
    {
      id: 3,
      nombre: 'Sofá Modular Gris',
      precioOriginal: 2899900,
      precioOferta: 2299900,
      descuento: 21,
      imagen: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      categoria: 'muebles'
    },
    {
      id: 4,
      nombre: 'Cafetera Automática',
      precioOriginal: 899900,
      precioOferta: 699900,
      descuento: 22,
      imagen: 'https://images.unsplash.com/photo-1520970519539-8502d22a714f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      categoria: 'electrodomesticos'
    },
    {
      id: 5,
      nombre: 'Auriculares Inalámbricos',
      precioOriginal: 599900,
      precioOferta: 429900,
      descuento: 28,
      imagen: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      categoria: 'tecnologia'
    },
    {
      id: 6,
      nombre: 'Mesa de Centro',
      precioOriginal: 799900,
      precioOferta: 599900,
      descuento: 25,
      imagen: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      categoria: 'muebles'
    },
  ];

  useEffect(() => {
    // Notificación de ofertas al cargar la página
    toast('¡Ofertas por tiempo limitado!', {
      description: 'Aprovecha estos descuentos exclusivos antes que se agoten.',
      icon: <Percent className="h-5 w-5 text-yellow-500" />
    });
  }, []);

  // Formatear precio en COP
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Banner de ofertas */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 py-12 mb-10">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Ofertas Exclusivas</h1>
            <p className="text-lg text-white/90 mb-0 max-w-2xl mx-auto">
              Descubre nuestras mejores promociones con descuentos increíbles. 
              Precios especiales por tiempo limitado.
            </p>
          </div>
        </div>

        {/* Filtros de categorías */}
        <div className="container-custom mb-10">
          <div className="flex flex-wrap gap-3 justify-center">
            <Button variant="outline" className="rounded-full">
              Todas las ofertas
            </Button>
            <Button variant="outline" className="rounded-full">
              Muebles
            </Button>
            <Button variant="outline" className="rounded-full">
              Electrodomésticos
            </Button>
            <Button variant="outline" className="rounded-full">
              Tecnología
            </Button>
          </div>
        </div>

        {/* Listado de productos en oferta */}
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ofertas.map((oferta) => (
              <div 
                key={oferta.id} 
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <img 
                    src={oferta.imagen} 
                    alt={oferta.nombre} 
                    className="w-full h-60 object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 rounded-full font-medium">
                    -{oferta.descuento}%
                  </div>
                </div>
                <div className="p-5">
                  <Link to={`/producto/${oferta.id}`} className="hover:text-purple-600 transition-colors">
                    <h3 className="text-xl font-semibold mb-2">{oferta.nombre}</h3>
                  </Link>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-xl font-bold text-purple-600">
                      {formatPrice(oferta.precioOferta)}
                    </span>
                    <span className="text-sm text-gray-500 line-through">
                      {formatPrice(oferta.precioOriginal)}
                    </span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600 mb-4">
                    <Tag className="h-4 w-4 mr-1" />
                    <span className="capitalize">{oferta.categoria}</span>
                  </div>
                  <Button className="w-full">
                    Agregar al carrito
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Ofertas;
