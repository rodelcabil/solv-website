import React from 'react'
import ContactSection from '../../MainPage/Section/ContactSection/contact-section'
import FooterSection from '../../MainPage/Section/Footer/footer-section'
import { Banner, BodyContainer, MainContainer } from './custom-styles'
import ScrollToTopButton from '../../../components/ScrollToTopButton/scroll-to-top-button'
import ScrollDownButton from '../../../components/ScrolldownButton/scroll-down-button'
import Solv24Navbar from '../../../components/Navbar/ReusableNavbar/reusable-navbar'
import { Solv24Links } from '../../MainPage/Section/Footer/footer-data-links'
import SubscriptionCard from '../../../components/SubscriptionCard/subscription-card'
import FloatingComponent from '../../../components/FloatingComponent/floating-component'
import DynamicContainer from '../../../components/DyanamicContainer/dynamic-container'
import { custom_plan_data, data } from './custom-data'
import PlanContainer from '../../../components/PlanContainer/plan-container'

const Custom = () => {

   
    return (
        <>
            <Solv24Navbar />
            <Banner>
                <div data-aos="fade-up">
                    <p className='custom-header text-5xl text-[#fff] font-normal text-center'>SOLV Custom</p><br />
                </div>
                <div data-aos="fade-up" data-aos-delay="100" className='flex max-w-3xl'>
                    <span className='text-1xl text-[#fff] max-w-3xl font-light text-center'>Our SOLV business solution software are already packed with features and functionality. We
                        also do software customization to add unique processes for those who want it.</span>
                    <br />
                </div>
                <br />
                <div data-aos="fade-up" data-aos-delay="200">
                    <ScrollDownButton href="/solution/custom#read-more" />
                </div>
            </Banner>
            <MainContainer id="read-more">
                <DynamicContainer data={data} />
                <br/><br/>
                <BodyContainer>
                    <span className='text-2xl text-[#343434]'>SOLV Custom Plan</span>
                </BodyContainer>
                <br/><br/>
                <PlanContainer data={custom_plan_data[0].custom} />
                <br />
            </MainContainer>
            <ContactSection />
            <FooterSection links={Solv24Links}/>
            <ScrollToTopButton />
            <FloatingComponent />
        </>
    )
}

export default Custom