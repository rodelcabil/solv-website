import styled from 'styled-components';


export const Divider = styled.div`
    
    width: 100%;
    overflow: hidden;
    line-height: 0;

    svg {
        position: relative;
        display: block;
        width: calc(123% + 1.3px);
        height: 129px;
    }

    .shape-fill {
        fill: var(--bg-primary);
    }

`;
