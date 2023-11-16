import styled from "styled-components"
import bg from '../../../../assets/contact.jpg';

export const MainContainer = styled.div`
    
    background: var(--bg-light);
    position: relative;
`;

export const BodyContainer = styled.div`
    
    display: flex;
    max-width: 1500px;
    margin: auto;
    align-items: stretch; 
    justify-content: space-between;
    height: 100%;

    .left-container{
        
        justify-content: center;
        padding: 120px 60px;
        background: var(--bg-light);
        background-image: linear-gradient(rgba(0, 0, 0, 0.6),
                        rgba(0, 0, 0, 0.7)), url(${bg});
        background-size: cover;
    }

    .right-container{
        padding: 120px 60px;
        min-width: 40%;
    }
`;


export const SubmitButton = styled.div`
    
    background: var(--bg-dark);
    padding: 8px 20px;
    color: white;
    display: flex;
    justify-content: center;
    border-radius: 4px;
    cursor: pointer;

    &:hover{
        background: #404040;
    }
`;