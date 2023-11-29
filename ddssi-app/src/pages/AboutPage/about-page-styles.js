import styled from "styled-components"
import bg from '../../assets/about-banner-bg.jpg';
import pattern from '../../assets/pattern.webp';
import { responsive } from "../../globalStyles";


export const MainContainer = styled.div`
    background: var(--bg-light)


`;

export const BodyContainer = styled.div`
    max-width: 1500px;
    margin: auto;
    display: flex;
    padding: 120px 60px;
    position: relative;

    .about-img{
        
        min-height: 400px;
        max-height: 400px;
    }

    @media screen and (max-width: 1200px){
        
    }

    @media screen and (max-width: 910px){
        padding: 120px 30px 30px 30px;
        flex-direction: column;
        gap: 15px;
        
     }
    
`;

export const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 120px 60px;
    background: var(--bg-light);
    background-image: linear-gradient(rgba(0, 0, 0, 0.6),
                    rgba(0, 0, 0, 0.7)), url(${bg});
    background-size: 100% 100%;
    height: calc(100vh + 90px);
    
    @media screen and (max-width: 910px){
        padding:  30px;
     }

    @media screen and (max-width: 600px){
       .banner-header{
            font-size: 36px;
       }
       .banner-description{
            font-size: 22px;
       }
    }
`;

export const GoalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 120px 60px;
    flex: 1;
    background-image: url(${pattern});
    background-size: cover;

    @media screen and (max-width: 910px){
        padding:  30px;

        
       
    }

    @media screen and (max-width: 600px){
        .goal-container{
            padding: 20px;
        }
        .goal-header{
            font-size: 28px;
        }

        .goal-description{
            font-size: 14px;
        }
    }
`;

