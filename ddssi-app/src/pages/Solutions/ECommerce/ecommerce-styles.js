import styled from "styled-components"
import bg from '../../../assets/banner.jpg';

export const MainContainer = styled.div`
    padding: 60px;
    background: var(--bg-light);

    @media screen and (max-width: 1200px){
        padding: 0px;
    }
`;



export const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 120px 60px;
    background: var(--bg-light);
    background-image: linear-gradient(rgba(0, 0, 0, 0.6),
                    rgba(0, 0, 0, 0.7)), url(${bg});
    background-size: cover;
    height: calc(100vh + 90px);

    @media screen and (max-width: 910px){
        padding: 30px;
        height: calc(100vh - 60px);
    }
`;

export const BodyContainer = styled.div`
    margin: auto;
    max-width: 1500px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 910px){
        flex-direction: column-reverse;
        padding: 0px 30px;
    }
`;
