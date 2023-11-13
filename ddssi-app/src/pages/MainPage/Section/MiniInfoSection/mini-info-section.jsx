import React from 'react'
import { MainContainer, BodyContainer } from './mini-info-section-styles'
import {FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin} from "react-icons/fa"


const MiniInfoSection = () => {

  return (
    <MainContainer>
        <BodyContainer>
        <div className='flex items-center gap-3'>
            <FaEnvelope size={20}/> <span>info@digitaldoorssoftware.com</span>
        </div>
        <div className='flex items-center gap-3'>
            <FaFacebook size={20} className='cursor-pointer'/>
            <FaTwitter size={20} className='cursor-pointer'/>
            <FaInstagram size={20} className='cursor-pointer'/>
            <FaYoutube size={20} className='cursor-pointer'/>
            <FaLinkedin size={20} className='cursor-pointer'/>
        </div>
        </BodyContainer>
    </MainContainer>
  )
}

export default MiniInfoSection