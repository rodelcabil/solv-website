import React from 'react'
import OtherNavbar from '../../../components/Navbar/OtherNav/other-nav'
import { Banner,MainContainer,BodyContainer  } from './other-services-styles'
import ContactSection from '../../MainPage/Section/ContactSection/contact-section'
import FooterSection from '../../MainPage/Section/Footer/footer-section'
import ScrollToTopButton from '../../../components/ScrollToTopButton/scroll-to-top-button'

const OtherServices = () => {
    return (
        <>
            <OtherNavbar />
            <Banner>
                <p className='text-5xl text-[#fff] font-normal'>Other Services</p><br />
                <span className='text-1xl text-[#fff] max-w-3xl font-light text-center'>We also provide cloud hosting solutions, other network related services and hardware i.e. servers, computers, VPN, biometrics devices and other computer related products.</span>
            </Banner>
            <MainContainer>
                <BodyContainer>

                </BodyContainer>
            </MainContainer>
            <ContactSection />
            <FooterSection />
            <ScrollToTopButton />
        </>
    )
}

export default OtherServices