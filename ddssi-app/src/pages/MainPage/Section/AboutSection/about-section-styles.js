import styled from "styled-components"
import bg from '../../../../assets/bg.jpg';
import { NavLink } from 'react-router-dom'

export const MainContainer = styled.div`
    padding: 120px 60px; 
    scroll-margin-top: 100%;
    background: var(--bg-light);
    background-image: linear-gradient(rgba(0, 0, 0, 0.6),
                       rgba(0, 0, 0, 0.7)), url(${bg});
    background-size: cover;
`;

export const BodyContainer = styled.div`
    max-width: 1500px;
    margin:auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
`;

export const LearnMoreButton = styled(NavLink)`
    display: flex;
    align-items: center;
    background: var(--bg-primary);
    width: fit-content;
    padding: 6px 40px;
    color: white;
    border-radius: 50px;
    font-size: 14px;
    cursor: pointer;
    text-decoration: none;

    &:hover{
        background: #008cff;
    }
`;