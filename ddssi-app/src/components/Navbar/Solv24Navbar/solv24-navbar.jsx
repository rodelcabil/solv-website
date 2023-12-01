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

} from './solv24-navbar-styles';
import Logo from '/public/ddssi.png' 
import SolvLogo from '../../../assets/solv_logo.png'
import Solv24Logo from '../../../assets/solvlogo.png'
import SolvDeskLogo from '../../../assets/solvdesk-logo.png'

const Solv24Navbar = () => {

    
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
            <Nav scrolled={scrollValue}>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={closeMobileMenu} scrolled={scrollValue}>
                            <div className="logoContainer">
                                <img src={Solv24Logo} className="logo" alt="Logo"/> 
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
                                    <NavLinks exact to="/"  onClick={closeMobileMenu} activeClassName="active">Home</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks exact to="/solution/solv-24/sales-and-inventory"  onClick={closeMobileMenu} activeClassName="active">Sales and Inventory System</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks  exact to="/solution/solv-24/hr-solutions"  onClick={closeMobileMenu} activeClassName="active">HR Solutions</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks  exact to="/solution/solv-24/point-of-sale" onClick={closeMobileMenu} activeClassName="active">Point Of Sales</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks  exact to="/solution/add-ons" onClick={closeMobileMenu} activeClassName="active">Add-ons</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks  exact to="/solution/custom"  onClick={closeMobileMenu} activeClassName="active">Custom</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks  exact to="/" onClick={closeMobileMenu}  activeClassName="active">
                                      <div className='flex items-center gap-1'>
                                        <img src={SolvDeskLogo} className="solv_logo" alt="Solv Logo" />
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

export default Solv24Navbar
