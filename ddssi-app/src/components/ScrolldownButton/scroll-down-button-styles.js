import { NavHashLink } from "react-router-hash-link";
import styled,{keyframes} from "styled-components"

const FloatingAnimation = keyframes`

    0% {
       
        transform: translatey(0px);
    }
    50% {
        
        transform: translatey(5px);
    }
    100% { 
        transform: translatey(0px);
    }

`

export const Anchor = styled(NavHashLink)`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    
    .scroll-icon{
        animation: ${FloatingAnimation} 6s ease-in-out infinite;
    }
`;