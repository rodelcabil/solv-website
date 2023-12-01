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
    border: 1px solid #e3e3e3;
    
    img{
        width: 100%;
        height: 240px;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    .desciption{
        max-width: 400px;
    }

    
    &:hover{
        background: #f2f2f2;
        transition: all 0.5s ease;
        transform: translateY(-5px);
    }

    @media screen and (max-width: 900px){
        width: 300px;
    }

    @media screen and (max-width: 650px){
        width: 100%;
    }
`;