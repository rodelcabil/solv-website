import styled, { keyframes } from "styled-components"
import { responsive } from "../../../../globalStyles";

const rotateAnimation = keyframes`
    0% {
        transform: rotate(100deg);
    }
`;

export const MainContainer = styled.div`
    
    position: relative;
    padding: 60px;
    background: var(--bg-light);
   

    

    ${responsive}
    
`;

export const BodyContainer = styled.div`
    margin: auto;
    max-width: 1500px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    #hero-img{
        height: 450px;
        position: relative;
        z-index: 100000000;
        animation: ${rotateAnimation} 4s infinite;
        animation-iteration-count: 1;
    }

    .hero-left-container{
        position: relative;

        .circle{
            position: absolute;
            top: 300px;
            left: -100px;
            height: 100px;
            width: 100px;
            background: #B51A00;
            opacity: 0.5;
            border-radius: 100%;
        }
    }

    .hero-right-container{

        position: relative;

        .box{
            position: absolute;
            top: 0;
            right: 100px;
            height: 20px;
            width: 20px;
            background: green;
            opacity: 0.5;
            transform: rotate(45deg);

            @media screen and (max-width: 600px){
                right: 0;
            }
           
        }
    
        .triangle{
            
            position: absolute;
            bottom: 65px;
            right: 550px;
            height: 10px;
            width: 100px;
            opacity: 0.5;
            border-top: 25px solid transparent;
            border-right: 50px solid #1595FF;
            border-bottom: 25px solid transparent;

            @media screen and (max-width: 600px){
                left: -150px;
            }
            @media screen and (max-width: 500px){
                left: -50px;
                bottom: -70px;
            }

        }
        .triangle-2{
            
            position: absolute;
            bottom: 75px;
            right: 550px;
            height: 10px;
            width: 100px;
            opacity: 0.3;
            border-top: 25px solid transparent;
            border-right: 50px solid #1595FF;
            border-bottom: 25px solid transparent;
            
            @media screen and (max-width: 600px){
                left: -150px;
            }
            @media screen and (max-width: 500px){
                left: -50px;
                bottom: -80px;
            }
        }

        .rings{
            position: absolute;
            top: 230px;
            right: 20px;
            height: 30px;
            width: 30px;
            border-radius: 500px;
            border: 3px solid #A62C17;
            opacity: 0.3;

            @media screen and (max-width: 500px){
                top: 280px;
            }
        }
        .rings-2{
            position: absolute;
            top: 250px;
            right: 20px;
            height: 20px;
            width: 20px;
            border-radius: 500px;
            border: 3px solid #A62C17;
            opacity: 0.3;

            @media screen and (max-width: 500px){
                top: 300px;
            }
        }
    }

    .gradient-text{
        background: #A7CFDF;
        background: linear-gradient(to right, #23538A 0%, #1595FF 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    
    

    @media screen and (max-width: 910px){
        flex-direction: column;
        gap:30px;

    }

    @media screen and (max-width: 600px){
        #hero-img{
            height: 300px;
            
        }
        .header{
            font-size: 36px;
            text-align: center;
            line-height: 40px;
        }
        .sub-header{
            text-align: center;
            line-height: 28px;
        }
    }
`;