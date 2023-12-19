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
    background: transparent;
    padding: 10px;
    z-index: 2000000;
    display: ${({visible}) => (visible ? 'flex' : 'none')};
    flex-direction: column;
    animation: ${FloatingAnimation} 6s ease-in-out infinite;

    img{
        width: 200px;

        @media screen and (max-width: 600px){
            width: 150px;
        }
    }

`