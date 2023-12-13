import styled from "styled-components"
import bg from '../../../assets/pos-banner.jpg';

export const MainContainer = styled.div`
    
    padding: 120px 60px;
    background: var(--bg-light);

    @media screen and (max-width: 910px){
        padding:  30px;
    }
`;

export const BodyContainer = styled.div`
    
    margin: auto;
    max-width: 1500px;
    display: flex;
    align-items: center;
    justify-content: space-around; 
    gap: 15px;

    .img-container{
        background-image: url(${bg});
        background-size: cover;
        height: 350px;
        margin-top: 50px;
        border-radius: 8px;
        
        @media screen and (max-width: 600px){
           
            width: 100%;
        }
    }

    .item-img{
        width: 200px;
        top: -80px;
        right: 20px;
        border: 5px solid #fff;
        filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.25));
        border-radius: 8px;
        
    }

    @media screen and (max-width: 910px){
        flex-direction: column;
        gap: 50px;
    }

`;