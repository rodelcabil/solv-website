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
import Solv24Navbar from '../../../components/Navbar/Solv24Navbar/solv24-navbar'

const Custom = () => {
    return (
        <>
            <Solv24Navbar />
            <Banner>
                <div data-aos="fade-up">
                    <p className='text-5xl text-[#fff] font-normal'>SOLV24 Custom</p><br />
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
                    <div data-aos="fade-up" data-aos-delay="100">
                        <CustomCard description="15 man-days" img={Custom1} />
                    </div>
                    <div data-aos="fade-up" data-aos-delay="200">
                        <CustomCard description="30 man-days" img={Custom2} />
                    </div>
                    <div data-aos="fade-up" data-aos-delay="300">
                        <CustomCard description="60 man-days" img={Custom3} />
                    </div>
                    <div data-aos="fade-up" data-aos-delay="400">
                        <CustomCard description="90 man-days" img={Custom4} />
                    </div>
                </BodyContainer>
                <br />
                <div className='justify-center flex-1 max-w-[1500px] m-auto'>
                    <span className='text-2xl text-[#343434] max-w-2xl font-light text-center'>We have four discounted packages that have varying number of man-days for software customization.</span>
                </div>
            </MainContainer>
            <ContactSection />
            <FooterSection />
            <ScrollToTopButton />
        </>
    )
}

export default Custom