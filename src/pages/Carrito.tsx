
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Trash, Plus, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

const Carrito = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      nombre: 'Smart TV 55" QLED',
      precio: 2899900,
      imagen: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      cantidad: 1
    },
    {
      id: 5,
      nombre: 'Auriculares Inalámbricos',
      precio: 429900,
      imagen: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
      cantidad: 2
    }
  ]);

  // Calcular totales
  const subtotal = items.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
  const envio = subtotal > 0 ? 25000 : 0;
  const total = subtotal + envio;

  // Formatear precio en COP
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  // Actualizar cantidad de productos
  const updateQuantity = (id: number, change: number) => {
    setItems(prevItems => 
      prevItems.map(item => {
        if (item.id === id) {
          const newQuantity = item.cantidad + change;
          if (newQuantity < 1) return item; // No permitir menos de 1
          return {...item, cantidad: newQuantity};
        }
        return item;
      })
    );
  };

  // Eliminar producto del carrito
  const removeItem = (id: number) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
    toast.success('Producto eliminado del carrito');
  };

  // Finalizar compra
  const checkout = () => {
    toast.success('¡Compra realizada con éxito!', {
      description: 'Recibirás un email con los detalles de tu pedido.',
    });
    setItems([]);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container-custom">
          <h1 className="text-3xl md:text-4xl font-bold mb-8 flex items-center gap-3">
            <ShoppingCart className="h-8 w-8" />
            Tu Carrito
          </h1>
          
          {items.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Lista de productos en el carrito */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6 border-b">
                    <h2 className="text-lg font-semibold">Productos ({items.reduce((sum, item) => sum + item.cantidad, 0)})</h2>
                  </div>
                  
                  {items.map(item => (
                    <div key={item.id} className="p-6 border-b flex flex-col sm:flex-row gap-4">
                      <div className="w-full sm:w-24 h-24 flex-shrink-0">
                        <img 
                          src={item.imagen} 
                          alt={item.nombre} 
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                      
                      <div className="flex-grow">
                        <Link to={`/producto/${item.id}`} className="text-lg font-medium hover:text-purple-600">
                          {item.nombre}
                        </Link>
                        <div className="text-lg font-bold text-purple-600 mt-2">
                          {formatPrice(item.precio)}
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:items-end gap-3">
                        <div className="flex items-center border rounded">
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 rounded-none"
                            onClick={() => updateQuantity(item.id, -1)}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-10 text-center">{item.cantidad}</span>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="h-8 w-8 rounded-none"
                            onClick={() => updateQuantity(item.id, 1)}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="text-red-500 hover:text-red-700 hover:bg-red-50 p-0"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash className="h-4 w-4 mr-1" />
                          Eliminar
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Resumen del pedido */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                  <h2 className="text-lg font-semibold mb-4">Resumen del Pedido</h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Envío</span>
                      <span className="font-medium">{formatPrice(envio)}</span>
                    </div>
                    <div className="border-t pt-3 mt-3">
                      <div className="flex justify-between font-semibold text-lg">
                        <span>Total</span>
                        <span className="text-purple-600">{formatPrice(total)}</span>
                      </div>
                      <p className="text-xs text-gray-500 mt-1">Impuestos incluidos</p>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={checkout}
                    className="w-full text-lg py-6"
                  >
                    Finalizar Compra
                  </Button>
                  
                  <div className="mt-4">
                    <Link to="/productos" className="text-center block text-purple-600 hover:text-purple-800 text-sm">
                      Continuar comprando
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-lg shadow">
              <ShoppingCart className="h-16 w-16 mx-auto text-gray-400 mb-4" />
              <h2 className="text-2xl font-semibold mb-2">Tu carrito está vacío</h2>
              <p className="text-gray-600 mb-6">
                Parece que aún no has agregado productos a tu carrito
              </p>
              <Button asChild>
                <Link to="/productos">
                  Explorar productos
                </Link>
              </Button>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Carrito;
