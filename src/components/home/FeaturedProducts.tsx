
import React from 'react';
import { ProductCard, Product } from '../products/ProductCard';

const products: Product[] = [
  {
    id: 1,
    name: 'Urban Street Graphic Tee',
    price: 1299,
    imageSrc: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=1287&auto=format&fit=crop',
    imageAlt: 'Urban Street Graphic Tee',
    category: 'T-Shirts',
    href: '/products/urban-street-graphic-tee',
    colors: ['#000000', '#FFFFFF', '#808080'],
    isFeatured: true,
    isNew: true,
  },
  {
    id: 2,
    name: 'Oversized Hoodie',
    price: 2499,
    imageSrc: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1287&auto=format&fit=crop',
    imageAlt: 'Oversized Hoodie',
    category: 'Hoodies',
    href: '/products/oversized-hoodie',
    colors: ['#000000', '#D3D3D3', '#A52A2A'],
    isFeatured: true,
    isBestseller: true,
  },
  {
    id: 3,
    name: 'Distressed Denim Jacket',
    price: 3499,
    imageSrc: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1336&auto=format&fit=crop',
    imageAlt: 'Distressed Denim Jacket',
    category: 'Jackets',
    href: '/products/distressed-denim-jacket',
    colors: ['#4682B4', '#000000'],
    isFeatured: true,
  },
  {
    id: 4,
    name: 'Cargo Pants',
    price: 2299,
    imageSrc: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1287&auto=format&fit=crop',
    imageAlt: 'Cargo Pants',
    category: 'Pants',
    href: '/products/cargo-pants',
    colors: ['#808080', '#000000', '#556B2F'],
    isFeatured: true,
    isNew: true,
  },
];

export const FeaturedProducts = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">FEATURED PRODUCTS</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
