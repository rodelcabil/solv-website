import styled from 'styled-components';
import { responsive } from '../../../../globalStyles';

export const MainContainer = styled.div`  
    
    background: var(--bg-dark);
    position: relative;
    z-index: 100000;
    
    .footer-text{
        width: max-content;
    }


    .copyright-container{
        @media screen and (max-width: 800px){
            flex-direction: column;
            padding: 20px;
        }
    }

    
`;

export const BodyContainer = styled.div`
    margin: auto;
    max-width: 1500px;
    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 15px;
    padding: 60px;
    
    .footer-logo{
       
        width: 100%;
    }

    @media screen and (max-width: 600px){
     
        flex-direction: column;
        padding: 10px;
        flex-wrap: nowrap;
     }
    
`;

export const Row = styled.div`  
    dispaly: flex;
    flex-direction: column;
    max-width: 300px;
    gap: 15px;

    .logo{
        height: 40px;
        width: 40px;
    }

    .google-map{
        height: 200px;
        width: 300px;

        @media screen and (max-width: 600px){
     
            width: 100%;
            
         }
    }
    
    @media screen and (max-width: 600px){
     
        max-width: 100%;
       justify-content: center;
       align-items: center;
    }

   
`;
