import React from 'react'
import { BodyContainer, MainContainer, Row } from './footer-section-styles'
import Logo from '../../../../assets/ddssi-logo-white.png'
import Map from '../../../../assets/map.png'
import QR from '../../../../assets/QR.jpg'
import {MdLocationPin,MdEmail,MdLocalPhone} from "react-icons/md"
import { FaFacebook, FaInstagram, FaYoutube, FaLinkedin} from "react-icons/fa"
import { PiInstagramLogoFill } from "react-icons/pi";
import { NavLink } from 'react-router-dom'
import { SiteInformationLinks } from './footer-data-links'

const FooterSection = ({links}) => {
    return (
        <MainContainer>
            <BodyContainer>
                <Row>
                    <div className='flex flex-col items-start'>
                        <div className='flex items-center gap-2'>
                            <img src={Logo} alt="Logo" className='footer-logo' />
                            {/* <span className='text-white font-bold uppercase text-sm'>Digital Doors Software <br />Solutions Inc.</span> */}
                        </div>
                        <br />
                        <span className='text-[#7a7a7a] text-justify'>It is our goal to provide software that will address the needs of Micro, Small and Medium Enterprises (MSMEs) and help them take the leap to transform and elevate their business.</span>
                    </div>
                </Row>
                <Row>
                    <div className='flex flex-col'>
                        <span className='text-white font-bold text-sm'>Site Links</span>
                        <br/>
                        {
                            links.map((item, key) => {
                                return item.isNavLink ? 
                                <NavLink key={key} to={item.link} className='mb-[15px] no-underline text-[#7a7a7a] cursor-pointer hover:text-white'>{item.name}</NavLink> 
                                : 
                                <a key={key} href={item.link} className='no-underline mb-[15px] text-[#7a7a7a] cursor-pointer hover:text-white'>{item.name}</a> 
                            })
                        }
                    </div>
                </Row>
                <Row>
                    <div className='flex flex-col'>
                        <span className='text-white font-bold text-sm'>Site Information</span>
                        <br/>
                        {
                            SiteInformationLinks.map((item, key) => {
                                return <NavLink key={key} to={item.link} className='mb-[15px] no-underline text-[#7a7a7a] cursor-pointer hover:text-white'>{item.name}</NavLink> 
                            })
                        }
                        <div className='flex'>
                            <img src={QR} />
                        </div>
                    </div>
                </Row>
                <Row>
                    <div className='flex flex-col text-sm'>
                        <span className='text-white font-bold'>Company Information</span>
                        <br/>
                        {/* <a href="https://www.google.com/maps/place/4f,+201+Del+Monte+Ave,+Quezon+City,+Metro+Manila/@14.6399287,121.0115315,17z/data=!4m5!3m4!1s0x3397b65d9d961197:0xb1f012a4d154dbf5!8m2!3d14.6399287!4d121.0115315" target='_blank'><img src={Map} alt="DDSSI Location" className='map' /></a> */}
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3860.281972497848!2d121.0115315!3d14.6399287!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b65d9d961197%3A0xb1f012a4d154dbf5!2s4f%2C%20201%20Del%20Monte%20Ave%2C%20Quezon%20City%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1701218319213!5m2!1sen!2sph" width="300" height="200" style={{border:0}} loading="lazy" className='google-map' />   
                        <br/>
                        <div className='flex items-center gap-4 mb-[20px]'>
                            <MdLocationPin size="35" className='text-[#7a7a7a]'/>
                            <a href="https://www.google.com/maps/place/4f,+201+Del+Monte+Ave,+Quezon+City,+Metro+Manila/@14.6399287,121.0115315,17z/data=!4m5!3m4!1s0x3397b65d9d961197:0xb1f012a4d154dbf5!8m2!3d14.6399287!4d121.0115315" target='_blank'><span className='text-[#7a7a7a]'>4F, 201 Del Monte Ave., Brgy. Masambong, Quezon City</span></a>
                        </div>
                        <div className='flex items-center gap-4 mb-[20px]'>
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
            <div className='flex items-center justify-between bg-[#262626] px-[60px] py-[30px] copyright-container'> 
                <span className="text-white text-center text-sm whitespace-normal">© Copyright 2023 | Digital Doors Software Solutions Inc. | All rights reserved.</span> <br/> 
                <div className='flex flex-col gap-5'>
                    <div className='flex items-center gap-3'>
                        <a href="https://www.facebook.com/DDSSI/" target="_blank"><FaFacebook size={25} className='cursor-pointer text-[#fff] hover:text-white'/></a>
                        <a href="www.instagram.com/solvbiz" target="_blank"><PiInstagramLogoFill size={25} className='cursor-pointer text-[#fff] hover:text-white'/></a>
                        <a href="https://www.youtube.com/channel/UCr5GylGgZ5lrJ1Ewc6JCVEw" target="_blank"><FaYoutube size={25} className='cursor-pointer text-[#fff] hover:text-white'/></a>
                        <a href="https://www.linkedin.com/company/digital-doors-software-systems-inc" target="_blank"><FaLinkedin size={25} className='cursor-pointer text-[#fff] hover:text-white'/></a>
                    </div>
                </div>
                {/* <a className='m-1 cursor-pointer hover:text-[#1595FF]' href="/privacy-policy" target='_blank'>Privacy Policy</a> |  
                <a className='m-1 cursor-pointer hover:text-[#1595FF]' href="/terms-of-use" target='_blank'>Terms of use</a> |  
                <a className='m-1 cursor-pointer hover:text-[#1595FF]' href="/warranty-and-security" target='_blank'>Warranty, Security and Service</a> */}
            </div>
        </MainContainer>
    )
}

export default FooterSection