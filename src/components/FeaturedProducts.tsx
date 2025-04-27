
import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';

interface Product {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  rating: number;
  isNew?: boolean;
  isFeatured?: boolean;
}

const featuredProducts: Product[] = [
  {
    id: 1,
    name: 'Smart TV 4K UltraHD',
    category: 'electrodomesticos',
    price: 1499900,
    image: 'https://images.unsplash.com/photo-1588854337115-1c67d9247e4d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
    rating: 4.8,
    isFeatured: true
  },
  {
    id: 2,
    name: 'Sofá Modular de Cuero',
    category: 'muebles',
    price: 2899900,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
    rating: 4.9,
    isFeatured: true
  },
  {
    id: 3,
    name: 'Laptop Ultradelgada',
    category: 'tecnologia',
    price: 3199900,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
    rating: 4.7,
    isNew: true
  },
  {
    id: 4,
    name: 'Silla Ergonómica',
    category: 'muebles',
    price: 699900,
    image: 'https://images.unsplash.com/photo-1505843490578-27c2c6714acd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80',
    rating: 4.6,
    isFeatured: true
  }
];

const formatPrice = (price: number) => {
  return price.toLocaleString('es-CO', {
    style: 'currency',
    currency: 'COP',
    maximumFractionDigits: 0,
  });
};

const FeaturedProducts = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (product: Product) => {
    addToCart({
      id: product.id,
      nombre: product.name,
      precio: product.price,
      imagen: product.image,
      cantidad: 1
    });
    
    toast.success(`${product.name} agregado al carrito`);
    navigate('/carrito');
  };

  const handleAddToWishlist = (product: Product) => {
    toast.success(`${product.name} agregado a favoritos`);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-lg mb-4 text-gradient">Productos Destacados</h2>
          <p className="text-estelar-gray max-w-2xl mx-auto">
            Descubre nuestra selección de productos premium, diseñados para transformar tu hogar y mejorar tu experiencia diaria.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product) => (
            <div key={product.id} className="product-card group h-full flex flex-col">
              <div className="relative overflow-hidden">
                <Link to={`/producto/${product.id}`}>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </Link>
                <div className="absolute top-0 right-0 m-4 flex flex-col gap-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 rounded-full bg-white text-estelar-gray-dark border-none hover:bg-estelar-purple hover:text-white"
                    onClick={() => handleAddToWishlist(product)}
                  >
                    <Heart className="h-4 w-4" />
                    <span className="sr-only">Add to wishlist</span>
                  </Button>
                </div>

                {product.isNew && (
                  <div className="absolute top-0 left-0 m-4 bg-estelar-gold text-estelar-gray-dark text-xs font-medium py-1 px-2 rounded">
                    NUEVO
                  </div>
                )}

                {product.isFeatured && !product.isNew && (
                  <div className="absolute top-0 left-0 m-4 bg-estelar-purple text-white text-xs font-medium py-1 px-2 rounded">
                    DESTACADO
                  </div>
                )}
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <span className="text-xs text-estelar-gray uppercase tracking-wider mb-1">
                  {product.category}
                </span>
                <Link to={`/producto/${product.id}`} className="group-hover:text-estelar-purple transition-colors duration-300">
                  <h3 className="font-semibold text-lg mb-2">
                    {product.name}
                  </h3>
                </Link>
                
                <div className="flex items-center mt-auto">
                  <div className="flex-1">
                    <span className="font-bold text-lg text-estelar-purple">
                      {formatPrice(product.price)}
                    </span>
                  </div>
                  <Button
                    className="rounded-full bg-estelar-purple hover:bg-estelar-purple-light"
                    size="icon"
                    onClick={() => handleAddToCart(product)}
                  >
                    <ShoppingCart className="h-4 w-4" />
                    <span className="sr-only">Agregar al carrito</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex justify-center mt-12">
          <Button asChild className="btn-primary px-8 py-6">
            <a href="/productos">Ver todos los productos</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
