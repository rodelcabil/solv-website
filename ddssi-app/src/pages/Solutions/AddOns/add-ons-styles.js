import styled from "styled-components"
import bg from '../../../assets/banner.jpg';

export const MainContainer = styled.div`
    padding: 120px 60px;
`;

export const BodyContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 60px;
    img{
        height: 300px;
        
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
`;