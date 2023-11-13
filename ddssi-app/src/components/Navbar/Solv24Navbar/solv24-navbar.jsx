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
const Solv24Navbar = () => {

    
    const [click, setClick] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    

    useEffect(() => {
      window.onscroll = function () {
          if (window.scrollY > 50) {
              setScrolled(true);
          } else {
              setScrolled(false);
          }
      };
  }, []);

    return (

        <>
            <style type="text/css">{`
                .active{
                    color: #1595FF;
                    font-weight: 600;
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
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={closeMobileMenu}>
                            <div className="logoContainer">
                                <img src={Logo} className="logo" alt="Logo"/> 
                                <span>Digital Doors Software <br/>Solutions Inc.</span>
                              
                                {/* <FaLaptopCode size="40" color="#2988B4" /> */}
                                {/* <span>PORTFOLIO</span> */}
                            </div>
                        </NavLogo>
                        <MobileIcon onClick={handleClick} >
                            {click ? <CgClose className="nav-icon" size="25" /> : <GiHamburgerMenu className="nav-icon" size="25" />}
                        </MobileIcon>
                        <div>
                            <NavMenu onClick={handleClick} >
                                <NavItem >
                                    <NavLinks exact to="/" onClick={closeMobileMenu} activeClassName="active">Home</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks exact to="/solution/solv-24/sales-and-inventory" onClick={closeMobileMenu} activeClassName="active">Sales and Inventory System</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks  exact to="/solution/solv-24/hr-solutions" onClick={closeMobileMenu} activeClassName="active">HR Solutions</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks  exact to="/solution/solv-24/point-of-sale" onClick={closeMobileMenu} activeClassName="active">Point Of Sales</NavLinks>
                                </NavItem>
                                <NavItem>
                                    <NavLinks  exact to="/" onClick={closeMobileMenu}  activeClassName="active">
                                      <div className='flex items-center gap-1'>
                                        <img src={SolvLogo} className="solv_logo" alt="Solv Logo"/>  
                                        <span className='font-bold'>SOLV Desk</span>
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
