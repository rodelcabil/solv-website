import React from 'react'
import { BodyContainer, MainContainer } from './business-solution-section-styles'
import BusinessSolutionCard from '../../../../components/BusinessSolutionCard/business-solution-card'
import OtherServices from "../../../../assets/compressed/other-services-img.jpg"
import AddOns from "../../../../assets/compressed/addons-solution-img-2.jpg"
import ECommerce from "../../../../assets/compressed/e-commerce-img.png"
import SolvLogo from "../../../../assets/compressed/solv-solution-img-2.png"
import Custom from "../../../../assets/compressed/custom-solution-img.jpg"
import SoloBgImg from '../../../../assets/compressed/solo-banner.jpg'
import HRSolution from '../../../../assets/compressed/hris-banner.jpg';
import Accounting from '../../../../assets/compressed/accounting-banner.png';
import SectionObserver from '../../../../functions/section-obeserver'


const BusinessSolutionSection = () => {

  const { ref } = SectionObserver("solution");

  return (
    <MainContainer ref={ref} id="solution">
      <div className='flex flex-col items-center justify-center'>
        <span className='text-4xl text-[#343434] font-normal text-center mb-2'>DDSSI Business Solutions</span>
        <span className='text-1xl text-[#7A7A7A] font-normal text-center max-w-3xl'>Choose from a variety of software solutions with enterprise level features and ability to expand and scale as your business grows. It is an unbeatable offer.</span>
      </div>
      <br /><br /><br />
      <BodyContainer>
        <div data-aos="fade-up" data-aos-delay="100" className='flex w-[100%] items-stretch justify-center'>
          <BusinessSolutionCard className="items-stretch" title="SOLV 24" icon={SolvLogo} description="Ready to use set of full featured business solution software for any type and size of business at a price point and easy payment terms that cannot be ignored." link="/solution/solv-24" hasReadMore={true} />
        </div>
        <div data-aos="fade-up" data-aos-delay="100" className='flex w-[100%] items-stretch justify-center'>
          <BusinessSolutionCard title="SOLV Sales and Inventory" icon={SoloBgImg} description="It is a web-based point-of-sales, inventory, customer management and reporting tool designed for small and medium Business (SMBs) who needs a direct and practical approach in recording and maintaining their business transactions." link="/solution/sales-and-inventory" hasReadMore={true} />
        </div>
        <div data-aos="fade-up" data-aos-delay="100" className='flex w-[100%] items-stretch justify-center'>
          <BusinessSolutionCard title="SOLV Hr Solution" icon={HRSolution} description="End to end software solution for the Human Resources Department designed to improve delivery of service, efficiency and productivity. Hr Solution includes payroll, Human Resources Information System (HRIS) and system timekeeping with geo tagging." link="/solution/hr-solutions" hasReadMore={true} />
        </div>
        <div data-aos="fade-up" data-aos-delay="100" className='flex w-[100%] items-stretch justify-center'>
          <BusinessSolutionCard title="SOLV Accounting" icon={Accounting} description="Simplified accounting system perfect for small and medium businesses. Manage your finances easily and have accurate reports at a press of a button." link="/solution/accounting" hasReadMore={true} />
        </div>
        <div data-aos="fade-up" data-aos-delay="100" className='flex w-[100%] items-stretch justify-center'>
          <BusinessSolutionCard title="SOLV Add-ons" icon={AddOns} description="Building blocks that add features to your SOLV system. It allows you to expand and scale at your own pace instead of being forced to get a system with features you do not need." link="/solution/add-ons" hasReadMore={true} />
        </div>
        <div data-aos="fade-up" data-aos-delay="200" className='flex w-[100%] items-stretch justify-center'>
          <BusinessSolutionCard title="SOLV Custom" icon={Custom} description="Our SOLV business solution software are already packed with features and functionality. We also do software customization to add unique processes for those who want it." link="/solution/custom" hasReadMore={true} />
        </div>
        <div data-aos="fade-up" data-aos-delay="300" className='flex w-[100%] items-stretch justify-center'>
          <BusinessSolutionCard title="E-Commerce Platform" icon={ECommerce} description="Selling online is fast replacing brick and mortar stores. Our platform is ready for companies who want to take the leap and establish their online presence. Complete with back-end and payment facility for simple and easy operation." link="" hasReadMore={false} />
        </div>
        {/* <div data-aos="fade-up" data-aos-delay="400">
          <BusinessSolutionCard title="C2C/Social Media Platform" icon={SocialMedia} description="Customer to customer (C2C) is a business model whereby customers can trade with each other. To facilitate this, we created an online trading platform with social media component." link="/solution/c-to-c-and-social-media-platform" />
        </div> */}
        <div data-aos="fade-up" data-aos-delay="500" className='flex w-[100%] items-stretch justify-center'>
          <BusinessSolutionCard title="Other Services" icon={OtherServices} description="We also provide cloud hosting solutions, other network related services and hardware i.e. servers, computers, VPN, biometrics devices and other computer related products." link="" hasReadMore={false} />
        </div>

      </BodyContainer>
    </MainContainer>
  )
}

export default BusinessSolutionSection