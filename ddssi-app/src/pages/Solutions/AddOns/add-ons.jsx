import React from 'react'
import { Banner, MainContainer } from './add-ons-styles'
import ContactSection from '../../MainPage/Section/ContactSection/contact-section'
import FooterSection from '../../MainPage/Section/Footer/footer-section'
import ScrollToTopButton from '../../../components/ScrollToTopButton/scroll-to-top-button'
import ScrollDownButton from '../../../components/ScrolldownButton/scroll-down-button'
import Solv24Navbar from '../../../components/Navbar/ReusableNavbar/reusable-navbar'
import { Solv24Links } from '../../MainPage/Section/Footer/footer-data-links'
import FloatingComponent from '../../../components/FloatingComponent/floating-component'
import DynamicContainer from '../../../components/DyanamicContainer/dynamic-container'
import PlanContainer from '../../../components/PlanContainer/plan-container'
import { data, addons_plan_data } from './add-ons-data'

const AddonsPage = () => {

  return (
    <>
      <Solv24Navbar />
      <Banner>
        <div data-aos="fade-up">
          <p className='addon-header text-5xl text-[#fff] font-normal text-center'>SOLV Add-ons</p><br />
        </div>
        <div data-aos="fade-up" data-aos-delay="100" className='flex max-w-3xl'>
          <span className='addon-description text-1xl text-[#fff]  font-light text-center'>Building blocks that add features to your SOLV system. It allows you to expand and scale
            at your own pace instead of being forced to get a system with features you do not need.</span>
          <br />
        </div>
        <br />
        <div data-aos="fade-up" data-aos-delay="200">
          <ScrollDownButton href="/solution/add-ons#read-more" />
        </div>
      </Banner>
      <MainContainer id="read-more">
        <DynamicContainer data={data} /> 
        <div className="flex w-full m-auto max-w-[1500px] py-[30px] ">
          <span className='text-2xl text-[#343434]'>Add-ons Plan</span>
        </div>
        <PlanContainer data={addons_plan_data[0].addons} />
      </MainContainer>
      <ContactSection />
      <FooterSection links={Solv24Links} />
      <ScrollToTopButton />
      <FloatingComponent />
    </>

  )
}

export default AddonsPage
