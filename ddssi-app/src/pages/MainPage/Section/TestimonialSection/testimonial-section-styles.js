import styled from 'styled-components';
import { responsive } from '../../../../globalStyles';

export const MainContainer = styled.div`  
    padding: 60px;
    background: var(--bg-light);
    box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.25);   

    ${responsive};

`;

export const BodyContainer = styled.div`
    margin: auto;
    max-width: 1500px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;


    @media screen and (max-width: 1360px){
        justify-content: center;
    }
`;
