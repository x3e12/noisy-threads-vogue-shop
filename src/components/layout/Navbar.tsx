
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';

const navigation = {
  categories: [
    {
      name: 'MEN',
      path: '/men',
      subcategories: [
        { name: 'T-Shirts', path: '/men/t-shirts' },
        { name: 'Hoodies', path: '/men/hoodies' },
        { name: 'Jeans', path: '/men/jeans' },
        { name: 'Jackets', path: '/men/jackets' },
      ],
    },
    {
      name: 'WOMEN',
      path: '/women',
      subcategories: [
        { name: 'Dresses', path: '/women/dresses' },
        { name: 'Tops', path: '/women/tops' },
        { name: 'Skirts', path: '/women/skirts' },
        { name: 'Jeans', path: '/women/jeans' },
      ],
    },
    {
      name: 'PREMIUM',
      path: '/premium',
      subcategories: [
        { name: 'Limited Edition', path: '/premium/limited-edition' },
        { name: 'Collaborations', path: '/premium/collaborations' },
        { name: 'Exclusive', path: '/premium/exclusive' },
      ],
    },
  ],
  pages: [
    { name: 'NEW ARRIVALS', path: '/new-arrivals' },
    { name: 'BESTSELLERS', path: '/bestsellers' },
    { name: 'ACCESSORIES', path: '/accessories' },
    { name: 'CONTACT', path: '/contact' },
  ],
};

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const toggleCategory = (category: string) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold tracking-tight text-noisy-black">
              NOISY THREADS
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.pages.map((page) => (
              <Link
                key={page.name}
                to={page.path}
                className="text-sm font-medium text-gray-700 hover:text-gray-900"
              >
                {page.name}
              </Link>
            ))}
            {navigation.categories.map((category) => (
              <div key={category.name} className="relative group">
                <Link
                  to={category.path}
                  className="text-sm font-medium text-gray-700 hover:text-gray-900 flex items-center"
                >
                  {category.name}
                </Link>
                <div className="absolute z-10 hidden group-hover:block bg-white shadow-lg border-t border-gray-200 w-48 mt-2">
                  <div className="py-1">
                    {category.subcategories.map((subcategory) => (
                      <Link
                        key={subcategory.name}
                        to={subcategory.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {subcategory.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="text-gray-700 hover:text-gray-900">
              <Search size={20} />
            </button>
            <Link to="/account" className="text-gray-700 hover:text-gray-900">
              <User size={20} />
            </Link>
            <Link to="/cart" className="text-gray-700 hover:text-gray-900 relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 bg-noisy-black text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                0
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-700 hover:text-gray-900"
              onClick={() => setOpen(!open)}
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.pages.map((page) => (
              <Link
                key={page.name}
                to={page.path}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900"
                onClick={() => setOpen(false)}
              >
                {page.name}
              </Link>
            ))}
            {navigation.categories.map((category) => (
              <div key={category.name}>
                <button
                  className="flex justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900"
                  onClick={() => toggleCategory(category.name)}
                >
                  <span>{category.name}</span>
                  <span>{activeCategory === category.name ? '-' : '+'}</span>
                </button>
                {activeCategory === category.name && (
                  <div className="pl-6 space-y-1">
                    {category.subcategories.map((subcategory) => (
                      <Link
                        key={subcategory.name}
                        to={subcategory.path}
                        className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900"
                        onClick={() => setOpen(false)}
                      >
                        {subcategory.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-around py-4 border-t border-gray-200">
            <Link to="/search" className="text-gray-700 hover:text-gray-900" onClick={() => setOpen(false)}>
              <Search size={20} />
            </Link>
            <Link to="/account" className="text-gray-700 hover:text-gray-900" onClick={() => setOpen(false)}>
              <User size={20} />
            </Link>
            <Link to="/cart" className="text-gray-700 hover:text-gray-900 relative" onClick={() => setOpen(false)}>
              <ShoppingBag size={20} />
              <span className="absolute -top-2 -right-2 bg-noisy-black text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                0
              </span>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
