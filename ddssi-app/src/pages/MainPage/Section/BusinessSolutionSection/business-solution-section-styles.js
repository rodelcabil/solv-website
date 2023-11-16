import styled from "styled-components"

export const MainContainer = styled.div`
    
    padding: 120px 60px;
    background: var(--bg-light);

`;

export const BodyContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(auto-fit, 1fr);
    grid-template-columns: repeat(3, 400px);
    justify-content: center;
    align-content: center;
    align-items: start;
    gap: 40px 15px;
`;