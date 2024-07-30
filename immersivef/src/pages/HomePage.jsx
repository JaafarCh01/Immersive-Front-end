import React from 'react'
import Hero from '../components/Hero';
import Cards from '../components/Cards';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';

export const HomePage = () => {
  return ( <>
        <Hero />
        <Cards />
        <Testimonials />
         </>
  )
}

export default HomePage;