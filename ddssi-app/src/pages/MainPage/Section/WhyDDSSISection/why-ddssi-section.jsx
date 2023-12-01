import React from 'react'
import { MainContainer, BodyContainer } from './why-ddssi-section-styles'
import Reason from '../../../../components/ReasonCard/reason-card'

const WhyDDSSISection = () => {
  return (
    <MainContainer id="whyddssi">
      <BodyContainer>
        <div className='flex flex-col'>
          <span className='text-4xl text-[#343434] font-normal text-center'>Why DDSSI?</span>
          <span className='text-1xl text-[#7A7A7A] font-normal text-center'>Reasons why our clients chose us.</span>
        </div>
      </BodyContainer>
      <br /><br />
      <BodyContainer>
        <div data-aos="flip-right" data-aos-delay="100" className='flex'>
          <Reason data-aos="flip-right" title="Built on a rock solid foundation." description="We built our system on a solid and proven platform that is tested and stable to handle the demands of businesses with large customer base, inventory and sales transactions." color="#DEAE1E" />
        </div>
        <div data-aos="flip-right" data-aos-delay="300" className='flex'>
          <Reason title="Built for the future." description="The platform is highly dynamic and adaptable for any new business work customization and projects. " color="#6C8B23" />
        </div>
        <div data-aos="flip-right" data-aos-delay="400" className='flex'>
          <Reason title="System that grows with you." description="Expand and scale using our expanding line-up of add-ons as your business and system requirements grow." color="#1595FF" />
        </div>
        <div data-aos="flip-right" data-aos-delay="200" className='flex'>
          <Reason title="Built with customer & users in mind." description={<span>The platform is web based and is available on any screen or devices making it easy to use, maintain and manage.</span>} color="#B93D3B" />
        </div>
      </BodyContainer>
    </MainContainer>
  )
}

export default WhyDDSSISection