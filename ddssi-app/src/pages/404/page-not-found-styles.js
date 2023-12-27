import styled from 'styled-components'

export const MainContainer = styled.div`

    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 30px;

`

export const BackButton = styled.div`
    padding: 8px 16px;
    border-radius: 20px;
    background: var(--bg-primary);
    display: flex;
    align-items: center;
    color: var(--text-light);
    cursor: pointer;
`