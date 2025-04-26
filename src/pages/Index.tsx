
import React, { useEffect } from 'react';
import Hero from '@/components/Hero';
import CategorySection from '@/components/CategorySection';
import FeaturedProducts from '@/components/FeaturedProducts';
import Benefits from '@/components/Benefits';
import Testimonials from '@/components/Testimonials';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { toast } from 'sonner';

const Index = () => {
  useEffect(() => {
    // Welcome toast for first-time visitors
    if (!localStorage.getItem('visited')) {
      toast('¡Bienvenido a ElectroEstelar!', {
        description: 'Descubre nuestra amplia selección de productos para transformar tu hogar.',
      });
      localStorage.setItem('visited', 'true');
    }
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main>
        <Hero />
        <CategorySection />
        <FeaturedProducts />
        <Benefits />
        <Testimonials />
        <Newsletter />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
