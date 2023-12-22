import styled from "styled-components"
import bg from '../../../assets/compressed/hris-banner.jpg';

export const MainContainer = styled.div`
    
    padding: 60px;
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
    justify-content: center; 
    gap: 15px;
    background: rgba(25, 65, 163, 0.1);
    padding: 60px;
    border-radius: 20px;
    margin-bottom: 20px;

    .img-container{
        background-image: url(${bg});
        background-size: cover;
        height: 350px;
        margin-bottom: 50px;
        border-radius: 8px;

        @media screen and (max-width: 600px){
           
            width: 100%;
        }
        
    }

    .item-img{
        width: 200px;
        bottom: -80px;
        left: 20px;
        border: 5px solid #fff;
        filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.25));
        border-radius: 8px;
        
    }

    @media screen and (max-width: 910px){
        flex-direction: column;
        gap: 50px;
    }

    @media screen and (max-width: 600px){
        padding: 0px;
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
export const GridContainer = styled.div`
    
    diplay: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: start;
    width: 100%;
    
`;

