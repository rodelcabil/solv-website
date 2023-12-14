import React from 'react'
import OtherNavbar from '../../../components/Navbar/OtherNav/other-nav'
import ContactSection from '../../MainPage/Section/ContactSection/contact-section'
import FooterSection from '../../MainPage/Section/Footer/footer-section'
import { Banner, BodyContainer, MainContainer } from './custom-styles'
import Custom1 from '../../../assets/custom-1.png'
import Custom2 from '../../../assets/custom-2.png'
import Custom3 from '../../../assets/custom-3.png'
import Custom4 from '../../../assets/custom-4.png'
import CustomCard from '../../../components/CustomCard/custom-card'
import ScrollToTopButton from '../../../components/ScrollToTopButton/scroll-to-top-button'
import ScrollDownButton from '../../../components/ScrolldownButton/scroll-down-button'
import Solv24Navbar from '../../../components/Navbar/ReusableNavbar/reusable-navbar'
import { Solv24Links } from '../../MainPage/Section/Footer/footer-data-links'
import SubscriptionCard from '../../../components/SubscriptionCard/subscription-card'
import FloatingComponent from '../../../components/FloatingComponent/floating-component'
import SolutionDiscountContainer from '../../../components/SolutionDiscountContainer/solution-discount-container'

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
                    <ScrollDownButton href="#read-more" />
                </div>
            </Banner>
            <MainContainer id="read-more">
                <BodyContainer>
                    <span className='text-2xl text-[#343434]'>SOLV Custom Plan</span>
                </BodyContainer>
                <br/><br/>
                <BodyContainer>
                    {/* <div data-aos="fade-up" data-aos-delay="100">
                        <CustomCard description="Customization package up to maximum 15 man-days with 1 year validity" img={Custom1} price="₱49,990.00"/>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="200">
                        <CustomCard description="Customization package up to maximum 30 man-days with 1 year validity." img={Custom2} price="₱99,990.00"/>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="300">
                        <CustomCard description="Customization package up to maximum 60 man-days with 1 year validity" img={Custom3} price="₱199,990.00"/>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="400">
                        <CustomCard description="Customization package up to maximum 90 man-days with 1 year validity." img={Custom4} price="₱299,990.00" />
                    </div> */}
                    <div data-aos="fade-up" data-aos-delay="100">
                        <SubscriptionCard header="SOLV Custom" title="Custom 1" price="₱49,990.00" inclusion="Test" color="#1595FF" description="Customization package up to maximum 15 man-days with 1 year validity." />
                    </div>
                    <div data-aos="fade-up" data-aos-delay="200">
                        <SubscriptionCard header="SOLV Custom" title="Custom 2" price="₱99,990.00" inclusion="Test" color="#D7B146" description="Customization package up to maximum 30 man-days with 1 year validity."/>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="300">
                        <SubscriptionCard header="SOLV Custom" title="Custom 3" price="₱199,990.00" inclusion="Test" color="#5469AC" description="Customization package up to maximum 60 man-days with 1 year validity."/>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="300">
                        <SubscriptionCard header="SOLV Custom" title="Custom 4" price="₱299,990.00" inclusion="Test" color="#AD4742" description="Customization package up to maximum 90 man-days with 1 year validity."/>
                    </div>
                    
                </BodyContainer>
                <br />
                {/* <div className='flex justify-center flex-1 max-w-[1500px] m-auto'>
                    <span className='w-full text-2xl text-[#343434] max-w-2xl font-light text-center'>We have four discounted packages that have varying number of man-days for software customization.</span>
                </div> */}
            </MainContainer>
            <SolutionDiscountContainer />
            <ContactSection />
            <FooterSection links={Solv24Links}/>
            <ScrollToTopButton />
            <FloatingComponent />
        </>
    )
}

export default Custom