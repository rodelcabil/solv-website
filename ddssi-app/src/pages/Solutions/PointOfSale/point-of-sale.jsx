import React from 'react'
import Solv24Navbar from '../../../components/Navbar/ReusableNavbar/reusable-navbar'
import { BodyContainer, MainContainer } from './point-of-sale-styles'
import POSSolution from '../../../assets/compressed/pos-solv-24.png'
import FooterSection from '../../MainPage/Section/Footer/footer-section'
import ContactSection from '../../MainPage/Section/ContactSection/contact-section'
import TitleComponent from '../../../components/Title/title'
import DescriptionComponent from '../../../components/Description/description'
import ScrollToTopButton from '../../../components/ScrollToTopButton/scroll-to-top-button'
import { Solv24Links } from '../../MainPage/Section/Footer/footer-data-links'

const PointOfSale = () => {
    return (
        <>
            <Solv24Navbar />
            <MainContainer>
                <BodyContainer>
                    <div data-aos="fade-right" className='flex flex-col max-w-[500px]'>
                        <TitleComponent title="Point Of Sale System"/><br/>
                        <DescriptionComponent description="A convenient way to accurately record sales and keep track of how your business is doing. It also integrates with POS devices. POS is an add-on or stand alone point of sale software for a Single Node with unlimited users." />
                        {/* <p className='text-5xl text-[#343434] font-bold mb-7'></p>
                        <span className='text-[#7a7a7a] text-1xl'></span> */}
                    </div>
                    <div data-aos="fade-left" data-aos-delay="200" className='img-container relative flex w-[500px] p-2 justify-center '>
                        <img src={POSSolution} className='item-img absolute' alt="" />
                    </div>
                </BodyContainer>
            </MainContainer>
            <ContactSection />
            <FooterSection links={Solv24Links}/>
            <ScrollToTopButton />
        </>
    )
}

export default PointOfSale