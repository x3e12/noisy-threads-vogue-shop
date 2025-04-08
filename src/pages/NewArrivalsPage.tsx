
import React from 'react';
import { Layout } from '../components/layout/Layout';
import { ProductCard, Product } from '../components/products/ProductCard';

const newArrivalsProducts: Product[] = [
  // Men's new arrivals
  {
    id: 1,
    name: 'Urban Street Graphic Tee',
    price: 1299,
    imageSrc: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=1287&auto=format&fit=crop',
    imageAlt: 'Urban Street Graphic Tee',
    category: 'T-Shirts',
    href: '/products/urban-street-graphic-tee',
    colors: ['#000000', '#FFFFFF', '#808080'],
    isNew: true,
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
    isNew: true,
  },
  // Women's new arrivals
  {
    id: 101,
    name: 'Floral Print Dress',
    price: 2899,
    imageSrc: 'https://images.unsplash.com/photo-1618244972963-dbee1a7edc95?q=80&w=1287&auto=format&fit=crop',
    imageAlt: 'Floral Print Dress',
    category: 'Dresses',
    href: '/products/floral-print-dress',
    colors: ['#FFFFFF', '#FFC0CB', '#000000'],
    isNew: true,
  },
  {
    id: 104,
    name: 'Ripped Skinny Jeans',
    price: 2499,
    imageSrc: 'https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?q=80&w=1338&auto=format&fit=crop',
    imageAlt: 'Ripped Skinny Jeans',
    category: 'Jeans',
    href: '/products/ripped-skinny-jeans',
    colors: ['#4682B4', '#000000'],
    isNew: true,
  },
  // Accessories new arrivals
  {
    id: 201,
    name: 'Canvas Tote Bag',
    price: 1299,
    imageSrc: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?q=80&w=1335&auto=format&fit=crop',
    imageAlt: 'Canvas Tote Bag',
    category: 'Bags',
    href: '/products/canvas-tote-bag',
    colors: ['#000000', '#FFFFFF', '#F5F5DC'],
    isNew: true,
  },
  {
    id: 204,
    name: 'Rectangle Sunglasses',
    price: 1799,
    imageSrc: 'https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=1287&auto=format&fit=crop',
    imageAlt: 'Rectangle Sunglasses',
    category: 'Eyewear',
    href: '/products/rectangle-sunglasses',
    colors: ['#000000', '#708090'],
    isNew: true,
  },
];

const NewArrivalsPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">New Arrivals</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {newArrivalsProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default NewArrivalsPage;
