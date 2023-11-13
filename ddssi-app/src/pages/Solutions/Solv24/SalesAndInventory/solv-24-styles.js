import styled from "styled-components"

export const MainContainer = styled.div`
    
    padding: 60px;
    background: var(--bg-light);

`;

export const BodyContainer = styled.div`
    
    display: flex;
    align-items: start;
    justify-content: space-between; 

`;

export const GridContainer = styled.div`
    
    display: grid;
    grid-template-rows: repeat(auto-fit, 1fr);
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;
    align-content: center;
    align-items: start;
`;