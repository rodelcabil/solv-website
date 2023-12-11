import { NavLink } from 'react-router-dom';
import styled from 'styled-components';


export const MainContainer = styled.div`
    
    padding: 15px 60px;
    background: var(--bg-primary);
    
    color: #fff;

    @media screen and (max-width: 910px){
        padding: 10px;
    }
`;

export const BodyContainer = styled.div`
    margin: auto;
    max-width: 1500px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 910px){
        flex-direction: column;
        gap: 10px;
    }
`;

export const TryButton = styled(NavLink)`
    
    background: var(--bg-dark);
    padding: 4px 10px;
    color: white;
    display: flex;
    justify-content: center;
    border-radius: 4px;
    cursor: pointer;
    width: fit-content;
    font-size: 12px;

    &:hover{
        background: #404040;
    }
`;