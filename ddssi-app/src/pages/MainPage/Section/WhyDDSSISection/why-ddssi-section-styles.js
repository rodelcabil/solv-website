import styled from 'styled-components';

export const MainContainer = styled.div`  
    padding: 60px;
    background: var(--bg-light);
    box-shadow: 0px 4px 40px 0px rgba(0, 0, 0, 0.25);   
    position: relative;
    z-index: 2;
`;

export const BodyContainer = styled.div`
    margin: auto;
    max-width: 1500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
`;
