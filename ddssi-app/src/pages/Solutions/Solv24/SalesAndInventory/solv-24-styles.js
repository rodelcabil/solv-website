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
    justify-content: space-between;
    flex-wrap: wrap; 
    gap: 30px;

    @media screen and (max-width: 910px){
        
    }

`;

export const GridContainer = styled.div`
    
    diplay: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    align-items: start;
    width: 100%;

`;