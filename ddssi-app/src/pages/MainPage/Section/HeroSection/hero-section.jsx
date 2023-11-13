import React from 'react'
import { BodyContainer, MainContainer } from './hero-section-styles'
import HeroImage from "../../../../assets/hero-image.png"
const HeroSection = () => {
  return (
    <MainContainer>
      <BodyContainer>
        <div className='flex-1'>
          <span className='text-6xl font-bold text-white'>We value your business and we will always provide the right solution for you!</span>
          <p className='text-3xl font-bold text-[#5BE0E6]'><br/>Let’s get started with <br/>your solution.</p>
        </div>
        <div className='flex flex-1 justify-center items-center'>
          <img src={HeroImage} alt='Hero Image' />
        </div>
      </BodyContainer>
    </MainContainer>
  )
}

export default HeroSection