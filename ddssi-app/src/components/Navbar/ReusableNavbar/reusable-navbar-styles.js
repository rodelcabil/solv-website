import styled from 'styled-components';

import { NavLink, Link } from 'react-router-dom';
import { FaMagento } from 'react-icons/fa';
import { Container } from '../../../globalStyles';


export const Nav = styled.nav`
${'' /* background: rgb(4, 10, 14, 0.9); */}
${'' /*background:  ${({ theme, scrolled }) => (scrolled ? theme.navBg : 'none' )};*/}
background: ${({ scrolled }) => (scrolled === 1 ? 'var(--bg-light-blur)' : 'transparent' )};
display: flex
align-items: center;
font-size: 16px;
top: 0;
position: fixed;
-webkit-position: -webkit-sticky !important;
z-index: 1000000;
width: 100%;
margin: auto;
padding: ${({ scrolled }) => (scrolled === 1 ? '0 60px' : '15px 60px')};
justify-content: center; 
-webkit-backdrop-filter: blur(1px);
box-shadow: ${({ scrolled }) => (scrolled === 1 ? '0 10px 15px -3px rgb(0 0 0 / 0.1)' : 'none')}; 
${'' /*backdrop-filter: blur(1px);*/}

@media screen and (max-width: 1200px){
    width: 100%;
    padding: 0 20px ;
}

`;

export const NavbarContainer = styled(Container)`
height: 60px;
display: flex;

margin: auto;
max-width: 1500px;
justify-content: space-between;
${Container}


@media (min-width: 250px) and (max-width: 1200px){
    padding: 0;

}
`;

export const NavLogo = styled(Link)`
color: #fff;
justify-self: center;
cursor: pointer;
text-decoration: none;
font-weight: bold;
font-size: 1.3rem;
display: flex;
align-items: center;

.logoContainer{
    display: flex;
    align-items: center;
    gap: 10px;

    

    h5{
        color: #fff;
        font-weight: bolder;
      
        margin: 0;
        display:flex;
        align-items: center;

    }
  

    .page-name-container{
        display: ${({ scrolled }) => (scrolled === 1 ? 'none' : 'block')};
        

        @media screen and (max-width: 1100px){
            display: none;
        }
    }

    @media screen and (max-width: 910px){
       
    }
}

.logo{
    height: 30px;
    width: 110px;
}

&:hover{
    color: #555;
    text-decoration: none;
   
}
`;

export const NavIcon = styled(FaMagento)`
margin: 0.5rem;
color: #fff;

@media screen and (max-width: 1200px){
    margin-left: 3rem;
   
}
`;


export const MobileIcon = styled.div`
    display: none;
    
    .nav-icon{
        color: ${({ theme }) => theme.color} !important;
    }
    

    @media screen and (max-width: 1200px){
        display: flex;
        position: absolute;
        top: 0; 
        right: 0;
        margin-right : -30px;
        font-size: 1.8rem;
        transform: translate(-110%, 19%);
        transition: ${({ theme }) => theme.transition};
        cursor: pointer;
        color: white;
        background: ${({ theme }) => theme.iconBg} !important;
        padding: 10px; 
        border-radius: 50%;
        height: fit-content;
       
       
    }
`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;

.darkModeIcon{
   
    font-size: 20px;
    &:hover{
        cursor:pointer;
    }
}

.theme-icon-container-web{
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    margin-left: 10px;
    background: ${({ theme }) => theme.iconBg} !important;
    transition: ${({ theme }) => theme.transition};
    
    @media screen and (max-width: 1200px){
       display: none;
    }
}

@media screen and (max-width: 1200px){
    display: ${({ click }) => (click ? 'flex' : 'none')} ; 
    flex-direction: column;
    width: 100%;
    position: absolute;
    height: calc(100vh - 60px);
    left: 0;
    top: 60px;
    opacity: 1;
    transition: height 0.5s ease;
    background: var(--bg-light);
    padding-left: 0px;
}
`;


export const NavItem = styled.li`
height: 60px;
display: inline-block;
text-align: center;


// &:hover{ 
//     background: #FEEAE8;
//     color:#fff;
//     ;
    
// } 

@media screen and (max-width: 1200px){
    width: 100%;
    //  &:hover{
    //     border: none;
    // } 
}
`;

export const NavLinks = styled(NavLink)`

display: flex;
align-items: center;
text-decoration: none;
padding: 0.5rem 1rem;
height: 100%;
font-weight: 500;
font-size: 14px;
transition: ${({ theme }) => theme.transition};
color: ${({ scrolled }) => (scrolled === 1 ? 'var(--text-secondary)' : 'var(--text-light)')}; 
// color: var(--text-secondary);


.solv_logo{
    height: 20px;
}

&:hover{
   color: ${({ scrolled }) => (scrolled === 1 ? 'var(--text-dark)' : '#cccccc')}
  // color: var(--text-dark);
}


@media screen and (max-width: 1200px){
    text-align: center;
    padding: 1rem;
    width: 100%;
    display: flex;
    justify-content: center;
    color: var(--text-secondary); 
    
    &:hover{
        color: var(--text-dark);
    }
}
`;

export const NavItemBtn = styled.li`
   display: flex;
   
@media screen and (max-width: 1200px){
    display: none;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 100%;
}
`;

export const NavItemBtn2 = styled.li`
   display: none;

   .theme-icon-container-mobile{
        display: none;

        @media screen and (max-width: 1200px){
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 10px;
            margin-right: 50px;
            background: ${({ theme }) => theme.iconBg} !important;
            transition: ${({ theme }) => theme.transition};

            
        }
    }
   
@media screen and (max-width: 1200px){
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    width: 100%;
     cursor: pointer;
}
`;

export const NavBtnLink = styled(Link)`
display: flex;
justify-content: center;
align-items: center;
text-decoration: none;
padding: 8px 16px;
height: 100%;
width: 100%;
border: none;
outline: none;


&:hover{
  
    text-decoration: none;
}
`; 