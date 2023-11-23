import styled from 'styled-components';


export const MainContainer = styled.div`
    
    max-width: 400px;
    border-radius: 16px;
    padding: 30px;
    background: var(--bg-light);
    //filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.25));
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #e2e2e2;
    justify-content: center;

    .employee-img{
        height: ${({ height }) => height};
    }

    @media screen and (max-width: 450px){
        width: 100%;
    }
`;

export const Divider = styled.div`
    height: 5px;
    border-radius: 10px;
    width: 100px;
    background: #DEAE1E;
`;