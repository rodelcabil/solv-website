import React from 'react'
import Navbar from '../components/Navbar/MainNavbar/navbar'
import MiniInfoSection from './MainPage/Section/MiniInfoSection/mini-info-section'
import ServiceSection from './MainPage/Section/ServicesSection/service-section'
import HeroSection from './MainPage/Section/HeroSection/hero-section'
import BusinessSolutionSection from './MainPage/Section/BusinessSolutionSection/business-solution-section'
import WhyDDSSISection from './MainPage/Section/WhyDDSSISection/why-ddssi-section'
import TestimonialSection from './MainPage/Section/TestimonialSection/testimonial-section'
import FooterSection from './MainPage/Section/Footer/footer-section'
import PageDivider from '../components/PageDivider/page-divider'
import AboutSection from './MainPage/Section/AboutSection/about-section'
import ContactSection from './MainPage/Section/ContactSection/contact-section'
import ScrollToTopButton from '../components/ScrollToTopButton/scroll-to-top-button'
import AnySection from './MainPage/Section/AnySection/any-section'
import { MainPageLinks } from './MainPage/Section/Footer/footer-data-links'
import ProductDemoDection from './MainPage/Section/ProductDemoSection/product-demo-section'

const main = () => {
  return (
    <>
      <MiniInfoSection/>
      <Navbar />
      <HeroSection/>
      <PageDivider/>
      <AnySection />
      <ServiceSection />
      <BusinessSolutionSection />
      <ProductDemoDection/>
      <AboutSection />
      <WhyDDSSISection />
      <TestimonialSection/>
      <ContactSection />
      <FooterSection links={MainPageLinks}/>
      <ScrollToTopButton />
    </>
  )
}

export default main