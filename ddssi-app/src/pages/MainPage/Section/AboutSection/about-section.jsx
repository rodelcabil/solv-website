import React from 'react'
import { BodyContainer, MainContainer, LearnMoreButton } from './about-section-styles'

const AboutSection = () => {
    return (
        <>
        <p id="about"></p>
        <br/><br/>
        <MainContainer >
            <BodyContainer>
                <div className='flex flex-col max-w-2xl' data-aos="zoom-in">
                    <p className='text-[#FFF] text-2xl font-light mb-2'>About us </p>
                    <p className='text-[#FFF] text-4xl font-normal'>Digital Doors Software Solutions, Inc. </p><br />
                    <span className='text-[#FFF] font-normal'> We are technology company
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
            </BodyContainer>
        </MainContainer>
        </>

    )
}

export default AboutSection