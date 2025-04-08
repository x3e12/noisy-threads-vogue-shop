
import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    name: "Men's Collection",
    description: "Uncover the latest in men's fashion",
    imageSrc: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1287&auto=format&fit=crop",
    href: "/men",
  },
  {
    name: "Women's Collection",
    description: "Elevate your style with our women's range",
    imageSrc: "https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?q=80&w=1287&auto=format&fit=crop",
    href: "/women",
  },
  {
    name: "Accessories",
    description: "Complete your look with our accessories",
    imageSrc: "https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?q=80&w=1290&auto=format&fit=crop",
    href: "/accessories",
  },
];

export const FeaturedCategories = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">SHOP BY CATEGORY</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.name} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
                <img
                  src={category.imageSrc}
                  alt={category.name}
                  className="h-full w-full object-cover object-center group-hover:opacity-90 transition-opacity"
                  style={{ aspectRatio: "1/1" }}
                />
              </div>
              <div className="mt-4 flex flex-col items-center">
                <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
                <p className="mt-1 text-sm text-gray-500">{category.description}</p>
                <Link
                  to={category.href}
                  className="mt-4 text-sm font-medium text-noisy-black hover:underline"
                >
                  Shop Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
