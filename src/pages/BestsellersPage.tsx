
import React from 'react';
import { Layout } from '../components/layout/Layout';
import { ProductCard, Product } from '../components/products/ProductCard';

const bestsellersProducts: Product[] = [
  // Men's bestsellers
  {
    id: 2,
    name: 'Oversized Hoodie',
    price: 2499,
    imageSrc: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1287&auto=format&fit=crop',
    imageAlt: 'Oversized Hoodie',
    category: 'Hoodies',
    href: '/products/oversized-hoodie',
    colors: ['#000000', '#D3D3D3', '#A52A2A'],
    isBestseller: true,
  },
  {
    id: 7,
    name: 'Logo Print Sweatshirt',
    price: 1999,
    imageSrc: 'https://images.unsplash.com/photo-1619396406348-b3f13b88234f?q=80&w=1287&auto=format&fit=crop',
    imageAlt: 'Logo Print Sweatshirt',
    category: 'Sweatshirts',
    href: '/products/logo-print-sweatshirt',
    colors: ['#000000', '#C0C0C0', '#8B0000'],
    isBestseller: true,
  },
  // Women's bestsellers
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
  // Accessories bestsellers
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
];

const BestsellersPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Bestsellers</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {bestsellersProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default BestsellersPage;
