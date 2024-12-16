"use client"

// import Header from './ui/Header'
import CarouselV2 from './components/CarouselProductV2'
import Made from './ui/MadeWithLove'
import {HeaderV2} from './ui/HeaderV2'
import { PlaceholdersAndVanishInputDemo} from './ui/Newsletter'
import Badges from './ui/Badges'
import NewIn from './ui/NewIn'

// import Navbar from './components/Navbar'
// import Footer from './components/Footer'
import Carousel from './ui/Carousel'
// import CookieConsentBanner from './components/CookieConsentBanner'

export default function Home() {

return (
  <div className='overflow-x-hidden'>
      <HeaderV2/>
      {/* <Header/> */}
      <CarouselV2/>
      <NewIn/>
      <Made/>
      <Carousel/>
      <Badges/>
      <PlaceholdersAndVanishInputDemo/>
      {/* <CookieConsentBanner /> */}
    </div>
  );
}