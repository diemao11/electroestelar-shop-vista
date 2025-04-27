
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const CarritoPage = () => {
  const { items, updateQuantity, removeItem } = useCart();
  
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  const subtotal = items.reduce((sum, item) => sum + (item.precio * item.cantidad), 0);
  const descuento = items.length > 0 ? 210000 : 0;
  const total = subtotal - descuento;

  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-6xl pt-24 pb-16">
        <h1 className="text-2xl font-bold mb-8">Carrito</h1>
        
        {items.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-lg shadow-sm">
            <div className="max-w-md mx-auto">
              <h2 className="text-xl font-medium mb-4">Tu carrito está vacío</h2>
              <p className="text-gray-500 mb-8">Agrega productos a tu carrito para continuar con la compra</p>
              <Link to="/">
                <Button className="px-8 py-6">
                  Ir a comprar
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4 bg-white rounded-lg p-4 shadow-sm">
                  <Link to={`/producto/${item.id}`}>
                    <img
                      src={item.imagen}
                      alt={item.nombre}
                      className="w-24 h-24 object-cover rounded"
                    />
                  </Link>
                  <div className="flex-grow">
                    <Link to={`/producto/${item.id}`}>
                      <h3 className="font-medium hover:text-estelar-purple">{item.nombre}</h3>
                    </Link>
                    <p className="text-lg font-bold text-estelar-purple mt-1">
                      {formatPrice(item.precio)}
                    </p>
                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center border rounded">
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, -1)}
                        >
                          -
                        </Button>
                        <span className="w-8 text-center">{item.cantidad}</span>
                        <Button 
                          variant="ghost" 
                          size="sm" 
                          className="h-8 w-8"
                          onClick={() => updateQuantity(item.id, 1)}
                        >
                          +
                        </Button>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        className="text-red-500"
                        onClick={() => removeItem(item.id)}
                      >
                        Quitar del carrito
                      </Button>
                    </div>
                  </div>
                </div>
              ))}

              <div className="bg-white rounded-lg p-6 shadow-sm space-y-4">
                <h3 className="font-semibold">Medios de pago disponibles:</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg text-center">Crédito Sistecredito</div>
                  <div className="p-4 border rounded-lg text-center">PSE</div>
                  <div className="p-4 border rounded-lg text-center">Nequi</div>
                  <div className="p-4 border rounded-lg text-center">Contra Entrega</div>
                  <div className="p-4 border rounded-lg text-center">Tarjeta Crédito</div>
                  <div className="p-4 border rounded-lg text-center">ADI</div>
                  <div className="p-4 border rounded-lg text-center">Suma Pay</div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span>¿Quieres saber más sobre Sistecredito?</span>
                  <a href="#" className="text-estelar-purple hover:underline">¿Cómo funciona?</a>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg p-6 shadow-sm space-y-4 sticky top-4">
                <h3 className="font-semibold text-lg">Resumen de la compra</h3>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Descuentos</span>
                    <span className="text-green-600">-{formatPrice(descuento)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold">
                    <span>Total a pagar</span>
                    <span className="text-estelar-purple">{formatPrice(total)}</span>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="text-sm text-gray-600 mb-4">
                    1 cuota(s) de {formatPrice(total / 4)} con{' '}
                    <span className="text-green-600">sistecredito</span>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Link to="/">
                      <Button variant="outline" className="w-full">
                        Seguir comprando
                      </Button>
                    </Link>
                    <Link to="/checkout">
                      <Button className="w-full">
                        Continuar con la compra
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t">
                  <p className="text-sm text-center">Tenemos todos los medios de pago:</p>
                  <div className="flex justify-center gap-2">
                    <img src="/public/lovable-uploads/9983b5ee-9932-45ae-aeab-b23a8cf0dc58.png" alt="Métodos de pago" className="h-8" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default CarritoPage;
