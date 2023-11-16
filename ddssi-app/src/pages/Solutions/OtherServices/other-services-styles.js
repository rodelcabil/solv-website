import styled from "styled-components"
import bg from '../../../assets/banner.jpg';

export const MainContainer = styled.div`
    padding: 60px;
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

export const BodyContainer = styled.div`
    margin: auto;
    max-width: 1500px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
