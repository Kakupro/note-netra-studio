import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <span className="text-label mb-4 block">Error 404</span>
        <h1 className="mb-4 text-6xl font-bold text-foreground">Page not found</h1>
        <p className="mb-8 text-lg text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium text-sm hover:bg-primary/90 transition-all duration-200"
        >
          Return home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
