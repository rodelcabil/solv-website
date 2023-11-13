import styled from 'styled-components';


export const MainContainer = styled.div`
    
    width: 400px;
    border-radius: 16px;
    padding: 30px;
    background: var(--bg-light);
    filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.25));
    display: flex;
    flex-direction: column;
    align-items: center;
    
    .employee-img{
        height: 80px;
        width: 80px;
        border-radius: 100%;
    }
`;

export const Divider = styled.div`
    height: 5px;
    border-radius: 10px;
    width: 100px;
    background: #DEAE1E;
`;