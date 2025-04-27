import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ShoppingCart, Tag, Plus, Minus } from 'lucide-react';
import { toast } from 'sonner';
import { useCart } from '@/context/CartContext';

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
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    // Simulamos la obtención de un producto desde una API
    const obtenerProducto = () => {
      // Este sería reemplazado por una llamada a API real
      setTimeout(() => {
        const productoEncontrado: Producto = {
          id: parseInt(productId || '1'),
          nombre: 'Organizador Maquillaje Maletín Con Espejo',
          precio: 104999,
          imagenes: [
            'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
            'https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
            'https://images.unsplash.com/photo-1558888401-3cc1de77652d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
          ],
          categoria: 'Maquillaje',
          descripcion: 'Bolsa de Cosmeticos Profesional con Divisiones y Espejo LED - Todo en un Solo Lugar',
          especificaciones: {
            'Material': 'Cuero sintético de alta calidad',
            'Dimensiones': '30 x 25 x 15 cm',
            'Peso': '1.2 kg',
            'Características': 'Espejo LED incorporado',
            'Garantía': '30 Días',
          }
        };
        
        setProducto(productoEncontrado);
      }, 500);
    };
    
    obtenerProducto();
  }, [productId]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  const updateCantidad = (change: number) => {
    const newCantidad = cantidad + change;
    if (newCantidad >= 1) {
      setCantidad(newCantidad);
    }
  };

  const agregarAlCarrito = () => {
    if (producto) {
      addToCart({
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        imagen: producto.imagenes[0],
        cantidad: cantidad
      });
      
      toast.success(`${producto.nombre} agregado al carrito`, {
        description: `Cantidad: ${cantidad}`
      });
      
      // Navigate to cart page
      navigate('/carrito');
    }
  };

  const comprarAhora = () => {
    if (producto) {
      addToCart({
        id: producto.id,
        nombre: producto.nombre,
        precio: producto.precio,
        imagen: producto.imagenes[0],
        cantidad: cantidad
      });
      
      // Navigate directly to checkout
      navigate('/checkout');
    }
  };

  if (!producto) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <main className="pt-24 pb-16 container-custom">
          <div className="animate-pulse space-y-8">
            <div className="h-96 bg-gray-200 rounded-lg"></div>
            <div className="space-y-4">
              <div className="h-8 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Galería de imágenes */}
            <div>
              <div className="aspect-square mb-4 bg-white rounded-lg overflow-hidden">
                <img 
                  src={producto?.imagenes[imagenActiva]} 
                  alt={producto?.nombre} 
                  className="w-full h-full object-contain"
                />
              </div>
              
              {producto?.imagenes.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {producto.imagenes.map((imagen, index) => (
                    <button 
                      key={index}
                      onClick={() => setImagenActiva(index)}
                      className={`aspect-square rounded-lg overflow-hidden border-2 
                        ${index === imagenActiva ? 'border-purple-600' : 'border-transparent'}`}
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
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                <Tag className="h-4 w-4" />
                <span className="capitalize">{producto?.categoria}</span>
              </div>
              
              <h1 className="text-3xl font-bold mb-4">{producto?.nombre}</h1>
              
              <div className="flex items-baseline gap-4 mb-6">
                <span className="text-3xl font-bold text-purple-600">
                  {producto ? formatPrice(producto.precio) : ''}
                </span>
              </div>

              <p className="text-gray-600 mb-8">{producto?.descripcion}</p>
              
              <Card className="p-6 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <span className="font-medium">Cantidad</span>
                  <div className="flex items-center border rounded-md">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="h-10 w-10"
                      onClick={() => updateCantidad(-1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-12 text-center text-lg">{cantidad}</span>
                    <Button 
                      variant="ghost" 
                      size="icon"
                      className="h-10 w-10"
                      onClick={() => updateCantidad(1)}
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
                
                <Button 
                  variant="outline"
                  className="w-full text-lg py-6"
                  onClick={comprarAhora}
                >
                  Comprar ahora
                </Button>
              </Card>
              
              <div>
                <h3 className="font-semibold mb-4">Especificaciones</h3>
                <div className="space-y-2">
                  {producto && Object.entries(producto.especificaciones).map(([key, value]) => (
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
