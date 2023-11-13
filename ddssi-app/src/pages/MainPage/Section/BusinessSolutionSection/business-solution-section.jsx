import React from 'react'
import { BodyContainer, MainContainer } from './business-solution-section-styles'
import BusinessSolutionCard from '../../../../components/BusinessSolutionCard/business-solution-card'
import OtherServices from "../../../../assets/other-services.png"
import AddOns from "../../../../assets/add-ons.png"
import ECommerce from "../../../../assets/e-commerce.png"
import SolvLogo from "../../../../assets/solv_logo.png"
import SocialMedia from "../../../../assets/social-media.png"

const BusinessSolutionSection = () => {
  return (
    <MainContainer>
        <div className='flex flex-col items-center justify-center'>
            <span className='text-3xl text-[#343434] font-semibold mb-2'>DDSSI BUSINESS SOLUTIONS</span>
            <span className='text-1xl text-[#7A7A7A] font-semibold text-center max-w-3xl'>Choose from a variety of software solutions with enterprise level features and ability to expand and scale as your business grows. It is an unbeatable offer.</span>
        </div>
        <br/><br/>
        <BodyContainer>
            <BusinessSolutionCard title="SOLV 24" icon={SolvLogo} description="Ready to use set of full featured business solution software for any type and size of business at a price point and easy payment terms that cannot be ignored." link="/solution/solv-24/sales-and-inventory"/>
            <BusinessSolutionCard title="Add-ons" icon={AddOns} description="Building blocks that add features to your SOLV system. It allows you to expand and scale at your own pace instead of being forced to get a system with features you do not need." link="/solution/solv-24"/>
            <BusinessSolutionCard title="E-Commerce Platform" icon={ECommerce} description="Selling online is fast replacing brick and mortar stores. Our platform is ready for companies who want to take the leap and establish their online presence. Complete with back-end and payment facility for simple and easy operation." link="/solution/solv-24"/>
            <BusinessSolutionCard title="C to C and Social Media Platform" icon={SocialMedia} description="Customer to customer (C2C) is a business model whereby customers can trade with each other. To facilitate this, we created an online trading platform with social media component." link="/solution/solv-24"/>
            <BusinessSolutionCard title="Other Services" icon={OtherServices} description="We also provide cloud hosting solutions, other network related services and hardware i.e. servers, computers, VPN, biometrics devices and other computer related products." link="/solution/solv-24" />
        </BodyContainer>
    </MainContainer>
  )
}

export default BusinessSolutionSection