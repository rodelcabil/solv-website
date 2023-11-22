import styled from "styled-components"
import { responsive } from "../../../../globalStyles";

export const MainContainer = styled.div`
    
    padding: 60px;
    background: var(--bg-primary);

    ${responsive}
    
`;

export const BodyContainer = styled.div`
    margin: auto;
    max-width: 1500px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    
    @media screen and (max-width: 910px){
        flex-direction: column;
        gap:30px;

    }

    @media screen and (max-width: 600px){
        #hero-img{
            height: 300px;
        }
        .header{
            font-size: 36px;
            text-align: center;
            line-height: 40px;
        }
        .sub-header{
            text-align: center;
            line-height: 28px;
        }
    }
`;