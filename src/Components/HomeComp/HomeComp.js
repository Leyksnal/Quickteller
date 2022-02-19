import React from 'react'
import WhyComp from '../WhyComp/WhyComp'
import HeaderComp from '../HeaderComp/HeaderComp'
import HeroComp from '../HeroComp/HeroComp'
import InstantComp from '../InstantComp/InstantComp'
import StorefrontComp from '../StorefrontComp/StorefrontComp'
import StoreComp from '../StoreComp/StoreComp'
import TerminalComp from '../TerminalComp/TerminalComp'
import ContactComp from '../ContactComp/ContactComp'
import FooterComp from '../FooterComp/FooterComp'

export default function HomeComp() {
  return (
    <div>
      <HeaderComp/>
      <HeroComp/>
      <WhyComp/>
      <InstantComp/>
      <StorefrontComp/>
      <StoreComp/>
      <TerminalComp/>
      <ContactComp/>
      <FooterComp/>
    </div>
  ) 
  
}
