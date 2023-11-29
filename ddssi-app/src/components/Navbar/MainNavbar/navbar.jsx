import React, { useState, useEffect } from 'react'

import { CgClose } from 'react-icons/cg'
import { BsFillMoonStarsFill } from 'react-icons/bs'
import { GiHamburgerMenu, GiDelighted } from 'react-icons/gi'
import { FaLaptopCode } from 'react-icons/fa'
import { HiLightBulb } from 'react-icons/hi'
import { IconContext } from 'react-icons/lib';
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    HashLinks,
    NavItemBtn2,

} from './navbar-styles';
import Logo from '../../../assets/ddssi-logo-black.png'
import SolvDeskLogo from '../../../assets/solvdesk-logo.png'
const Navbar = () => {


    const [click, setClick] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const [homeActive, setHomeActive] = useState(true);
    const [aboutActive, setAboutActive] = useState(false);
    const [serviceActive, setServiceActive] = useState(false);
    const [solutionActive, setSolutionActive] = useState(false);
    const [testimonialActive, setTestimonialActive] = useState(false);
    const [contactActive, setContactActive] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        // Attach the event listener
        window.addEventListener('scroll', handleScroll);

        // Detach the event listener when the component is unmounted
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, [scrolled]);

    const scrollValue = scrolled ? 1 : 0;
    const setActive = (home, about, service, solution, testimonial, contact) => {
        setHomeActive(home);
        setAboutActive(about);
        setServiceActive(service);
        setSolutionActive(solution);
        setTestimonialActive(testimonial);
        setContactActive(contact);
        closeMobileMenu();
    };

    const activeHome = () => setActive(true, false, false, false, false, false);
    const activeAbout = () => setActive(false, true, false, false, false, false);
    const activeService = () => setActive(false, false, true, false, false, false);
    const activeSolution = () => setActive(false, false, false, true, false, false);
    const activeTestimonial = () => setActive(false, false, false, false, true, false);
    const activeContact = () => setActive(false, false, false, false, false, true);

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -60;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    }

    return (

        <>
            <style type="text/css">{`
                .active{
                    color: #1595FF;
                    font-weight: 500;
                    border-radius: 5px;
                }
                
                .active:hover{
                  color: #1595FF;
                }

                @media screen and (max-width: 910px){
                    .active{
                        color: #fff;   
                        border-top:0;
                        background: #2988B4;
                        padding-top: 15px;
                        border-radius: 0px;
                    }

                    .active:hover{
                        color: #000;   
                    }
                }

                .icons{
                    color: white;
                }
            `
            }
            </style>
            <IconContext.Provider value={{ color: '#555' }}>
                <Nav scrolled={scrollValue} click={click}>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={closeMobileMenu} scrolled={scrollValue}>
                            <div className="logoContainer">
                                <img src={Logo} className="logo" alt="Logo" />

                                {/* <span>Digital Doors Software <br />Solutions Inc.</span> */}

                                {/* <FaLaptopCode size="40" color="#2988B4" /> */}
                                {/* <span>PORTFOLIO</span> */}
                            </div>
                        </NavLogo>
                        <MobileIcon onClick={handleClick} >
                            {click ? <CgClose className="nav-icon" size="25" /> : <GiHamburgerMenu className="nav-icon" size="25" />}
                        </MobileIcon>
                        <div>
                            <NavMenu onClick={handleClick} click={click}>
                                <NavItem >
                                    <HashLinks to="/#home" smooth onClick={activeHome} className={homeActive ? "isActive" : "isInActive"} scroll={el => scrollWithOffset(el)}>Home</HashLinks>
                                </NavItem>
                                <NavItem>
                                    <HashLinks to="/#service" smooth onClick={activeService} className={serviceActive ? "isActive" : "isInActive"} scroll={el => scrollWithOffset(el)}>Services</HashLinks>
                                </NavItem>
                                <NavItem>
                                    <HashLinks to="/#solution" smooth onClick={activeSolution} className={solutionActive ? "isActive" : "isInActive"} scroll={el => scrollWithOffset(el)}>Solutions</HashLinks>
                                </NavItem>
                                <NavItem>
                                    <HashLinks to="/#about" smooth onClick={activeAbout} className={aboutActive ? "isActive" : "isInActive"} scroll={el => scrollWithOffset(el)}>About</HashLinks>
                                </NavItem>
                                <NavItem>
                                    <HashLinks to="/#testimonial" smooth onClick={activeTestimonial} className={testimonialActive ? "isActive" : "isInActive"} scroll={el => scrollWithOffset(el)}>Testimonials</HashLinks>
                                </NavItem>
                                <NavItem>
                                    <HashLinks to="/#contact" smooth onClick={activeContact} className={contactActive ? "isActive" : "isInActive"} scroll={el => scrollWithOffset(el)}>Contact Us</HashLinks>
                                </NavItem>
                                <NavItem>
                                    <HashLinks to="http://solvdesk.digitaldoorssoftware.com:8023/" target="_blank" >
                                        <div className='flex items-center gap-1'>
                                            <img src={SolvDeskLogo} className="solv_logo" alt="Solv Logo" />
                                            {/* <span className='font-bold'>SOLV Desk</span> */}
                                        </div>
                                    </HashLinks>
                                </NavItem>
                            </NavMenu>
                        </div>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
