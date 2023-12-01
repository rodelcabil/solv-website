import styled from "styled-components"
import bg from '../../../../assets/contact.jpg';
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
    
background: rgb(0,64,170);
background: linear-gradient(56deg, rgba(0,64,170,1) 0%, rgba(21,149,255,1) 89%, rgba(21,149,255,1) 100%);
`;

export const BodyContainer = styled.div`
    
    display: flex;
    max-width: 1500px;
    margin: auto;
    align-items: stretch; 
    justify-content: center;
    height: 100%;
    padding: 120px 60px;

    .left-container{
        
        justify-content: center;
        padding: 120px 60px;
        background: var(--bg-light);
        
    }

    @media screen and (max-width: 600px){
        flex-direction: column;
        padding: 30px;

        .left-container{
            padding: 100px 30px 100px 30px;
        }
        
        .right-container{
            padding: 30px;
        }

        .left-header{
            font-size: 36px;
            line-height: 40px;
            text-align: center;
        }
        
        .left-description{
            font-size: 14px;
            text-align: center;
        }
        
    }

    @media screen and (max-width: 910px){
        flex-direction: column;

        .left-header{
            text-align: center;
        }
        
        .left-description{
            text-align: center;
        }

        .left-social-media-container{
            justify-content: center;
        }
    }
`;


export const GetInTouchButton = styled(Link)`

    background: var(--bg-primary);
    padding: 8px 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--text-light);
    width: fit-content;
    margin: auto;
    border-radius: 100px;
    cursor: pointer;

    &:hover{
        background: #008cff;
    }
`