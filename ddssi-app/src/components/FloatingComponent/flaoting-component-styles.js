import styled, {keyframes} from 'styled-components'

const FloatingAnimation = keyframes`

    0% {
       
        transform: translatey(0px);
    }
    50% {
        
        transform: translatey(-10px);
    }
    100% { 
        transform: translatey(0px);
    }

`

export const MainContainer = styled.div`

    position: fixed;
    bottom: 10px;
    left: 10px;
    background: var(--bg-light);
    border-radius: 10px;
    padding: 10px;
    z-index: 2000000;
    display: ${({visible}) => (visible ? 'flex' : 'none')};
    flex-direction: column;
    box-shadow:  2px 1px 16px 0px rgba(0,0,0,0.2);
    animation: ${FloatingAnimation} 6s ease-in-out infinite;

`