import styled from 'styled-components';


export const MainContainer = styled.div`
    
    display: flex;
    gap: 15px;
    justify-content: center;
    cursor: pointer;

    .desciption{
        max-width: 400px;
    }

    
    
`;

export const BodyContainer = styled.div`
    width: 400px;
    background: var(--bg-light);
    display: flex;
    flex-direction: column;
    align-items: left;
    border-radius: 10px;
    padding: 15px;
    gap: 20px;

    img{
        width: 100%;
        height: 240px;
        border-radius: 5px;
    }

    .desciption{
        max-width: 400px;
    }

    &:hover{
        background: #f2f2f2;
    }

    @media screen and (max-width: 900px){
        width: 300px;
    }

    @media screen and (max-width: 650px){
        width: 100%;
    }
`;