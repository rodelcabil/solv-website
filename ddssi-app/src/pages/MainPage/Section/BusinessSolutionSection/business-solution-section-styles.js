import styled from "styled-components"
import { responsive } from "../../../../globalStyles";

export const MainContainer = styled.div`
    
    padding: 60px;
    background: var(--bg-light);

    ${responsive}
`;

export const BodyContainer = styled.div`
    max-width: 1500px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr;
    align-content: center;
    gap: 20px;
    margin: auto;

   

    @media screen and (max-width: 1200px){
        grid-template-columns: repeat(2, auto);
    }
    @media screen and (max-width: 650px){
        grid-template-columns: repeat(1, auto);
    }
`;