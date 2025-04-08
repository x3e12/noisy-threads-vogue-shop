
import React from 'react';
import { Layout } from '../components/layout/Layout';
import { ProductCard, Product } from '../components/products/ProductCard';

const accessoriesProducts: Product[] = [
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
    id: 202,
    name: 'Bucket Hat',
    price: 999,
    imageSrc: 'https://images.unsplash.com/photo-1590075865003-e48b56211a94?q=80&w=1287&auto=format&fit=crop',
    imageAlt: 'Bucket Hat',
    category: 'Hats',
    href: '/products/bucket-hat',
    colors: ['#000000', '#000080', '#8B4513'],
    isBestseller: true,
  },
  {
    id: 203,
    name: 'Leather Belt',
    price: 1499,
    imageSrc: 'https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?q=80&w=1290&auto=format&fit=crop',
    imageAlt: 'Leather Belt',
    category: 'Belts',
    href: '/products/leather-belt',
    colors: ['#000000', '#8B4513'],
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
  {
    id: 205,
    name: 'Chunky Chain Necklace',
    price: 1299,
    imageSrc: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?q=80&w=1288&auto=format&fit=crop',
    imageAlt: 'Chunky Chain Necklace',
    category: 'Jewelry',
    href: '/products/chunky-chain-necklace',
    colors: ['#FFD700', '#C0C0C0'],
  },
  {
    id: 206,
    name: 'Knit Beanie',
    price: 899,
    imageSrc: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?q=80&w=1287&auto=format&fit=crop',
    imageAlt: 'Knit Beanie',
    category: 'Hats',
    href: '/products/knit-beanie',
    colors: ['#000000', '#808080', '#BC8F8F'],
    isBestseller: true,
  },
  {
    id: 207,
    name: 'Canvas Backpack',
    price: 2499,
    imageSrc: 'https://images.unsplash.com/photo-1516762689617-e1cffcef479d?q=80&w=1311&auto=format&fit=crop',
    imageAlt: 'Canvas Backpack',
    category: 'Bags',
    href: '/products/canvas-backpack',
    colors: ['#000000', '#556B2F', '#8B4513'],
  },
  {
    id: 208,
    name: 'Fingerless Gloves',
    price: 799,
    imageSrc: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1287&auto=format&fit=crop',
    imageAlt: 'Fingerless Gloves',
    category: 'Gloves',
    href: '/products/fingerless-gloves',
    colors: ['#000000', '#808080'],
  },
];

const AccessoriesPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Accessories</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {accessoriesProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default AccessoriesPage;
