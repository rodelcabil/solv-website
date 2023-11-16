import styled from "styled-components"
import bg from '../../assets/banner.jpg';
import pattern from '../../assets/pattern.webp';


export const MainContainer = styled.div`
    background: var(--bg-light)
`;

export const BodyContainer = styled.div`
    max-width: 1500px;
    margin: auto;
    display: flex;
    padding: 120px 60px;
    position: relative;

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

export const GoalContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 120px 60px;
    flex: 1;
    background-image: url(${pattern});
    background-size: cover;
`;

