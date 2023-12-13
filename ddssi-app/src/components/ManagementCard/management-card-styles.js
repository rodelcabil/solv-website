import styled from 'styled-components';


export const MainContainer = styled.div`
    
    width: 300px;
    background: rgba(0,0,0,0.87);
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 300px;
    position: relative;

    img{
        height: 100%;
        // border-radius: 8px;
        // border: 1px solid #e3e3e3;
    }

    .details-container{
        width: 100%;
        border-radius: 8px;
        background-image: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 100%);
    }


    &::after{
        content: '';
        position: absolute;
        height: 120px;
        width: 50px;
        top: -20px;
        left: -20px;
        background: transparent;
        border-top: 3px solid var(--bg-primary);
        border-left: 3px solid var(--bg-primary);
    }

    &::before{
        content: '';
        position: absolute;
        height: 120px;
        width: 50px;
        bottom: -20px;
        right: -20px;
        background: transparent;
        border-bottom: 3px solid var(--bg-primary);
        border-right: 3px solid var(--bg-primary);
    }

    @media screen and (max-width: 450px){
        flex-1;
    }
`;