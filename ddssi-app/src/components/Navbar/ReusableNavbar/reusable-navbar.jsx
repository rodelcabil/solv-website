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
    NavLinks,
    NavItemBtn2,

} from './reusable-navbar-styles';
import Logo from '/public/ddssi.png' 
import SolvLogo from '../../../assets/compressed/solv_logo.png'
import Solv24Logo from '../../../assets/compressed/solvlogo.png'
import Solv24LogoWhite from '../../../assets/compressed/solvlogo-white.png'
import SolvDeskLogo from '../../../assets/compressed/solvdesk-logo.png'
import SolvDeskLogoWhite from '../../../assets/compressed/solvdesk-logo-white.png'

const ReusableNavbar = () => {

    
    const [click, setClick] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    

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
            <Nav scrolled={scrollValue}>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={closeMobileMenu} scrolled={scrollValue}>
                            <div className="logoContainer">
                                <img src={scrollValue === 0 ? Solv24LogoWhite : Solv24Logo} className="logo" alt="Logo"/> 
                                {/* <div className='page-name-container'>
                                    <span className="text-[#BD3200] italic text-sm">SOLV</span>
                                    <span className="text-[#001E5A] text-lg ml-[-3px]">24</span> 
                                </div> */}
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
                                    <NavLinks exact to="/" scrolled={scrollValue}  onClick={closeMobileMenu} activeClassName="active">Home</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks exact to="/solution/solv-24" scrolled={scrollValue}  onClick={closeMobileMenu} activeClassName="active">SOLV 24</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks exact to="/solution/sales-and-inventory" scrolled={scrollValue}  onClick={closeMobileMenu} activeClassName="active">Sales and Inventory System</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks  exact to="/solution/hr-solutions" scrolled={scrollValue}  onClick={closeMobileMenu} activeClassName="active">Hr Solution</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks  exact to="/solution/accounting" scrolled={scrollValue} onClick={closeMobileMenu} activeClassName="active">Accounting</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks  exact to="/solution/add-ons" scrolled={scrollValue} onClick={closeMobileMenu} activeClassName="active">Add-ons</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks  exact to="/solution/custom" scrolled={scrollValue}  onClick={closeMobileMenu} activeClassName="active">Custom</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks  exact to="/" onClick={closeMobileMenu}  activeClassName="active">
                                      <div className='flex items-center gap-1'>
                                        <img src={scrollValue === 0 ? SolvDeskLogoWhite : SolvDeskLogo} className="solv_logo" alt="Solv Logo" />
                                      </div>
                                    </NavLinks>
                                </NavItem>
                            </NavMenu>
                        </div>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}

export default ReusableNavbar
