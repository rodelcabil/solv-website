import React from 'react'
import { BodyContainer, MainContainer } from './hero-section-styles'
import SolvSuite from "../../../../assets/solv-suite.png"
import { setActiveNav } from '../../../../redux/activeNavSlice'
import { useDispatch } from 'react-redux'
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react'
import SectionObserver from '../../../../functions/section-obeserver'
import AnySection from '../AnySection/any-section'

const HeroSection = () => {

  const { ref } = SectionObserver("home");

  return (
    <div ref={ref} id="home">
      <MainContainer  >
        <BodyContainer>
          <div data-aos="fade-right" className='flex-1 hero-left-container' >
            <p className='header text-6xl text-left font-normal text-[#343434] leading-[72px]'>
              We <span className='gradient-text'>value</span> your business and we will always provide the <span className='gradient-text'>right solution</span> for you!
            </p>
            <p className='sub-header text-3xl font-normal text-[#1595FF]'><br />Let’s SOLV it!</p>

          </div>
          <div data-aos="fade-left" className='flex flex-1 justify-center items-center hero-right-container'>
            <img id="hero-img" src={SolvSuite} alt='Hero Image' />
            <div className="box"></div>
            <div className="triangle"></div>
            <div className="triangle-2"></div>
            <div className="rings"></div>
            <div className="rings-2"></div>
          </div>
        </BodyContainer>

      </MainContainer>
      <AnySection />
    </div>
  )
}

export default HeroSection