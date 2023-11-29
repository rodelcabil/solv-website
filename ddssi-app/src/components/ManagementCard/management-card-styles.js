import styled from 'styled-components';


export const MainContainer = styled.div`
    
    width: 300px;
   
    background: #FDFDFD;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    height: 300px;
    position: relative;

    img{
        height: 100%;
        width: 100%;
        // border-radius: 8px;
        // border: 1px solid #e3e3e3;
    }

    .details-container{
        width: 100%;
        background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%);
    }

    @media screen and (max-width: 450px){
        flex-1;
    }
`;