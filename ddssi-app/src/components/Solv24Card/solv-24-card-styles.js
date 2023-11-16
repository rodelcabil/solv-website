import styled from 'styled-components';


export const MainContainer = styled.div`
    width: 390px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    height: 570px;
    filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.25));
    background: var(--bg-light);
    

    img{
       
        max-height: 300px;
    }
`;