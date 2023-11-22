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
                    <ServiceCard title="Software Development"
                        description={<span>We develop business solution software with enterprise level features using the work processes perfected in actual business environment. <br /><br />Our software is designed to improve efficiency and productivity of any type of business.</span>} icon={SoftwareDevelopment} color="#DEAE1E" />
                </div>
                <div data-aos="zoom-in-up" data-aos-delay="100">
                    <ServiceCard title="System Support" description={
                        <span>Our team of locally based software
                            engineers are ready to extend support
                            to ensure a smooth and problem free
                            experience with our software.<br /><br />
                            SOLVdesk allows easy and direct
                            access to our team for support when
                            you need it.<br /><br /></span>
                    } icon={SystemSupport} color="#889DDC" />
                </div>
                <div data-aos="zoom-in-up" data-aos-delay="150">
                    <ServiceCard title="Software Customization" description={
                        <span>
                            SOLV business solution software suite is
                            already packed with features and
                            functionalities to address the needs of
                            most businesses. We, however, also
                            offer software customization services to
                            add unique processes to SOLV for
                            clients who need it.<br /><br />
                        </span>
                    } icon={WebDevelopment} color="#B93D3B" />
                </div>
            </BodyContainer>
        </MainContainer>
    )
}

export default ServiceSection