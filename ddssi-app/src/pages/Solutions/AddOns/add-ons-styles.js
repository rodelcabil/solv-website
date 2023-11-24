import styled from "styled-components"
import bg from '../../../assets/banner.jpg';
import imgbg from '../../../assets/banner.jpg';

export const MainContainer = styled.div`
    padding: 120px 60px;
    background: var(--bg-light);

    @media screen and (max-width: 1200px){
        padding: 0px;
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

    .img-container{
        
        background-image: ${({ imgbg }) => `url(${imgbg})`};
        background-size: cover;
        height: 350px;
        margin-bottom: 50px;
        border-radius: 8px;

        @media screen and (max-width: 600px){
           
            width: 100%;
        }
        
    }

    .item-img{
        height: 200px;
        bottom: -70px;
        left: 20px;
        border: 5px solid #fff;
        filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.25));
        border-radius: 8px;
    }

    @media screen and (max-width: 910px){
        flex-direction: column-reverse;
        padding: 0px 30px;
    }
`;


export const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 120px 60px;
    background: var(--bg-light);
    background-image: linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.8)), url(${bg});
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