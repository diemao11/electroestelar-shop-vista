
import React, { useState, useEffect } from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Button } from '@/components/ui/button';
import { ShoppingCart, Trash, Plus, Minus, X } from 'lucide-react';
import { toast } from 'sonner';

const Carrito = () => {
  const [isOpen, setIsOpen] = useState(false);
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
          if (newQuantity < 1) return item;
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
    setIsOpen(false);
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <div 
        className="fixed right-4 bottom-4 z-50 md:right-8 md:bottom-8"
        onClick={() => setIsOpen(true)}
      >
        <Button 
          size="icon"
          className="h-14 w-14 rounded-full shadow-lg"
        >
          <ShoppingCart className="h-6 w-6" />
          {items.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-6 w-6 flex items-center justify-center text-sm font-medium">
              {items.reduce((sum, item) => sum + item.cantidad, 0)}
            </span>
          )}
        </Button>
      </div>

      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Tu Carrito</SheetTitle>
        </SheetHeader>

        <div className="flex flex-col h-full">
          <div className="flex-grow overflow-auto py-6">
            {items.length > 0 ? (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 bg-white rounded-lg shadow">
                    <img 
                      src={item.imagen} 
                      alt={item.nombre}
                      className="w-20 h-20 rounded object-cover"
                    />
                    <div className="flex-grow">
                      <h3 className="font-medium">{item.nombre}</h3>
                      <p className="text-lg font-bold text-purple-600 mt-1">
                        {formatPrice(item.precio)}
                      </p>
                      <div className="flex items-center justify-between mt-2">
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
                          className="text-red-500 hover:text-red-700 hover:bg-red-50"
                          onClick={() => removeItem(item.id)}
                        >
                          <Trash className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <ShoppingCart className="h-12 w-12 mx-auto text-gray-400 mb-3" />
                <p className="text-gray-500">Tu carrito está vacío</p>
              </div>
            )}
          </div>

          {items.length > 0 && (
            <div className="border-t pt-6 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Envío</span>
                  <span>{formatPrice(envio)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span className="text-purple-600">{formatPrice(total)}</span>
                </div>
              </div>
              <Button 
                className="w-full py-6 text-lg"
                onClick={checkout}
              >
                Completar orden
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Carrito;
