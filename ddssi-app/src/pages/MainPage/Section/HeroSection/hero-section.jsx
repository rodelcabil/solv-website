import React from 'react'
import { BodyContainer, MainContainer } from './hero-section-styles'
import SolvSuite from "../../../../assets/solv-suite.png"


const HeroSection = () => {
  return (
    <MainContainer>
      <BodyContainer>
        <div data-aos="fade-right" className='flex-1' >
          <p className='header text-6xl text-left font-normal text-white leading-[72px]'>
            We value your business and we will always provide the right solution for you!
          </p>
          <p className='sub-header text-3xl font-normal text-[#5BE0E6]'><br/>Let’s SOLV it!</p>
        </div>
        <div data-aos="fade-left" className='flex flex-1 justify-center items-center'>
          <img id="hero-img" src={SolvSuite} alt='Hero Image' />
        </div>
      </BodyContainer>
    </MainContainer>
  )
}

export default HeroSection