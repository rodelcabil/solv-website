import styled from "styled-components"
import bg from '../../../assets/banner.jpg';

export const MainContainer = styled.div`
    padding: 120px 60px;

    @media screen and (max-width: 1200px){
        padding: 30px;
    }
`;

export const BodyContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 60px;

    img{
        height: 300px;
        filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.25));
    }

    @media screen and (max-width: 910px){
        flex-direction: column-reverse;
        padding: 0px 60px;
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
        .addon-header{
            font-size: 36px;
        }

       
    }
`;