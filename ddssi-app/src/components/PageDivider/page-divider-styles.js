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
        fill: linear-gradient(56deg, rgba(255,255,255,0.006039915966386533) 0%, rgba(153,209,255,1) 57%, rgba(21,149,255,1) 100%);
    }

`;
