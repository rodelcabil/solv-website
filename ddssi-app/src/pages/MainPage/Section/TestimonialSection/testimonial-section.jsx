import React from 'react'
import { MainContainer, BodyContainer } from './testimonial-section-styles'
import TestimonialCard from '../../../../components/TestimonialCard/testimonial-card'

const TestimonialSection = () => {
  return (
    <MainContainer>
        <div className='flex flex-col items-center justify-center'>
            <span className='text-3xl text-[#343434] font-semibold mb-2'>CLIENT’S TESTIMONIALS</span>
            <span className='text-1xl text-[#7A7A7A] font-semibold text-center'>What our other clients share.</span>
        </div>
        <br/><br/>
        <BodyContainer>
            <TestimonialCard name="Accenthub" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." />
            <TestimonialCard name="Twin Rich" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." />
            <TestimonialCard name="Thinkerbox Enterprises" comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore." />
        </BodyContainer>
    </MainContainer>
  )
}

export default TestimonialSection