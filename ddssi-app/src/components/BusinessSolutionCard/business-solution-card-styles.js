import styled from 'styled-components';


export const MainContainer = styled.div`
    
    display: flex;
    gap: 15px;
    justify-content: center;
    .desciption{
        max-width: 400px;
    }
    
`;

export const BodyContainer = styled.div`
    width: 450px;
    background: var(--bg-light);
    display: flex;
    gap: 20px;

    img{
        margin-top: 15px;
    }

    .desciption{
        max-width: 400px;
    }
`;