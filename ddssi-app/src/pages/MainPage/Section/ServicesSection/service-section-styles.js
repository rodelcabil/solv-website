import styled from 'styled-components';
import { responsive } from '../../../../globalStyles';


export const MainContainer = styled.div`
    
    padding: 120px 60px 60px 60px;
    background: var(--bg-light);

    ${responsive}
`;

export const BodyContainer = styled.div`
    margin: auto;
    max-width: 1500px;
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-wrap: wrap;
    gap: 15px;

    @media screen and (max-width: 1360px){
        justify-content: center;
    }
`;