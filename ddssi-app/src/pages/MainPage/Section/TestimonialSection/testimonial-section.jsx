import React from 'react'
import { MainContainer, BodyContainer } from './testimonial-section-styles'
import TestimonialCard from '../../../../components/TestimonialCard/testimonial-card'

const TestimonialSection = () => {
  return (
    <MainContainer id="testimonial">
      <div className='flex flex-col items-center justify-center'>
        <span className='text-4xl text-[#343434] font-normal mb-2'>CLIENT’S TESTIMONIALS</span>
        <span className='text-1xl text-[#7A7A7A] font-normal text-center'>What our other clients share.</span>
      </div>
      <br /><br />
      <BodyContainer>
        <div data-aos="fade-up" data-aos-delay="100">
          <TestimonialCard name="Accenthub" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." />
        </div>
        <div data-aos="fade-up" data-aos-delay="200">
          <TestimonialCard name="Twin Rich" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." />
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
          <TestimonialCard name="Thinkerbox Enterprises" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." />
        </div>
      </BodyContainer>
    </MainContainer>
  )
}

export default TestimonialSection