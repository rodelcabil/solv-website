import React from 'react'
import { BodyContainer, MainContainer } from './business-solution-section-styles'
import BusinessSolutionCard from '../../../../components/BusinessSolutionCard/business-solution-card'
import OtherServices from "../../../../assets/other-services-img.jpg"
import AddOns from "../../../../assets/addons-solution-img.jpg"
import ECommerce from "../../../../assets/e-commerce-img.jpg"
import SolvLogo from "../../../../assets/solv-solution-img.jpg"
import SocialMedia from "../../../../assets/social-media.png"
import Custom from "../../../../assets/custom-solution-img.jpg"


const BusinessSolutionSection = () => {
  return (
    <MainContainer id="solution">
      <div className='flex flex-col items-center justify-center'>
        <span className='text-4xl text-[#343434] font-normal text-center mb-2'>DDSSI Business Solutions</span>
        <span className='text-1xl text-[#7A7A7A] font-normal text-center max-w-3xl'>Choose from a variety of software solutions with enterprise level features and ability to expand and scale as your business grows. It is an unbeatable offer.</span>
      </div>
      <br /><br /><br />
      <BodyContainer>
        <div data-aos="fade-up" className='flex items-stretch'>
          <BusinessSolutionCard title="SOLV 24" icon={SolvLogo} description="Ready to use set of full featured business solution software for any type and size of business at a price point and easy payment terms that cannot be ignored." link="/solution/solv-24/sales-and-inventory" />
        </div>
        <div data-aos="fade-up" data-aos-delay="100" className='flex items-stretch'>
          <BusinessSolutionCard title="SOLV 24 Add-ons" icon={AddOns} description="Building blocks that add features to your SOLV system. It allows you to expand and scale at your own pace instead of being forced to get a system with features you do not need." link="/solution/add-ons" />
        </div>
        <div data-aos="fade-up" data-aos-delay="200" className='flex items-stretch'>
          <BusinessSolutionCard title="SOLV 24 Custom" icon={Custom} description="Our SOLV business solution software are already packed with features and functionality. We also do software customization to add unique processes for those who want it." link="/solution/custom" />
        </div>
        <div data-aos="fade-up" data-aos-delay="300" className='flex items-stretch'>
          <BusinessSolutionCard title="E-Commerce Platform" icon={ECommerce} description="Selling online is fast replacing brick and mortar stores. Our platform is ready for companies who want to take the leap and establish their online presence. Complete with back-end and payment facility for simple and easy operation." link="/solution/e-commerce" />
        </div>
        {/* <div data-aos="fade-up" data-aos-delay="400">
          <BusinessSolutionCard title="C2C/Social Media Platform" icon={SocialMedia} description="Customer to customer (C2C) is a business model whereby customers can trade with each other. To facilitate this, we created an online trading platform with social media component." link="/solution/c-to-c-and-social-media-platform" />
        </div> */}
        <div data-aos="fade-up" data-aos-delay="500" className='flex items-stretch'>
          <BusinessSolutionCard title="Other Services" icon={OtherServices} description="We also provide cloud hosting solutions, other network related services and hardware i.e. servers, computers, VPN, biometrics devices and other computer related products." link="/solution/other-services" />
        </div>
        
      </BodyContainer>
    </MainContainer>
  )
}

export default BusinessSolutionSection