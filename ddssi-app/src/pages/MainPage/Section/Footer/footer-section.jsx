import React from 'react'
import { BodyContainer, MainContainer, Row } from './footer-section-styles'
import Logo from '/public/ddssi.png'
import Map from '../../../../assets/map.png'
import {MdLocationPin,MdEmail,MdLocalPhone} from "react-icons/md"
import {FaEnvelope, FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin} from "react-icons/fa"

const FooterSection = () => {
    return (
        <MainContainer>
            <BodyContainer>
                <Row>
                    <div className='flex flex-col items-start'>
                        <div className='flex items-center '>
                            <img src={Logo} alt="Logo" className='logo' />
                            <span className='text-white font-bold uppercase text-sm'>Digital Doors Software <br />Solutions Inc.</span>
                        </div>
                        <br />
                        <span className='text-[#7a7a7a] text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras semper auctor neque vitae tempus quam pellentesque nec nam.</span>
                    </div>
                </Row>
                <Row>
                    <div className='flex flex-col'>
                        <span className='text-white font-bold text-sm'>Site Links</span>
                        <br/>
                        <a className='no-underline mb-1 text-[#7a7a7a] cursor-pointer hover:text-white'>Home</a>
                        <a className='no-underline mb-1 text-[#7a7a7a] cursor-pointer hover:text-white'>Services</a>
                        <a className='no-underline mb-1 text-[#7a7a7a] cursor-pointer hover:text-white'>Solutions</a>
                        <a className='no-underline mb-1 text-[#7a7a7a] cursor-pointer hover:text-white'>Testimonials</a>
                        <a className='no-underline mb-1 text-[#7a7a7a] cursor-pointer hover:text-white'>Contact Us</a>
                    </div>
                </Row>
                <Row>
                    <span className='text-white font-bold text-sm'>Follow us</span>
                    <br /><br />
                    <div className='flex items-center gap-3'>
                        <FaFacebook size={25} className='cursor-pointer text-[#7a7a7a] hover:text-white'/>
                        <FaTwitter size={25} className='cursor-pointer text-[#7a7a7a] hover:text-white'/>
                        <FaInstagram size={25} className='cursor-pointer text-[#7a7a7a] hover:text-white'/>
                        <FaYoutube size={25} className='cursor-pointer text-[#7a7a7a] hover:text-white'/>
                        <FaLinkedin size={25} className='cursor-pointer text-[#7a7a7a] hover:text-white'/>
                    </div>
                </Row>
                <Row>
                    <div className='flex flex-col text-sm'>
                        <span className='text-white font-bold'>Company Information</span>
                        <br/>
                        <img src={Map} alt="DDSSI Location" className='map' />
                        <br/>
                        <div className='flex items-center gap-4 mb-2'>
                            <MdLocationPin size="35" className='text-[#7a7a7a]'/>
                            <span className='text-[#7a7a7a]'>4F, 201 Del Monte Ave., Brgy. Masambong, Quezon City</span>
                        </div>
                        <div className='flex items-center gap-4 mb-2'>
                            <MdEmail size="25" className='text-[#7a7a7a]'/>
                            <span className='text-[#7a7a7a]'>info@digitaldoorssoftware.com</span>
                        </div>
                        <div className='flex items-center gap-4'>
                            <MdLocalPhone size="25" className='text-[#7a7a7a]'/>
                            <span className='text-[#7a7a7a]'>+63 2 7358 9421</span>
                        </div>
                    </div>
                </Row>
            </BodyContainer>
            <br/><br/>
            <hr/>
            <br/><br/>
            <div className='flex justify-center'> 
                <span className="text-white text-center w-max text-sm">© 2023 | Digital Doors Software Solutions Inc. | All rights reserved. | <a className='cursor-pointer hover:text-[#1595FF]' href="/privacy-policy" target='_blank'>Privacy Policy.</a></span>
            </div>
        </MainContainer>
    )
}

export default FooterSection