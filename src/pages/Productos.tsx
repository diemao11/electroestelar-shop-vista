
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Grid, 
  List, 
  Tag, 
  Package,
  ChevronDown
} from 'lucide-react';

const Productos = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  
  // Datos de productos simulados
  const productos = [
    {
      id: 1,
      nombre: 'Smart TV 55" QLED',
      precio: 3499900,
      imagen: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      categoria: 'electrodomesticos',
      descripcion: 'Televisor QLED con resolución 4K, Smart TV, compatibilidad con múltiples asistentes de voz y diseño ultrafino.'
    },
    {
      id: 2,
      nombre: 'Laptop Ultra Delgada',
      precio: 4299900,
      imagen: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      categoria: 'tecnologia',
      descripcion: 'Laptop potente con procesador de última generación, memoria RAM amplia y disco SSD ultrarrápido para máximo rendimiento.'
    },
    {
      id: 3,
      nombre: 'Sofá Modular Gris',
      precio: 2899900,
      imagen: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      categoria: 'muebles',
      descripcion: 'Sofá modular con diseño contemporáneo, tapizado en tela de alta resistencia y cómodos cojines con relleno premium.'
    },
    {
      id: 4,
      nombre: 'Cafetera Automática',
      precio: 899900,
      imagen: 'https://images.unsplash.com/photo-1520970519539-8502d22a714f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      categoria: 'electrodomesticos',
      descripcion: 'Cafetera automática con sistema de presión para café espresso perfecto, espumador de leche incorporado y panel táctil.'
    },
    {
      id: 5,
      nombre: 'Auriculares Inalámbricos',
      precio: 599900,
      imagen: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      categoria: 'tecnologia',
      descripcion: 'Auriculares con cancelación de ruido activa, conectividad bluetooth 5.0 y batería de larga duración para uso continuo.'
    },
    {
      id: 6,
      nombre: 'Mesa de Centro',
      precio: 799900,
      imagen: 'https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      categoria: 'muebles',
      descripcion: 'Mesa de centro con diseño minimalista, fabricada en madera y metal con acabados de lujo y espacios de almacenamiento.'
    },
    {
      id: 7,
      nombre: 'Aspiradora Robot',
      precio: 1299900,
      imagen: 'https://images.unsplash.com/photo-1518108621213-2be030acb267?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      categoria: 'electrodomesticos',
      descripcion: 'Robot aspirador inteligente con mapeo láser, programación mediante app móvil y sistema de limpieza en tres etapas.'
    },
    {
      id: 8,
      nombre: 'Smartphone Plegable',
      precio: 5999900,
      imagen: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      categoria: 'tecnologia',
      descripcion: 'Smartphone con pantalla plegable AMOLED, cámaras profesionales y la más avanzada tecnología en un diseño revolucionario.'
    },
    {
      id: 9,
      nombre: 'Estantería Flotante',
      precio: 399900,
      imagen: 'https://images.unsplash.com/photo-1600494603989-9650cf6ddd3d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      categoria: 'muebles',
      descripcion: 'Conjunto de estanterías flotantes modulares con diseño minimalista y alta capacidad de carga para organizar tus espacios.'
    },
  ];

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
        <div className="container-custom mb-10">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Todos los productos</h1>
          <p className="text-gray-600 mb-8">
            Descubre nuestra colección completa de muebles, electrodomésticos y tecnología.
          </p>
          
          {/* Filtros y controles */}
          <div className="flex flex-wrap justify-between items-center gap-4 mb-8 p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="flex items-center">
                Filtrar <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="flex items-center">
                Ordenar por <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Vista:</span>
              <Button 
                variant={viewMode === 'grid' ? 'default' : 'outline'} 
                size="icon"
                onClick={() => setViewMode('grid')}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button 
                variant={viewMode === 'list' ? 'default' : 'outline'} 
                size="icon"
                onClick={() => setViewMode('list')}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          {/* Listado de productos */}
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {productos.map((producto) => (
                <div 
                  key={producto.id} 
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                >
                  <Link to={`/producto/${producto.id}`}>
                    <img 
                      src={producto.imagen} 
                      alt={producto.nombre} 
                      className="w-full h-60 object-cover"
                    />
                  </Link>
                  <div className="p-5">
                    <Link to={`/producto/${producto.id}`} className="hover:text-purple-600 transition-colors">
                      <h3 className="text-xl font-semibold mb-2">{producto.nombre}</h3>
                    </Link>
                    <p className="text-xl font-bold text-purple-600 mb-4">
                      {formatPrice(producto.precio)}
                    </p>
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <Tag className="h-4 w-4 mr-1" />
                      <span className="capitalize">{producto.categoria}</span>
                    </div>
                    <Button className="w-full">
                      Agregar al carrito
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {productos.map((producto) => (
                <div 
                  key={producto.id} 
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row"
                >
                  <Link to={`/producto/${producto.id}`} className="md:w-1/3">
                    <img 
                      src={producto.imagen} 
                      alt={producto.nombre} 
                      className="w-full h-60 md:h-full object-cover"
                    />
                  </Link>
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <Link to={`/producto/${producto.id}`} className="hover:text-purple-600 transition-colors">
                          <h3 className="text-xl font-semibold">{producto.nombre}</h3>
                        </Link>
                        <span className="text-xl font-bold text-purple-600">
                          {formatPrice(producto.precio)}
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600 mb-3">
                        <Tag className="h-4 w-4 mr-1" />
                        <span className="capitalize">{producto.categoria}</span>
                      </div>
                      <p className="text-gray-600 mb-4">{producto.descripcion}</p>
                    </div>
                    <div className="flex justify-end">
                      <Button>
                        Agregar al carrito
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Productos;
