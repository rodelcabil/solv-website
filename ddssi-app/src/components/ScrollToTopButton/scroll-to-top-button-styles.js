import styled from 'styled-components'

export const Button = styled.button`
    
    position: fixed;
    bottom: 0; 
    right: 0;
    z-index: 1000000;
    margin-bottom: 70px;
    margin-right: 70px;
    height: 50px;
    width: 50px;
    background: var(--bg-primary);
    color: var(--bg-light);
    border-radius: 100%;
    display:  ${({ scrolled }) => (scrolled ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.5);

    @media screen and (max-width: 800px){
        margin-bottom: 10px;
        margin-right: 10px;
    }
`;