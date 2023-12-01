import { Link } from 'react-router-dom';
import styled from 'styled-components'

export const MainContainer = styled.div`

    padding: 60px;
    background: var(--bg-light);
    height: 100vh;
    p{
        overflow-wrap: break-word;
    }

    @media screen and (max-width: 910px){
        padding: 10px;
    }

`

export const BodyContainer = styled.div`

    margin: auto;
    max-width: 1500px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;


    .meet-container{
        width: 350px;
    }

`

export const TextInput = styled.input`
    width: 100%;
    padding: 6px 8px;
    border: 1px solid #e2e2e2;
    border-radius: 5px;
    background: var(--bg-light);
    color: var(--text-primary);;
    font-size: 14px;

    &:focus{
        
        box-shadow: ${({ hasError }) => (hasError === undefined ? '0 0 0 2px rgba(21, 149, 255, .6)' : '0 0 0 2px rgba(255, 77, 79, .2)')};
        outline: none;
    }
`;

export const CreateLink = styled(Link)`
    
    background: #1595ff;
    padding: 8px 20px;
    color: white;
    display: flex;
    justify-content: center;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
    font-size: 14px;

    &:hover{
        background: #4dafff;
    }

    &:disabled{
        background: #66baff;
    }
`;

export const CreateButton = styled.button`
    
    background: #1595ff;
    padding: 8px 20px;
    color: white;
    display: flex;
    justify-content: center;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
    font-size: 14px;

    &:hover{
        background: #4dafff;
    }

    &:disabled{
        background: #66baff;
    }
`;