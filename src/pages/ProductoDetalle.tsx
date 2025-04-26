
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ShoppingCart, ArrowLeft, Plus, Minus, Tag } from 'lucide-react';
import { toast } from 'sonner';

interface Producto {
  id: number;
  nombre: string;
  precio: number;
  imagenes: string[];
  categoria: string;
  descripcion: string;
  destacado?: boolean;
  especificaciones: { [key: string]: string };
}

const ProductoDetalle = () => {
  const { productId } = useParams<{ productId: string }>();
  const [producto, setProducto] = useState<Producto | null>(null);
  const [cantidad, setCantidad] = useState(1);
  const [imagenActiva, setImagenActiva] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulamos la obtención de un producto desde una API
    const obtenerProducto = () => {
      setLoading(true);
      
      // Este sería reemplazado por una llamada a API real
      setTimeout(() => {
        // Producto simulado
        const productoEncontrado: Producto = {
          id: parseInt(productId || '1'),
          nombre: 'Smart TV 55" QLED 4K',
          precio: 2899900,
          imagenes: [
            'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
            'https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
            'https://images.unsplash.com/photo-1558888401-3cc1de77652d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
          ],
          categoria: 'electrodomesticos',
          descripcion: 'Televisor QLED de última generación con pantalla de 55 pulgadas, resolución 4K UHD y tecnología de color cuántico para una reproducción precisa y vibrante del color. Smart TV con sistema operativo integrado para acceder fácilmente a tus aplicaciones de streaming favoritas.',
          especificaciones: {
            'Tamaño de pantalla': '55 pulgadas',
            'Resolución': '4K UHD (3840 x 2160)',
            'Tecnología': 'QLED',
            'Puertos HDMI': '4',
            'Puertos USB': '2',
            'Conectividad': 'WiFi, Bluetooth',
            'Sonido': 'Dolby Atmos 2.1ch',
            'Asistentes de voz': 'Alexa, Google Assistant',
            'Garantía': '1 año'
          }
        };
        
        setProducto(productoEncontrado);
        setLoading(false);
      }, 500);
    };
    
    obtenerProducto();
  }, [productId]);

  // Formatear precio en COP
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  // Cambiar cantidad
  const cambiarCantidad = (change: number) => {
    const nuevaCantidad = cantidad + change;
    if (nuevaCantidad >= 1) {
      setCantidad(nuevaCantidad);
    }
  };

  // Agregar al carrito
  const agregarAlCarrito = () => {
    toast.success(`${producto?.nombre} agregado al carrito`, {
      description: `Cantidad: ${cantidad}`
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-24 pb-16 container-custom">
          <div className="flex flex-col items-center justify-center h-64">
            <div className="animate-pulse rounded-md bg-gray-200 h-8 w-48 mb-4"></div>
            <div className="animate-pulse rounded-md bg-gray-200 h-4 w-96 mb-2"></div>
            <div className="animate-pulse rounded-md bg-gray-200 h-4 w-80"></div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!producto) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-24 pb-16 container-custom">
          <div className="text-center py-16">
            <h2 className="text-2xl font-semibold mb-4">Producto no encontrado</h2>
            <p className="text-gray-600 mb-8">Lo sentimos, el producto que buscas no existe.</p>
            <Button asChild>
              <Link to="/productos">Ver todos los productos</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container-custom">
          {/* Breadcrumb */}
          <div className="mb-8">
            <Link to="/productos" className="text-purple-600 hover:text-purple-800 inline-flex items-center">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver a productos
            </Link>
          </div>
          
          {/* Producto detalle */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Galería de imágenes */}
            <div>
              <div className="aspect-square overflow-hidden rounded-lg mb-4">
                <img 
                  src={producto.imagenes[imagenActiva]} 
                  alt={producto.nombre} 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {producto.imagenes.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {producto.imagenes.map((imagen, index) => (
                    <button 
                      key={index}
                      onClick={() => setImagenActiva(index)}
                      className={`aspect-square rounded-md overflow-hidden border-2 ${index === imagenActiva ? 'border-purple-600' : 'border-transparent'}`}
                    >
                      <img 
                        src={imagen} 
                        alt={`${producto.nombre} - imagen ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            {/* Información del producto */}
            <div>
              <div className="flex items-center mb-2">
                <Tag className="h-4 w-4 mr-1 text-gray-500" />
                <span className="text-gray-500 capitalize">{producto.categoria}</span>
              </div>
              
              <h1 className="text-3xl font-bold mb-4">{producto.nombre}</h1>
              <p className="text-2xl font-bold text-purple-600 mb-6">
                {formatPrice(producto.precio)}
              </p>
              
              <div className="mb-8">
                <h3 className="font-medium mb-2">Descripción</h3>
                <p className="text-gray-600">{producto.descripcion}</p>
              </div>
              
              <div className="border-t border-b py-6 mb-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-medium">Cantidad</span>
                  <div className="flex items-center border rounded">
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-10 w-10 rounded-none"
                      onClick={() => cambiarCantidad(-1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center">{cantidad}</span>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      className="h-10 w-10 rounded-none"
                      onClick={() => cambiarCantidad(1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                
                <Button 
                  className="w-full text-lg py-6 mb-4"
                  onClick={agregarAlCarrito}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Agregar al carrito
                </Button>
              </div>
              
              {/* Especificaciones */}
              <div>
                <h3 className="font-semibold mb-3">Especificaciones</h3>
                <div className="space-y-2">
                  {Object.entries(producto.especificaciones).map(([key, value]) => (
                    <div key={key} className="flex py-2 border-b last:border-0">
                      <span className="font-medium w-1/3">{key}</span>
                      <span className="text-gray-600 w-2/3">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductoDetalle;
