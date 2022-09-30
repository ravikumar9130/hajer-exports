import React from 'react'
import Header from '../components/Header'
import Carousel from '../components/Carousel';
import Granite from '../components/Granite';
import Marble from '../components/Marble';
import AboutUs from '../components/AboutUs';

function Home() {
  return (
      <>
          <Header />
      <Carousel />
      <Granite />
      <Marble />
      {/* <AboutUs /> */}
            </>
  )
}

export default Home