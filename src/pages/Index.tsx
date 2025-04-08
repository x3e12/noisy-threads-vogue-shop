
import React from 'react';
import { Layout } from '../components/layout/Layout';
import { Hero } from '../components/home/Hero';
import { FeaturedCategories } from '../components/home/FeaturedCategories';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { Newsletter } from '../components/home/Newsletter';

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedCategories />
      <FeaturedProducts />
      <Newsletter />
    </Layout>
  );
};

export default Index;
