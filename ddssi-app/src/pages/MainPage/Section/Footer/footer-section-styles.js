import styled from 'styled-components';
import { responsive } from '../../../../globalStyles';

export const MainContainer = styled.div`  
    padding: 60px;
    background: var(--bg-dark);
    
    .footer-text{
        width: max-content;
    }

    @media screen and (max-width: 910px){
        padding: 30px;
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
    
    .footer-logo{
       
        width: 100%;
    }

    @media screen and (max-width: 600px){
     
        flex-direction: column-reverse;
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

    .map{
        height: 200px;
        width: 300px;
    }
    
    @media screen and (max-width: 600px){
     
       width: 100%;
       justify-content: center;
       align-items: center;
    }
`;
