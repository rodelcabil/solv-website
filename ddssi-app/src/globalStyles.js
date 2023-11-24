import styled, { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root{
        --bg-primary: #1595FF;
        --bg-light-blur: rgba(255,255,255,0.95);
        --bg-light: #fff;
        --bg-dark: #343434;
        --text-primary: #343434;
        --text-secondary: #7A7A7A;
    }

    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        scroll-behavior: smooth;
        font-family: 'Poppins', sans-serif;
    }

    a{
        padding: 0;
        margin: 0;
    }

    &::-webkit-scrollbar {
            width: 8px;            
    }

    &::-webkit-scrollbar-track {
         background: #fff;
       
                
    }

    &::-webkit-scrollbar-thumb {
    background-color: #C4C4C4;    
    border-radius: 20px;     
    }

    &::-webkit-scrollbar-thumb:hover {
            background-color: #295074;    
        }
`;


export const Container = styled.div`
z-index: 1;
width: 100%;
max-width: 2100px;
margin-right: auto; 
margin-left: 0;


@media screen and (max-width: 991px){
    padding-left: 0;
    padding-right: 0;
}
`;

export const responsive = () => css`
  @media screen and (max-width: 910px) {
    padding: 100px 30px;
  }
`;
export default GlobalStyle