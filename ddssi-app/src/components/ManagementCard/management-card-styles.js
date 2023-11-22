import styled from 'styled-components';


export const MainContainer = styled.div`
    
    width: 350px;
    border-radius: 8px;
    padding: 30px;
    background: #FDFDFD;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #e3e3e3;

    img{
        height: 200px;
    }

    @media screen and (max-width: 450px){
        width: 100%;
    }
`;