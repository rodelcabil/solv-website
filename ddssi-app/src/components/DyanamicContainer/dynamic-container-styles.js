import styled from 'styled-components'

export const MainContainer = styled.div`

    max-width: 1500px;
    padding: 120px 30px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ background }) => background};
    flex-direction: ${({ reverse }) => (reverse === true ? 'row-reverse' : 'row')};
    flex-wrap: wrap; 
    gap: 60px;
    border-radius: 20px;
    margin-bottom: 20px;

    .item-img{
        border-radius: 20px;
        width: 350px;
        height: 250px;
    }
    .details-container {
        &::after{
            content: "",
            width: 200px;
            height: 10px;
            position: absolute;
            bottom: 0;
            left: 0;
            background: var(--bg-primary);
        }
    }

    @media screen and (max-width: 910px){
        padding: 60px 30px;
    }

`