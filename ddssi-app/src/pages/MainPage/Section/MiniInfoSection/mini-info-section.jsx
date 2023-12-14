import React from 'react'
import { MainContainer, BodyContainer, TryButton } from './mini-info-section-styles'
import {FaEnvelope, FaFacebook, FaYoutube, FaLinkedin} from "react-icons/fa"
import { PiInstagramLogoFill } from "react-icons/pi";

const MiniInfoSection = () => {

  return (
    <MainContainer>
        <BodyContainer>
        <div className='flex items-center gap-3'>
            <FaEnvelope size={20}/> <span className='text-white'>info@digitaldoorssoftware.com</span>
        </div>
        <div className='flex items-center gap-10'>
          {/* <div className='flex items-center gap-3'>
              <a href="https://www.facebook.com/DDSSI/" target="_blank"><FaFacebook size={25} className='cursor-pointer'/></a>
              <a href="www.instagram.com/solvbiz" target="_blank"><PiInstagramLogoFill size={25} className='cursor-pointer'/></a>
              <a href="https://www.youtube.com/channel/UCr5GylGgZ5lrJ1Ewc6JCVEw" target="_blank"><FaYoutube size={25} className='cursor-pointer'/></a>
              <a href="https://www.linkedin.com/company/digital-doors-software-systems-inc" target="_blank"><FaLinkedin size={25} className='cursor-pointer'/></a>
          </div> */}
          <div className='flex items-center gap-3'>
            <span className='text-white'>Break free from communication barriers with our latest technology!</span>
            <TryButton className='whitespace-nowrap' to="/solv-meet" exact>Try for free</TryButton>
          </div>
        </div>
        </BodyContainer>
    </MainContainer>
  )
}

export default MiniInfoSection