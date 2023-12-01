import styled from "styled-components"
import { responsive } from "../../../../globalStyles";

export const MainContainer = styled.div`
    padding: 120px 60px; 
    background: var(--bg-light);
    ${responsive};
`;

export const GridContainer = styled.div`
    margin: auto;
    max-width: 1500px; 
    display: grid;
    grid-template-rows: repeat(auto-fit, 1fr);
    grid-template-columns: repeat(4, 1fr);
    // justify-content: center;
    align-content: center;
    align-items: stretch;
    
    .container{
        display: flex;
        position: relative;
        cursor: pointer;
        
        .overlay{
            position: absolute;
            display: flex;
            justify-content: center;
            align-items: center;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            opacity: 0;
            height: 100%;
            width: 100%;

            &:hover{
                background: rgba(0,0,0,0.7);
                transition: all 0.5s ease;
            }
        }

        &:hover .overlay{
            opacity: 1;
        }
    }

    @media screen and (max-width: 1200px){
        grid-template-columns: repeat(3, auto);
    }
    @media screen and (max-width: 910px){
        grid-template-columns: repeat(2, auto);
    }
    @media screen and (max-width: 650px){
        grid-template-columns: repeat(1, auto);
    }
`;