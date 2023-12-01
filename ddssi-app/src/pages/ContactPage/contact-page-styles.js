import styled from "styled-components"
import bg from '../../assets/contact.jpg';

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
        padding: 60px;
        min-width: 40%;
    }

    @media screen and (max-width: 600px){
        flex-direction: column;

        .left-container{
            padding: 100px 30px 100px 30px;
        }
        
        .right-container{
            padding: 30px;
        }

        .left-header{
            font-size: 36px;
            line-height: 40px;
            text-align: center;
        }
        
        .left-description{
            font-size: 14px;
            text-align: center;
        }
        
    }

    @media screen and (max-width: 910px){
        flex-direction: column;

        .left-header{
            text-align: center;
        }
        
        .left-description{
            text-align: center;
        }

        .left-social-media-container{
            justify-content: center;
        }
    }
`;


export const SubmitButton = styled.button`
    
    background: var(--bg-dark);
    padding: 8px 20px;
    color: white;
    display: flex;
    justify-content: center;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;

    &:hover{
        background: #404040;
    }
`;


export const TextInput = styled.input`
    width: 100%;
    padding: 6px 8px;
    border: ${({ hasError, theme }) => (hasError === undefined ? 'none' : "2px solid red")};
    border-radius: 5px;
    background: var(--bg-light);
    color: ${({ theme }) => theme.color} !important;
    transition: ${({ theme }) => theme.transition} !important;
    font-size: 14px;

    &:focus{
        
        box-shadow: ${({ hasError }) => (hasError === undefined ? '0 0 0 2px rgba(24, 144, 255, .2)' : '0 0 0 2px rgba(255, 77, 79, .2)')};
        outline: none;
    }
`;

export const TextAreaMessage = styled.textarea`
        width: 100%;
        padding: 12px 8px;
        border: ${({ messageHasError, theme }) => (messageHasError === undefined ? 'none' : "2px solid #990000")};
        border-radius: 5px;
        resize: none;
        height: 150px;
        background: var(--bg-light);
        color: ${({ theme }) => theme.color} !important;
        transition: ${({ theme }) => theme.transition} !important;
        font-size: 14px;
        
        &:focus{
            box-shadow: ${({ messageHasError }) => (messageHasError === undefined ? '0 0 0 2px rgba(24, 144, 255, .2)' : '0 0 0 2px rgba(255, 77, 79, .2)')} ;
            outline: none;
        }

`;