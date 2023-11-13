import styled from 'styled-components';


export const MainContainer = styled.div`
    
    width: 400px;
    border-radius: 8px;
    padding: 30px;
    background: ${({ color }) => color};
    display: flex;
    flex-direction: column;
    
`;