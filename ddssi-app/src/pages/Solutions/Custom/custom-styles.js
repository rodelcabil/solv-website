import styled from "styled-components"
import bg from '../../../assets/custom-banner-bg.jpg';

export const MainContainer = styled.div`
    padding: 120px 60px;

    @media screen and (max-width: 1200px){
        padding: 100px 30px 30px 30px;
    }
`;

export const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 120px 60px;
    background: var(--bg-light);
    background-image: linear-gradient(rgba(0, 0, 0, 0.6),rgba(0, 0, 0, 0.7)), url(${bg});
    background-size: cover;
    height: calc(100vh - 90px);

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

export const BodyContainer = styled.div`
    margin: auto;
    max-width: 1500px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;

   
`;
