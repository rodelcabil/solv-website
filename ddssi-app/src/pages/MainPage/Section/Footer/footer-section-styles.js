import styled from 'styled-components';

export const MainContainer = styled.div`  
    padding: 60px;
    background: var(--bg-dark);
    
    .footer-text{
        width: max-content;
    }
`;

export const BodyContainer = styled.div`
    margin: auto;
    max-width: 1500px;
    display: flex;
    align-items: start;
    justify-content: space-between;

    .logo{
        height: 50px;
        width: 60px;
    }
`;

export const Row = styled.div`  
    dispaly: flex;
    flex-direction: column;
    max-width: 300px;

    .map{
        height: 200px;
        width: 300px;
    }
    
`;
