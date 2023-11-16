import styled from 'styled-components';


export const MainContainer = styled.div`
    
    width: 400px;
    border-radius: 16px;
    padding: 30px;
    background: var(--bg-light);
    filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.25));
    display: flex;
    flex-direction: column;
    flex: 1;
    
    @media screen and (max-width: 450px){
        width: 100%;
    }
`;

export const Title = styled.span`
    position: relative;
    padding-left: 8px;
    &::after{
        content: attr(data-width);;
        position: absolute;
        
        top: 3px;
        bottom: -2%;
        left: -1%;
        z-index: -1;
        height: 20px;
        width: 5px;
        display: block;
        background: ${({ color }) => color};
        
        
    }
`;
