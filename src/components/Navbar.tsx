
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, Search, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Mock cart count - in a real app, this would come from a context or state management
    setCartCount(3);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-white/90 backdrop-blur-md shadow-md py-2" 
          : "bg-transparent py-4"
      )}
    >
      <div className="container-custom flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-gradient">ElectroEstelar</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/categoria/muebles" className="nav-link">Muebles</Link>
          <Link to="/categoria/electrodomesticos" className="nav-link">Electrodomésticos</Link>
          <Link to="/categoria/tecnologia" className="nav-link">Tecnología</Link>
        </nav>

        <div className="hidden md:flex items-center space-x-4">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5 text-estelar-gray-dark" />
          </Button>
          <Link to="/carrito" className="relative">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5 text-estelar-gray-dark" />
            </Button>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-estelar-purple text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <Link to="/carrito" className="relative mr-4">
            <Button variant="ghost" size="icon">
              <ShoppingCart className="h-5 w-5 text-estelar-gray-dark" />
            </Button>
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-estelar-purple text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                {cartCount}
              </span>
            )}
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-estelar-gray-dark" />
            ) : (
              <Menu className="h-6 w-6 text-estelar-gray-dark" />
            )}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in">
          <nav className="container-custom py-6 flex flex-col space-y-4">
            <Link 
              to="/categoria/muebles" 
              className="nav-link py-2"
              onClick={() => setIsOpen(false)}
            >
              Muebles
            </Link>
            <Link 
              to="/categoria/electrodomesticos" 
              className="nav-link py-2"
              onClick={() => setIsOpen(false)}
            >
              Electrodomésticos
            </Link>
            <Link 
              to="/categoria/tecnologia" 
              className="nav-link py-2"
              onClick={() => setIsOpen(false)}
            >
              Tecnología
            </Link>
            <Button variant="ghost" size="sm" className="flex items-center justify-start">
              <Search className="h-5 w-5 mr-2" />
              Buscar
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
