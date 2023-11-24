import styled from 'styled-components';


export const MainContainer = styled.div`
    max-width: 350px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    height: auto;
    filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.25));
    background: var(--bg-light);
    
    .bg-img{
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        height: 200px;
        width: 100%;
    }

    .item-img{
        bottom: -60px;
        left: 31%;
        height: 130px;
         border-radius: 10px;
        border: 5px solid #fff;
        filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.25));
    }
`;