
import React from 'react';
import { Layout } from '../components/layout/Layout';
import { ProductCard, Product } from '../components/products/ProductCard';

const womenProducts: Product[] = [
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
    id: 102,
    name: 'Cropped Tank Top',
    price: 999,
    imageSrc: 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?q=80&w=1372&auto=format&fit=crop',
    imageAlt: 'Cropped Tank Top',
    category: 'Tops',
    href: '/products/cropped-tank-top',
    colors: ['#000000', '#FFFFFF', '#800000'],
    isBestseller: true,
  },
  {
    id: 103,
    name: 'High Waist Skirt',
    price: 1799,
    imageSrc: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?q=80&w=1364&auto=format&fit=crop',
    imageAlt: 'High Waist Skirt',
    category: 'Skirts',
    href: '/products/high-waist-skirt',
    colors: ['#000000', '#808080'],
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
  {
    id: 105,
    name: 'Oversized Blazer',
    price: 3699,
    imageSrc: 'https://images.unsplash.com/photo-1600574691453-499962cc0611?q=80&w=1287&auto=format&fit=crop',
    imageAlt: 'Oversized Blazer',
    category: 'Jackets',
    href: '/products/oversized-blazer',
    colors: ['#000000', '#778899'],
  },
  {
    id: 106,
    name: 'Knit Sweater',
    price: 2299,
    imageSrc: 'https://images.unsplash.com/photo-1515668862843-8cec164073a9?q=80&w=1303&auto=format&fit=crop',
    imageAlt: 'Knit Sweater',
    category: 'Sweaters',
    href: '/products/knit-sweater',
    colors: ['#F5F5DC', '#D2B48C', '#8B4513'],
    isBestseller: true,
  },
  {
    id: 107,
    name: 'Slip Midi Dress',
    price: 3299,
    imageSrc: 'https://images.unsplash.com/photo-1579170053380-58064b2dee67?q=80&w=1471&auto=format&fit=crop',
    imageAlt: 'Slip Midi Dress',
    category: 'Dresses',
    href: '/products/slip-midi-dress',
    colors: ['#000000', '#800000', '#6B8E23'],
  },
  {
    id: 108,
    name: 'Wide Leg Pants',
    price: 2399,
    imageSrc: 'https://images.unsplash.com/photo-1628602040804-93df13746d6a?q=80&w=1287&auto=format&fit=crop',
    imageAlt: 'Wide Leg Pants',
    category: 'Pants',
    href: '/products/wide-leg-pants',
    colors: ['#000000', '#F5F5DC', '#696969'],
  },
];

const WomenPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Women's Collection</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {womenProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default WomenPage;
