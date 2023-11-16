import React from 'react'
import { BodyContainer, MainContainer } from './service-section-styles'
import ServiceCard from '../../../../components/ServiceCard/service-card'
import SoftwareDevelopment from "../../../../assets/software-development.png"
import WebDevelopment from "../../../../assets/web-development.png"
import SystemSupport from "../../../../assets/system-support.png"


const ServiceSection = () => {
    return (
        <MainContainer id="service">
             <div className='flex flex-col max-w-[1500px] m-auto'>
                    <span className='text-4xl text-[#343434] font-normal'>DDSSI Services</span>
                    <span className='text-1xl text-[#7A7A7A] font-normal'>These are the things we can offer our clients.</span>
                </div>
            <br />
            <br />
            <BodyContainer>
                <div data-aos="zoom-in-up" >
                    <ServiceCard title="Software Development" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras semper auctor neque vitae tempus quam pellentesque nec nam." icon={SoftwareDevelopment} color="#DEAE1E" />
                </div>
                <div data-aos="zoom-in-up"  data-aos-delay="100">
                    <ServiceCard title="System Support" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras semper auctor neque vitae tempus quam pellentesque nec nam." icon={SystemSupport} color="#889DDC" />
                </div>
                <div data-aos="zoom-in-up"  data-aos-delay="150">
                    <ServiceCard title="Software Customization" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras semper auctor neque vitae tempus quam pellentesque nec nam." icon={WebDevelopment} color="#C26967" />
                </div>
            </BodyContainer>
        </MainContainer>
    )
}

export default ServiceSection