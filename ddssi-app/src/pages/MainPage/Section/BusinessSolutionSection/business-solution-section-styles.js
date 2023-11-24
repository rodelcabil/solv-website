import styled from "styled-components"
import { responsive } from "../../../../globalStyles";

export const MainContainer = styled.div`
    
    padding: 120px 60px;
    background: var(--bg-light);

    ${responsive}
`;

export const BodyContainer = styled.div`
margin: auto;
    max-width: 1500px;
    display: grid;
    grid-template-rows: repeat(auto-fit, 1fr);
    grid-template-columns: repeat(3, auto);
    // justify-content: center;
    align-content: center;
    align-items: stretch;

    @media screen and (max-width: 1200px){
        grid-template-columns: repeat(2, auto);
    }
    @media screen and (max-width: 650px){
        grid-template-columns: repeat(1, auto);
    }
`;