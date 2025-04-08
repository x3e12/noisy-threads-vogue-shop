
import React from 'react';
import { Layout } from '../components/layout/Layout';
import { ProductCard, Product } from '../components/products/ProductCard';

const menProducts: Product[] = [
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
    id: 3,
    name: 'Distressed Denim Jacket',
    price: 3499,
    imageSrc: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=1336&auto=format&fit=crop',
    imageAlt: 'Distressed Denim Jacket',
    category: 'Jackets',
    href: '/products/distressed-denim-jacket',
    colors: ['#4682B4', '#000000'],
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
  {
    id: 5,
    name: 'Vintage Washed Jeans',
    price: 2699,
    imageSrc: 'https://images.unsplash.com/photo-1604176424472-9b504d8f16bb?q=80&w=1160&auto=format&fit=crop',
    imageAlt: 'Vintage Washed Jeans',
    category: 'Jeans',
    href: '/products/vintage-washed-jeans',
    colors: ['#4682B4'],
  },
  {
    id: 6,
    name: 'Striped Button Up Shirt',
    price: 1799,
    imageSrc: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1376&auto=format&fit=crop',
    imageAlt: 'Striped Button Up Shirt',
    category: 'Shirts',
    href: '/products/striped-button-up-shirt',
    colors: ['#FFFFFF', '#87CEEB'],
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
  {
    id: 8,
    name: 'Track Joggers',
    price: 1899,
    imageSrc: 'https://images.unsplash.com/photo-1531310197839-ccf54634509e?q=80&w=1365&auto=format&fit=crop',
    imageAlt: 'Track Joggers',
    category: 'Pants',
    href: '/products/track-joggers',
    colors: ['#000000', '#808080', '#000080'],
  },
];

const MenPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8">Men's Collection</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {menProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default MenPage;
