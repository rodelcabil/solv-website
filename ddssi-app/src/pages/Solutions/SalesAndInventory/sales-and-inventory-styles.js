import styled from "styled-components"
import bg from '../../../assets/compressed/solo-banner.jpg'


export const MainContainer = styled.div`
    
    padding: 120px  60px;
    background: var(--bg-light);
    scroll-behavior: smooth;
    @media screen and (max-width: 910px){
        padding: 30px;
    }

`;

export const BodyContainer = styled.div`
    
    max-width: 1500px;
    margin: auto;
    display: flex;
    align-items: stretch;
    justify-content: space-around;
    flex-wrap: wrap; 
    gap: 30px;
    padding: 60px;
    background: rgba(16, 46, 118, 0.2);
    border-radius: 20px;

    @media screen and (max-width: 600px){
        padding: 0px;
    }

`;

export const GridContainer = styled.div`
    
    diplay: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: start;
    width: 100%;

`;

export const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 120px 60px;
    background: var(--bg-light);
    background-image: linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)), url(${bg});
    background-size: 100% 100%;
    height: calc(100vh + 90px);

    @media screen and (max-width: 910px){
        padding: 30px;
        height: calc(100vh - 60px);
    }

    @media screen and (max-width: 600px){
        .custom-header{
            font-size: 36px;
        }

       
    }
`;

export const PlanContainer = styled.div`

    max-width: 1500px;
    display: grid;
    grid-template-columns: ${({ col }) => `repeat(${col}, 1fr)`};
    grid-template-rows: 1fr;
    align-content: center;
    align-items: stretch;
    gap: 20px;
    margin: auto;

    @media screen and (max-width: 1200px){
        grid-template-columns: repeat(3, auto);
    }
    @media screen and (max-width: 800px){
        grid-template-columns: repeat(2, auto);
    }
    @media screen and (max-width: 650px){
        grid-template-columns: repeat(1, auto);
    }
`;
