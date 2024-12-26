"use client"
import CarouselV2 from './components/CarouselProductV2'
import Made from './ui/MadeWithLove'
import {HeaderV2} from './ui/HeaderV2'
import { PlaceholdersAndVanishInputDemo} from './ui/Newsletter'
import Badges from './ui/Badges'
import PromoCode from './ui/PromoCode'
import Carousel from './ui/Carousel'
import './components/CookieConsentBanner'
import NewCollection from '../app/components/NewCollection'

export default function Home() {
return (
  <div className='overflow-x-hidden'>
      <HeaderV2/>
      {/* <Header/> */}
    
      <div className='bg-gray-50 p-6'>
        <CarouselV2/>
      </div>
      <PromoCode/>
      <NewCollection/>
      <Made/>
      <Carousel/>
      <Badges/>
      <PlaceholdersAndVanishInputDemo/>
      {/* <CookieConsentBanner /> */}
    </div>
  );
}