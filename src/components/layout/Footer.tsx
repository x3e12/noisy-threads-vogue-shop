
import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and social links */}
          <div className="space-y-4">
            <Link to="/" className="text-xl font-bold tracking-tight text-noisy-black">
              NOISY THREADS
            </Link>
            <p className="text-sm text-gray-600">
              Fashion that makes a statement. Bold, contemporary styles for the modern trendsetter.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-noisy-black">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-noisy-black">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-noisy-black">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Shop links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              SHOP
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/men" className="text-sm text-gray-600 hover:text-gray-900">Men</Link>
              </li>
              <li>
                <Link to="/women" className="text-sm text-gray-600 hover:text-gray-900">Women</Link>
              </li>
              <li>
                <Link to="/new-arrivals" className="text-sm text-gray-600 hover:text-gray-900">New Arrivals</Link>
              </li>
              <li>
                <Link to="/bestsellers" className="text-sm text-gray-600 hover:text-gray-900">Bestsellers</Link>
              </li>
              <li>
                <Link to="/accessories" className="text-sm text-gray-600 hover:text-gray-900">Accessories</Link>
              </li>
            </ul>
          </div>

          {/* Company links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              COMPANY
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-sm text-gray-600 hover:text-gray-900">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-gray-600 hover:text-gray-900">Contact Us</Link>
              </li>
              <li>
                <Link to="/careers" className="text-sm text-gray-600 hover:text-gray-900">Careers</Link>
              </li>
              <li>
                <Link to="/stores" className="text-sm text-gray-600 hover:text-gray-900">Stores</Link>
              </li>
            </ul>
          </div>

          {/* Customer service links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase mb-4">
              CUSTOMER SERVICE
            </h3>
            <ul className="space-y-3">
              <li>
                <Link to="/faq" className="text-sm text-gray-600 hover:text-gray-900">FAQ</Link>
              </li>
              <li>
                <Link to="/shipping" className="text-sm text-gray-600 hover:text-gray-900">Shipping & Returns</Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm text-gray-600 hover:text-gray-900">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacy" className="text-sm text-gray-600 hover:text-gray-900">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <p className="text-sm text-gray-600 text-center">
            &copy; {new Date().getFullYear()} Noisy Threads. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
