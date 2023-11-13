import styled from 'styled-components';


export const Divider = styled.div`
    
    width: 100%;
    overflow: hidden;
    line-height: 0;

    svg {
        position: relative;
        display: block;
        width: calc(108% + 1.3px);
        height: 118px;
    }

    .shape-fill {
        fill: var(--bg-primary);
    }

`;
