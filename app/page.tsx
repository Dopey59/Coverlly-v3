"use client"
import CarouselV2 from './components/CarouselProductV2'
import Made from './ui/MadeWithLove'
import {HeaderV2} from './ui/HeaderV2'
import { PlaceholdersAndVanishInputDemo} from './ui/Newsletter'
import Badges from './ui/Badges'
import NewIn from './ui/NewIn'
import Carousel from './ui/Carousel'
import './components/CookieConsentBanner'
export default function Home() {

return (
  <div className='overflow-x-hidden'>
      <HeaderV2/>
      {/* <Header/> */}
      <div className='bg-gray-100 p-6'>
        <CarouselV2/>
      </div>
      <NewIn/>
      <Made/>
      <Carousel/>
      <Badges/>
      <PlaceholdersAndVanishInputDemo/>
      {/* <CookieConsentBanner /> */}
    </div>
  );
}