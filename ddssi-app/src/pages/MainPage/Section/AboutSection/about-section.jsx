import React from 'react'
import { BodyContainer, MainContainer, LearnMoreButton } from './about-section-styles'
import AboutImg1 from '../../../../assets/about-img-1.jpg'
import AboutImg2 from '../../../../assets/about-img-2.jpg'
import AboutImg3 from '../../../../assets/about-img-3.jpg'

const AboutSection = () => {
    return (
        <>
            <p id="about"></p>
            <MainContainer >
                <BodyContainer>
                    <div className='flex flex-col max-w-2xl' data-aos="zoom-in">
                        <p className='text-[#fff] text-2xl font-light mb-2'>About us </p>
                        <p className='text-[#fff] text-4xl font-normal'>Digital Doors Software Solutions, Inc. </p><br />
                        <span className='text-[#fff] font-normal'> We are technology company
                            that specializes in software and services for micro, small and
                            medium enterprises (MSME’s) who wish to improve and grow
                            their business by automation and digitization.<br /><br />
                            Our system is built on a solid and proven platform that is tested
                            and stable to handle the demands of businesses with large
                            customer base, inventory and sales transactions.<br />
                        </span>
                        <br />
                        <LearnMoreButton exact to="/about">Learn more</LearnMoreButton>
                    </div>
                    <div className='flex flex-col gap-3 w-[400px] row-container'>
                        <div className='flex flex-1 gap-3'>
                            <div className='flex flex-1 gap-3 items-stretch' data-aos="zoom-in" data-aos-delay="100">
                                <img src={AboutImg1} height="200" className='flex-1'/>
                            </div>
                        </div>
                        <div className='flex flex-1 gap-3'>
                            <div className='flex flex-1' data-aos="zoom-in" data-aos-delay="200">
                                <img src={AboutImg2} height="200" className='flex-1'/>
                            </div>
                            <div className='flex flex-1' data-aos="zoom-in" data-aos-delay="300">
                                <img src={AboutImg3} height="200" className='flex-1'/>
                            </div>
                        </div>
                    </div>
                </BodyContainer>

            </MainContainer>
        </>

    )
}

export default AboutSection