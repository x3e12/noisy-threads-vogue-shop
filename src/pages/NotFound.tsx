
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Layout } from '../components/layout/Layout';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[50vh] flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-6xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-6">Oops! Page not found</p>
          <p className="text-gray-500 mb-8">The page you are looking for might have been removed or is temporarily unavailable.</p>
          <Link to="/" className="inline-block bg-noisy-black text-white px-6 py-3 rounded hover:bg-gray-900 transition-colors">
            Return to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
