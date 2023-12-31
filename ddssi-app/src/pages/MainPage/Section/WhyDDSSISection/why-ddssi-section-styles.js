import styled from 'styled-components';
import { responsive } from '../../../../globalStyles';

export const MainContainer = styled.div`  
    padding: 60px;
    background: var(--bg-light);

   ${responsive}
`;

export const BodyContainer = styled.div`
    // margin: auto;
    // max-width: 1500px;
    // display: flex;
    // align-items: center;
    // justify-content: center;
    // flex-wrap: wrap;
    // gap: 15px;

    // @media screen and (max-width: 1360px){
    //     justify-content: center;
    // }

    display: grid;
    grid-template-rows: repeat(auto-fit, 1fr);
    grid-template-columns: repeat(2, auto);
    justify-content: center;
    align-content: center;
    align-items: stretch;
    gap: 15px;

    @media screen and (max-width: 1200px){
        grid-template-columns: repeat(2, auto);
    }
    @media screen and (max-width: 650px){
        grid-template-columns: repeat(1, auto);
    }
`;
