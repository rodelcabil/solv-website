import styled from 'styled-components'

export const MainContainer = styled.div`

    max-width: 1500px;
    display: grid;
    grid-template-columns: ${({ col }) => `repeat(${col}, 1fr)`};
    grid-template-rows: 1fr;
    align-content: center;
    align-items: stretch;
    gap: 20px;
    margin: auto;

    @media screen and (max-width: 1200px){
        grid-template-columns: repeat(3, auto);
    }
    @media screen and (max-width: 800px){
        grid-template-columns: repeat(2, auto);
    }
    @media screen and (max-width: 650px){
        grid-template-columns: repeat(1, auto);
    }
`;