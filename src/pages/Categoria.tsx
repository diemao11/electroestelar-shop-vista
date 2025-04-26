
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Grid, List, Tag } from 'lucide-react';

const Categoria = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [loading, setLoading] = useState(true);
  
  // Datos simulados para cada categoría
  const categoriaInfo: { [key: string]: { titulo: string; descripcion: string; imagen: string } } = {
    muebles: {
      titulo: "Muebles para tu hogar",
      descripcion: "Diseños que transforman tu espacio. Confort y estilo para cada rincón de tu hogar.",
      imagen: "https://images.unsplash.com/photo-1551298370-9d3d53740c72?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    electrodomesticos: {
      titulo: "Electrodomésticos de última generación",
      descripcion: "Disfruta del sonido, la imagen y la innovación. Tecnología que se escucha y se siente.",
      imagen: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    tecnologia: {
      titulo: "Tecnología de vanguardia",
      descripcion: "Equipos de alto rendimiento para mentes brillantes. Conéctate con el futuro, hoy mismo.",
      imagen: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    }
  };

  // Productos filtrados por categoría
  const [productos, setProductos] = useState<any[]>([]);

  useEffect(() => {
    // Simulamos la carga de productos
    setLoading(true);
    
    setTimeout(() => {
      // Datos de productos simulados filtrados por categoría
      const todosProductos = [
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
          nombre: 'Sillón Reclinable',
          precio: 1899900,
          imagen: 'https://images.unsplash.com/photo-1577979749830-f1d742b96791?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
          categoria: 'muebles',
          descripcion: 'Sillón reclinable con mecanismo manual, tapizado en cuero sintético de alta calidad y reposapiés integrado.'
        },
        {
          id: 8,
          nombre: 'Estantería Modular',
          precio: 599900,
          imagen: 'https://images.unsplash.com/photo-1571821507910-3113ea1f8d10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
          categoria: 'muebles',
          descripcion: 'Sistema de estanterías modulares personalizables, fabricadas en madera natural con tratamiento ecológico.'
        },
        {
          id: 9,
          nombre: 'Consola de Videojuegos',
          precio: 2499900,
          imagen: 'https://images.unsplash.com/photo-1607853202273-797f1c22a38e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
          categoria: 'tecnologia',
          descripcion: 'Consola de última generación con procesador de alto rendimiento, 1TB de almacenamiento SSD y gráficos 4K.'
        },
        {
          id: 10,
          nombre: 'Refrigerador Inteligente',
          precio: 4999900,
          imagen: 'https://images.unsplash.com/photo-1584568694244-14fbdf83bd30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
          categoria: 'electrodomesticos',
          descripcion: 'Refrigerador con pantalla táctil, sistema de dispensación de agua filtrada y hielo, y conectividad WiFi.'
        }
      ];
      
      // Filtrar por la categoría actual
      const productosFiltrados = todosProductos.filter(producto => producto.categoria === categoryId);
      setProductos(productosFiltrados);
      setLoading(false);
    }, 500);
  }, [categoryId]);

  // Formatear precio en COP
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0
    }).format(price);
  };

  // Obtener información de la categoría actual
  const categoriaActual = categoriaInfo[categoryId as string] || {
    titulo: "Categoría",
    descripcion: "Descubre nuestra selección de productos",
    imagen: "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-24 pb-16">
        {/* Banner de categoría */}
        <div 
          className="relative bg-cover bg-center h-64 mb-10"
          style={{ backgroundImage: `url(${categoriaActual.imagen})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
            <div className="container-custom text-white">
              <h1 className="text-4xl font-bold mb-2">{categoriaActual.titulo}</h1>
              <p className="text-lg max-w-2xl">{categoriaActual.descripcion}</p>
            </div>
          </div>
        </div>

        <div className="container-custom">
          {/* Controles de vista */}
          <div className="flex justify-between items-center mb-8">
            <div className="text-gray-500">
              Mostrando {productos.length} productos
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
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3, 4, 5, 6].map(i => (
                <div key={i} className="bg-white rounded-lg overflow-hidden shadow-md p-5">
                  <div className="animate-pulse">
                    <div className="bg-gray-200 h-48 w-full mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-6 bg-gray-200 rounded w-1/2 mb-4"></div>
                    <div className="h-10 bg-gray-200 rounded w-full"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : productos.length > 0 ? (
            viewMode === 'grid' ? (
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
            )
          ) : (
            <div className="text-center py-16 bg-white rounded-lg shadow">
              <h2 className="text-2xl font-semibold mb-2">No hay productos disponibles</h2>
              <p className="text-gray-600 mb-6">
                No se encontraron productos en esta categoría
              </p>
              <Button asChild>
                <Link to="/productos">
                  Ver todos los productos
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

export default Categoria;
