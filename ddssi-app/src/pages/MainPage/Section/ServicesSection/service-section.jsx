import React from 'react'
import { BodyContainer, MainContainer } from './service-section-styles'
import ServiceCard from '../../../../components/ServiceCard/service-card'
import SoftwareDevelopment from "../../../../assets/software-development.png"
import WebDevelopment from "../../../../assets/web-development.png"
import SystemSupport from "../../../../assets/system-support.png"

const ServiceSection = () => {
    return (
        <MainContainer>
            <BodyContainer>
                <div className='flex flex-col'>
                    <span className='text-3xl text-[#343434] font-semibold'>DDSSI Services</span>
                    <span className='text-1xl text-[#7A7A7A] font-semibold'>These are the things we can offer our clients.</span>
                </div>
            </BodyContainer>
            <br/>
            <br/>
            <BodyContainer>
                <ServiceCard title="Software Development" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras semper auctor neque vitae tempus quam pellentesque nec nam." icon={SoftwareDevelopment} color="#DEAE1E"/>
                <ServiceCard title="System Support" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras semper auctor neque vitae tempus quam pellentesque nec nam." icon={SystemSupport} color="#889DDC"/>
                <ServiceCard title="Web Development" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras semper auctor neque vitae tempus quam pellentesque nec nam." icon={WebDevelopment} color="#C26967"/>
            </BodyContainer>
        </MainContainer>
    )
}

export default ServiceSection