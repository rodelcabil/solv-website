import React, { useRef } from 'react'
import { BodyContainer, GetInTouchButton, MainContainer} from './contact-section-styles'



const ContactSection = () => {

    return (
        <MainContainer id="contact">
            <BodyContainer>
                <div className='flex flex-col justify-center max-w-[680px]'>
                    <div className='flex flex-1 flex-col '>
                        <p className='left-header text-[#fff] text-5xl font-normal text-center'>We would love to hear it from you.</p>
                        <br/>
                        <span className='left-description text-[#fff] font-normal text-center'>We’re here to help and answer any question you might have. We look forward to hearing from you. </span>
                        <br/><br/>
                        <GetInTouchButton to="/contact-page" target="_blank" rel="noopener noreferrer">Get in Touch</GetInTouchButton>
                    </div>
                </div>
            </BodyContainer>
        </MainContainer>
    )
}

export default ContactSection