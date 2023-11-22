import styled from 'styled-components';


export const MainContainer = styled.div`
    
    padding: 15px 60px;
    background: var(--bg-primary);
    color: #fff;

    @media screen and (max-width: 910px){
        padding: 10px 30px;
    }
`;

export const BodyContainer = styled.div`
    margin: auto;
    max-width: 1500px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 910px){
        flex-direction: column;
        gap: 10px;
    }
`;