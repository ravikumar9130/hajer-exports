import React from 'react'
import Header from '../components/Header'
import Carousel from '../components/Carousel';
import Granite from '../components/Granite';
import Marble from '../components/Marble';
import Product from '../components/Product';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';

function Home() {
  return (
      <>
          <Header />
      <Carousel />
      <Granite />
      <Marble />
      <Product />
      <AboutUs />
      <ContactUs />
            </>
  )
}

export default Home