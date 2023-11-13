import React from 'react'
import Navbar from '../components/Navbar/MainNavbar/navbar'
import MiniInfoSection from './MainPage/Section/MiniInfoSection/mini-info-section'
import HeroSection from './MainPage/Section/HeroSection/hero-section'
import ServiceSection from './MainPage/Section/ServicesSection/service-section'
import BusinessSolutionSection from './MainPage/Section/BusinessSolutionSection/business-solution-section'
import WhyDDSSISection from './MainPage/Section/WhyDDSSISection/why-ddssi-section'
import TestimonialSection from './MainPage/Section/TestimonialSection/testimonial-section'
import FooterSection from './MainPage/Section/Footer/footer-section'
import PageDivider from '../components/PageDivider/page-divider'
import AboutSection from './MainPage/Section/AboutSection/about-section'

const main = () => {
  return (
    <div>
      <MiniInfoSection/>
      <Navbar />
      <HeroSection/>
      <PageDivider/>
      <AboutSection/>
      <ServiceSection />
      <BusinessSolutionSection />
      <WhyDDSSISection />
      <TestimonialSection/>
      <FooterSection />
    </div>
  )
}

export default main