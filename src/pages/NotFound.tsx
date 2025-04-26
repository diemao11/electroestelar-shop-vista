
import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-estelar-gray-light flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <div className="mb-8">
          <span className="text-8xl font-bold text-gradient">404</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 text-estelar-gray-dark">¡Ups! Página no encontrada</h1>
        <p className="text-estelar-gray mb-8">
          Lo sentimos, la página que estás buscando no existe o ha sido movida.
        </p>
        <Button asChild className="btn-primary inline-flex items-center">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Volver a la página principal
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
