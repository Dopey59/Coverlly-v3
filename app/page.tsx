"use client"

// import Header from './ui/Header'
import ProductCarousel from './ui/ProductsCarousel'
import Made from './ui/MadeWithLove'
import {HeaderV2} from './ui/HeaderV2'
import { PlaceholdersAndVanishInputDemo} from './ui/Newsletter'
import Badges from './ui/Badges'
// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
import Carousel from './ui/Carousel'
// import CookieConsentBanner from './components/CookieConsentBanner'

export default function Home() {

return (
  <div className='overflow-x-hidden'>
    
      <HeaderV2/>
      {/* <Header/> */}
      <Carousel/>
      <ProductCarousel/>
      <Made/>
      <Badges/>
      <PlaceholdersAndVanishInputDemo/>
      {/* <CookieConsentBanner /> */}
    </div>
  );
}