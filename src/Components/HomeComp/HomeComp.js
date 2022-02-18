import React from 'react'
import WhyComp from '../WhyComp/WhyComp'
import HeaderComp from '../HeaderComp/HeaderComp'
import HeroComp from '../HeroComp/HeroComp'
import InstantComp from '../InstantComp/InstantComp'

export default function HomeComp() {
  return (
    <div>
      <HeaderComp/>
      <HeroComp/>
      <WhyComp/>
      <InstantComp/>
    </div>
  ) 
  
}