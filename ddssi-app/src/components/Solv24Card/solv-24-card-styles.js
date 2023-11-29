import styled,{keyframes} from 'styled-components';

const animation = keyframes`
    0% {
        transform: perspective(750px) translate3d(0px, 0px, -250px) rotateX(27deg)
        scale(0.9, 0.9);
        
    }
`;

export const MainContainer = styled.div`
    max-width: 390px;
    display: flex;
    flex-direction: column;
    border-radius: 10px;
    height: auto;
    filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.25));
    background: var(--bg-light);
    
    .bg-img{
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        height: 200px;
        width: 100%;
    }

    .item-img{
        bottom: -60px;
        left: 20px;
        height: 130px;
        border-radius: 10px;
        border: 5px solid #fff;
        transform: translate3d(0px, 0px, -250px);
        //box-shadow: 0 70px 40px -20px rgba(0, 0, 0, 0.2);
        transition: 0.4s ease-in-out transform;
        filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.25));
        animation: ${animation} 1s infinite;
        animation-iteration-count: 1;

        &:hover{
            animation: ${animation} 2s infinite;
        }
    }
`;