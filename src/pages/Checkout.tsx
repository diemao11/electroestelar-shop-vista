import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { ArrowLeft, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Checkout = () => {
  const [showShippingForm, setShowShippingForm] = useState(false);

  const cartItems = [
    {
      id: 1,
      nombre: 'Audífonos Bluetooth 3A',
      precio: 360000,
      imagen: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      id: 2,
      nombre: 'Organizador Maquillaje Maletín Con Espejo',
      precio: 209999,
      imagen: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
      id: 3,
      nombre: 'Máquina Peluquería Canina Inalámbrica Mascotas Perros Gatos Kit Completo',
      precio: 129900,
      imagen: 'https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    }
  ];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.precio, 0);
  const descuento = 400053;
  const envio = 0;
  const tarifaServicio = 0;
  const cupones = 0;
  const total = subtotal - descuento + envio + tarifaServicio + cupones;

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="grid lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3 space-y-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-estelar-purple text-white flex items-center justify-center text-sm">1</span>
              <h2 className="text-lg font-semibold">Datos de contacto</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label htmlFor="email">Correo electrónico</Label>
                <Input type="email" id="email" placeholder="tu@email.com" />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="nombre">Nombre(s)</Label>
                  <Input type="text" id="nombre" />
                </div>
                <div>
                  <Label htmlFor="apellidos">Apellido(s)</Label>
                  <Input type="text" id="apellidos" />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="documento">Documento</Label>
                  <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                    <option value="cc">CC</option>
                    <option value="ce">CE</option>
                    <option value="passport">Pasaporte</option>
                  </select>
                </div>
                <div>
                  <Label htmlFor="numerodoc">Número de CC</Label>
                  <Input type="text" id="numerodoc" />
                </div>
              </div>
              
              <div>
                <Label htmlFor="celular">Número celular</Label>
                <Input type="tel" id="celular" />
              </div>

              <div className="text-xs text-gray-500 space-y-2">
                <p>AVISO DE PRIVACIDAD: De conformidad, te solicitaremos algunos datos personales que utilizaremos para tramitar, atender y gestionar tu solicitud. Si deseas ejercer tus derechos de habeas data podrás hacerlo en cualquier momento escribiéndonos a <a href="mailto:contacto@lovable.com" className="text-estelar-purple">contacto@lovable.com</a></p>
                <div className="flex items-start space-x-2">
                  <Checkbox id="terms" className="mt-1" />
                  <Label htmlFor="terms" className="text-xs">Consulte nuestra política de privacidad en https://www.loveable.com/es/data/PrivacyEst</Label>
                </div>
              </div>
            </div>
          </div>

          {/* Shipping Information */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-estelar-purple text-white flex items-center justify-center text-sm">2</span>
              <h2 className="text-lg font-semibold">Datos de envío</h2>
            </div>
            
            {!showShippingForm ? (
              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => setShowShippingForm(true)}
              >
                Agregar dirección de envío
              </Button>
            ) : (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="department">Departamento</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar departamento" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="antioquia">Antioquia</SelectItem>
                        <SelectItem value="cundinamarca">Cundinamarca</SelectItem>
                        <SelectItem value="valle">Valle del Cauca</SelectItem>
                        <SelectItem value="atlantico">Atlántico</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="city">Ciudad</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccionar ciudad" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="medellin">Medellín</SelectItem>
                        <SelectItem value="bogota">Bogotá</SelectItem>
                        <SelectItem value="cali">Cali</SelectItem>
                        <SelectItem value="barranquilla">Barranquilla</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="address">Dirección de envío</Label>
                  <Input 
                    type="text" 
                    id="address" 
                    placeholder="Ej: Calle 123 # 45-67 Apto 890"
                  />
                </div>

                <div>
                  <Label htmlFor="additional">Información adicional (opcional)</Label>
                  <Input 
                    type="text" 
                    id="additional" 
                    placeholder="Ej: Casa color blanco, cerca al parque"
                  />
                </div>
              </div>
            )}
          </div>

          {/* Payment Methods */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-estelar-purple text-white flex items-center justify-center text-sm">3</span>
              <h2 className="text-lg font-semibold">Medios de pago</h2>
            </div>
            
            <RadioGroup defaultValue="sistecredito" className="grid gap-4">
              <div className={cn(
                "flex items-center space-x-2 rounded-lg border p-4",
                "hover:bg-gray-50 [&:has([data-state=checked])]:bg-gray-50"
              )}>
                <RadioGroupItem value="tarjeta" id="tarjeta" />
                <Label htmlFor="tarjeta" className="flex-grow">Tarjeta de Crédito</Label>
              </div>
              <div className={cn(
                "flex items-center space-x-2 rounded-lg border p-4",
                "hover:bg-gray-50 [&:has([data-state=checked])]:bg-gray-50"
              )}>
                <RadioGroupItem value="sistecredito" id="sistecredito" />
                <Label htmlFor="sistecredito" className="flex-grow">Crédito Sistecredito</Label>
              </div>
              <div className={cn(
                "flex items-center space-x-2 rounded-lg border p-4",
                "hover:bg-gray-50 [&:has([data-state=checked])]:bg-gray-50"
              )}>
                <RadioGroupItem value="adi" id="adi" />
                <Label htmlFor="adi" className="flex-grow">Crédito ADI</Label>
              </div>
              <div className={cn(
                "flex items-center space-x-2 rounded-lg border p-4",
                "hover:bg-gray-50 [&:has([data-state=checked])]:bg-gray-50"
              )}>
                <RadioGroupItem value="sumapay" id="sumapay" />
                <Label htmlFor="sumapay" className="flex-grow">Crédito Suma Pay</Label>
              </div>
              <div className={cn(
                "flex items-center space-x-2 rounded-lg border p-4",
                "hover:bg-gray-50 [&:has([data-state=checked])]:bg-gray-50"
              )}>
                <RadioGroupItem value="pse" id="pse" />
                <Label htmlFor="pse" className="flex-grow">PSE</Label>
              </div>
              <div className={cn(
                "flex items-center space-x-2 rounded-lg border p-4",
                "hover:bg-gray-50 [&:has([data-state=checked])]:bg-gray-50"
              )}>
                <RadioGroupItem value="nequi" id="nequi" />
                <Label htmlFor="nequi" className="flex-grow">Nequi</Label>
              </div>
              <div className={cn(
                "flex items-center space-x-2 rounded-lg border p-4",
                "hover:bg-gray-50 [&:has([data-state=checked])]:bg-gray-50"
              )}>
                <RadioGroupItem value="contraentrega" id="contraentrega" />
                <Label htmlFor="contraentrega" className="flex-grow">Contra Entrega</Label>
              </div>
            </RadioGroup>
          </div>
        </div>

        {/* Order Summary */}
        <div className="lg:col-span-2">
          <div className="bg-gray-50 rounded-lg p-6 sticky top-4 space-y-6">
            <div className="flex items-center justify-between bg-pink-100 p-4 rounded-lg">
              <div className="flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4" />
                Tiempo límite de compra
              </div>
              <span className="font-semibold">59:10</span>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Resumen de compra</h3>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-3">
                    <img
                      src={item.imagen}
                      alt={item.nombre}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-grow">
                      <p className="text-sm">{item.nombre}</p>
                      <p className="font-semibold">{formatPrice(item.precio)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Link to="/carrito" className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900">
              <ArrowLeft className="h-4 w-4 mr-1" />
              Regresar al carrito
            </Link>

            <div className="border-t pt-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Envío</span>
                <span>{formatPrice(envio)}</span>
              </div>
              <div className="flex justify-between">
                <div className="flex items-center gap-1">
                  <span className="text-gray-600">Tarifa de servicio</span>
                  <div className="text-gray-400 cursor-help" title="Información sobre la tarifa de servicio">(?)</div>
                </div>
                <span>{formatPrice(tarifaServicio)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Cupones</span>
                <span>{formatPrice(cupones)}</span>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
