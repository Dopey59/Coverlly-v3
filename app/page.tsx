"use client"

import Header from './ui/Header'
import Carousel from './ui/ProductsCarousel'
import Made from './ui/MadeWithLove'
import Newsletter from './ui/Newsletter'
import Badges from './ui/Badges'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export default function Home() {
  
  return (
    <div className='bg-gray-100 overflow-x-hidden text-black'>
      <Navbar/>
      <Header/>
      <Carousel/>
      <Made/>
      <Newsletter/>
      <Badges/>
      <Footer/>
    </div>
  );
}