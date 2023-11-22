import styled from 'styled-components';


export const MainContainer = styled.div`
    max-width: 350px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    height: auto;
    filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.25));
    background: var(--bg-light);
    
    img{
       
        height: 300px;
    }
`;