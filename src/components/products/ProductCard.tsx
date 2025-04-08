
import React from 'react';
import { Link } from 'react-router-dom';

export interface Product {
  id: number;
  name: string;
  price: number;
  imageSrc: string;
  imageAlt: string;
  category: string;
  href: string;
  colors?: string[];
  isFeatured?: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200">
        <Link to={product.href}>
          <img
            src={product.imageSrc}
            alt={product.imageAlt}
            className="h-full w-full object-cover object-center group-hover:opacity-75 transition-opacity"
            style={{ aspectRatio: "1/1" }}
          />
        </Link>
        {product.isNew && (
          <div className="absolute top-2 right-2 bg-noisy-black text-white text-xs font-medium px-2 py-1">
            NEW
          </div>
        )}
        {product.isBestseller && (
          <div className="absolute top-2 right-2 bg-noisy-yellow text-noisy-black text-xs font-medium px-2 py-1">
            BESTSELLER
          </div>
        )}
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-900">
          <Link to={product.href}>{product.name}</Link>
        </h3>
        <p className="mt-1 text-sm text-gray-500">{product.category}</p>
        <div className="mt-1 flex justify-between items-center">
          <p className="text-sm font-medium text-gray-900">₹{product.price.toFixed(2)}</p>
          {product.colors && (
            <div className="flex space-x-1">
              {product.colors.map((color) => (
                <div
                  key={color}
                  className="h-4 w-4 rounded-full border border-gray-300"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
