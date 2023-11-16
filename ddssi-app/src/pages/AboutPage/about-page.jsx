import React from 'react'
import FooterSection from '../MainPage/Section/Footer/footer-section'
import ContactSection from '../MainPage/Section/ContactSection/contact-section'
import OtherNavbar from '../../components/Navbar/OtherNav/other-nav'
import { BodyContainer, MainContainer, Banner, GoalContainer } from './about-page-styles'
import About from '../../assets/interview.svg'
import Employee from '../../assets/employee.webp'
import ManagementCard from '../../components/ManagementCard/management-card'
import ScrollDownButton from '../../components/ScrolldownButton/scroll-down-button'

const AboutPage = () => {
  return (
    <>
      <OtherNavbar />
      <MainContainer>
        <Banner>
          <p className='text-5xl text-[#fff] font-normal'>Digital Doors Software Solutions, Inc</p><br />
          <span className='text-2xl text-[#fff] font-light'>We are more than web development.</span>
          <br/>
          <ScrollDownButton href="#read-more" />
        </Banner>
        <BodyContainer id="read-more">
        
          <div data-aos="zoom-in-up" className='flex justify-center flex-col max-w-xl flex-auto'>
            <p className='text-4xl text-[#1595FF] font-normal'>Who we are</p><br />
            <span className='text-[#7A7A7A]'>Digital Doors Software Solutions, Inc. is a technology company
              that specializes in software and services for micro, small and
              medium enterprises (MSME’s) who wish to improve and grow
              their business by automation and digitization.<br /><br />
              Our system is built on a solid and proven platform that is tested
              and stable to handle the demands of businesses with large
              customer base, inventory and sales transactions.<br /><br />
              Our system is web based and is available on any screen or
              devices making it easy to use, maintain and manage.<br /><br />
              We also offer complete, ready to use e-commerce, social
              media and C2C solutions to help companies establish their
              presence online and exponentially grow their business.<br /><br />
              We have a highly dynamic, innovative and motivated team
              ready to work with you to elevate your business
            </span>
          </div>
          <div data-aos="zoom-in-up" className='flex justify-center flex-col flex-1'>
            <img src={About} />
          </div>
        </BodyContainer>
        <BodyContainer>
          <div className='flex flex-col w-full'>
            <p className='text-4xl text-[#1595FF] font-normal'>Our Management</p><br />
            <div className='flex items-center justify-between'>
              <div data-aos="fade-up" data-aos-delay="100">
                <ManagementCard img={Employee} name="Melchor Cuartero" position="President & Chief Executive Officer" />
              </div>
              <div data-aos="fade-up" data-aos-delay="200">
                <ManagementCard img={Employee} name="Frederick Yu" position="Chairman" />
              </div>
              <div data-aos="fade-up" data-aos-delay="300">
                <ManagementCard img={Employee} name="Harry De Leon" position="Business Development Manager" />
              </div>
            </div>
          </div>
        </BodyContainer>
        <GoalContainer>
          <div data-aos="fade-down" className='flex bg-white p-14 rounded-lg drop-shadow-lg flex-col justify-center max-w-2xl m-auto goal'>
            <p className='text-4xl text-[#1595FF] text-center font-normal'>Our goals</p><br />
            <span className='text-1xl text-[#7a7a7a] text-center'>To provide software that will address the needs of
              Micro, Small and Medium Enterprises (MSMEs) and
              help them take the leap to transform and elevate how
              their business operates.</span>
          </div>
        </GoalContainer>
      </MainContainer>
      <ContactSection />
      <FooterSection />
    </>
  )
}

export default AboutPage