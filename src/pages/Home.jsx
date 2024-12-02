import React from 'react'
import HeroCarousel from '../components/home/HeroCarousel'
import BrandsSection from '../components/home/BrandSection'
import BestSeller from '../components/home/BestSeller'
import ElementorSection from '../components/home/ElementorSection'
import Banner from '../components/home/Banner'

const Home = () => {
  return (
    <div>
        <HeroCarousel/>
        <ElementorSection/>
        <BestSeller/>
        <Banner/>
        {/* <BrandsSection/> */}
    </div>
  )
}

export default Home