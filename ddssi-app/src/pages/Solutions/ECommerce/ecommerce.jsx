import React from 'react'
import OtherNavbar from '../../../components/Navbar/OtherNav/other-nav'
import ContactSection from '../../MainPage/Section/ContactSection/contact-section'
import FooterSection from '../../MainPage/Section/Footer/footer-section'
import { Banner, BodyContainer, MainContainer } from './ecommerce-styles'
import Custom1 from '../../../assets/custom-1.png'
import Custom2 from '../../../assets/custom-2.png'
import Custom3 from '../../../assets/custom-3.png'
import Custom4 from '../../../assets/custom-4.png'
import CustomCard from '../../../components/CustomCard/custom-card'
import ScrollToTopButton from '../../../components/ScrollToTopButton/scroll-to-top-button'
import { Solv24Links } from '../../MainPage/Section/Footer/footer-data-links'

const ECommerce = () => {
    return (
        <>
            <OtherNavbar />
            <Banner>
                <p className='text-5xl text-[#fff] font-normal text-center'>E-Commerce Platform</p><br />
                <span className='text-1xl text-[#fff] max-w-3xl font-light text-center'>Selling online is fast replacing brick and mortar stores. Our platform is ready for companies who want to take the leap and establish their online presence. Complete with back-end and payment facility for simple and easy operation.</span>
            </Banner>
            <MainContainer>
                <BodyContainer>

                </BodyContainer>
            </MainContainer>
            <ContactSection />
            <FooterSection links={Solv24Links} />
            <ScrollToTopButton />
        </>
    )
}

export default ECommerce