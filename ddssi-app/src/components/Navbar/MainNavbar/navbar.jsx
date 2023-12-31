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
import Logo from '../../../assets/compressed/ddssi-logo-black.png'
import SolvDeskLogo from '../../../assets/compressed/solvdesk-logo.png'
import { useDispatch, useSelector } from 'react-redux'
import { setActiveNav } from '../../../redux/activeNavSlice'

const Navbar = () => {

    const dispatch = useDispatch();
    const [click, setClick] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
 
    const activeTab = useSelector((state) => state.activeNav.active);

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

    }, [scrolled, activeTab]);

    const scrollValue = scrolled ? 1 : 0;
    

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -60;
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
    }

    const changeTab = (tab) =>{
        dispatch(setActiveNav(tab));
    }

    return (

        <>
            <style type="text/css">{`
                .active{
                    color: #1595FF;
                    font-weight: 500;
                    
                }
                
                .active:hover{
                  color: #1595FF;
                  border-bottom: 3px solid #1595FF;
                }

                @media screen and (max-width: 910px){
                    .active{
                        color: #fff;   
                        border-top:0;
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
                                    <HashLinks to="/#home" smooth onClick={()=>{changeTab("home")}} className={activeTab == "home" ? "isActive" : "isInActive"} scroll={el => scrollWithOffset(el)}>Home</HashLinks>
                                </NavItem>
                                <NavItem>
                                    <HashLinks to="/#service" smooth onClick={()=>{changeTab("service")}} className={activeTab == "service" ? "isActive" : "isInActive"} scroll={el => scrollWithOffset(el)}>Services</HashLinks>
                                </NavItem>
                                <NavItem>
                                    <HashLinks to="/#solution" smooth onClick={()=>{changeTab("solution")}} className={activeTab == "solution" ? "isActive" : "isInActive"} scroll={el => scrollWithOffset(el)}>Solutions</HashLinks>
                                </NavItem>
                                <NavItem>
                                    <HashLinks to="/#product-demo" smooth onClick={()=>{changeTab("product-demo")}} className={activeTab == "product-demo" ? "isActive" : "isInActive"} scroll={el => scrollWithOffset(el)}>Product Demo</HashLinks>
                                </NavItem>
                                <NavItem>
                                    <HashLinks to="/#about" smooth onClick={()=>{changeTab("about")}} className={activeTab == "about" ? "isActive" : "isInActive"} scroll={el => scrollWithOffset(el)}>About</HashLinks>
                                </NavItem>
                                <NavItem>
                                    <HashLinks to="/#testimonial" smooth onClick={()=>{changeTab("testimonial")}} className={activeTab == "testimonial" ? "isActive" : "isInActive"} scroll={el => scrollWithOffset(el)}>Testimonials</HashLinks>
                                </NavItem>
                                <NavItem>
                                    <HashLinks to="/#contact" smooth onClick={()=>{changeTab("contact")}} className={activeTab == "contact" ? "isActive" : "isInActive"} scroll={el => scrollWithOffset(el)}>Contact Us</HashLinks>
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
