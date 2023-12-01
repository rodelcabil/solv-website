import styled from 'styled-components';


export const MainContainer = styled.div`
    
    max-width: 400px;
    border-radius: 8px;
    padding: 30px;
    background: ${({ color }) => color};
    display: flex;
    flex-direction: column;
    
    &:hover{
        transition: all 0.5s ease;
        transform: translateY(-5px);
    }

    @media screen and (max-width: 600px){
        .reason-title{
            font-size: 16px;
        }
        .reason-description{
            font-size: 14px;
        }
    }
`;