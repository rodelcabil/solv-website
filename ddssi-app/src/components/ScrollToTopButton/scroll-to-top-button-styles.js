import styled from 'styled-components'

export const Button = styled.button`
    
    position: fixed;
    bottom: 0; 
    right: 0;
    z-index: 999;
    margin-bottom: 20px;
    margin-right: 20px;
    height: 50px;
    width: 50px;
    background: var(--bg-primary);
    color: var(--bg-light);
    border-radius: 100%;
    display:  ${({ scrolled }) => (scrolled ? 'flex' : 'none')};
    justify-content: center;
    align-items: center;
    box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
`;