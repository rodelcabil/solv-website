import styled from "styled-components"
import bg from '../../../../assets/about-bg.jpg';
import { NavLink } from 'react-router-dom'
import { responsive } from "../../../../globalStyles";

export const MainContainer = styled.div`
    padding: 120px 60px; 
    scroll-margin-top: 100%;
    background: var(--bg-light);
    background-image: linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)), url(${bg});
    background-size: 100%~ 100%;

    ${responsive};
`;

export const BodyContainer = styled.div`
    max-width: 1500px;
    margin:auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 15px;

    img{
        width: 100px;
        border-radius: 10px;
    }

    @media screen and (max-width: 910px){
        flex-direction: column;

        .row-container{
            width: 100%;

            
        }

    }
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