import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 pt-20">
      <h1 className="font-heading text-8xl font-black text-primary mb-4">404</h1>
      <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 text-center">
        Page Not Found
      </h2>
      <p className="text-muted-foreground text-center mb-8 max-w-md">
        Looks like you've ventured into uncharted waters. This page doesn't exist!
      </p>
      <Link to="/" className="btn-hero">
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
