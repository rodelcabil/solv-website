import styled from "styled-components"

export const MainContainer = styled.div`
    
    padding: 120px 60px;
    background: var(--bg-light);

    @media screen and (max-width: 910px){
        padding: 30px;
    }

`;

export const BodyContainer = styled.div`
    
    max-width: 1500px;
    margin: auto;
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-wrap: wrap; 
    gap: 15px;

    @media screen and (max-width: 910px){
        
    }

`;

export const GridContainer = styled.div`
    
    display: grid;
    grid-template-rows: repeat(auto-fit, 1fr);
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;
    align-content: center;
    align-items: stretch;

    @media screen and (max-width: 600px){
        width: 100%;
    }
`;