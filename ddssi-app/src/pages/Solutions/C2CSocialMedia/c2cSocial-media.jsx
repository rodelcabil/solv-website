import React from 'react'
import OtherNavbar from '../../../components/Navbar/OtherNav/other-nav'
import ContactSection from '../../MainPage/Section/ContactSection/contact-section'
import FooterSection from '../../MainPage/Section/Footer/footer-section'
import { Banner, BodyContainer, MainContainer } from './c2cSocial-media-styles'
import ScrollToTopButton from '../../../components/ScrollToTopButton/scroll-to-top-button'

const C2CSocialMedia = () => {
    return (
        <>
            <OtherNavbar />
            <Banner>
                <p className='text-5xl text-[#fff] font-normal'>C2C and Social Media Platform</p><br />
                <span className='text-1xl text-[#fff] max-w-3xl font-light text-center'>Customer to customer (C2C) is a business model whereby customers can trade with each other. To facilitate this, we created an online trading platform with social media component.</span>
            </Banner>
            <MainContainer>
                <BodyContainer>

                </BodyContainer>
            </MainContainer>
            <ContactSection />
            <FooterSection />
            <ScrollToTopButton/>
        </>
    )
}

export default C2CSocialMedia