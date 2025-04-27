
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Ofertas from "./pages/Ofertas";
import Productos from "./pages/Productos";
import Carrito from "./pages/Carrito";
import Categoria from "./pages/Categoria";
import ProductoDetalle from "./pages/ProductoDetalle";
import CarritoPage from "./pages/CarritoPage";
import Checkout from "./pages/Checkout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner position="top-right" expand={true} closeButton={true} />
      <BrowserRouter>
        <Carrito />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/categoria/:categoryId" element={<Categoria />} />
          <Route path="/producto/:productId" element={<ProductoDetalle />} />
          <Route path="/ofertas" element={<Ofertas />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/carrito" element={<CarritoPage />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
