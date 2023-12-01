import styled from 'styled-components'
import { responsive } from '../../../../globalStyles'

export const MainContainer = styled.div`

    padding: 60px;
    background: var(--bg-light);

    ${responsive}
`

export const BodyContainer = styled.div`

    margin: auto;
    max-width: 1500px;
    display: flex;
    align-items: center;
    flex-direction: column;
    

    .tab-container{
        display: flex;
        align-items: center;
        gap: 5px;
        width: 100%;
        justify-content: center;
        flex-wrap: wrap;

        .tab-button{
            border: none;
            padding: 8px 16px;
            color: var(--text-secondary);
            background-color: transparent;
            outline: none;
            cursor: pointer;
            font-size: 16px;
            font-weight: 500;
            text-transform: capitalize;
        
        }

        .tab-button.selected{
            border: none;
            padding: 8px 16px;
            color: #fff;
            background-color: var(--bg-primary);
            outline: none;
            cursor: pointer;
            font-size: 16px;
            font-weight: 500;
            text-transform: capitalize;
            border-radius: 5px;
        
            ${'' /* border-bottom: 2px solid  #2988b4; */}
        }
    }

    iframe{
        border: 1px solid #e2e2e2;
    }

    .video{
        @media screen and (max-width: 850px){
            width: 100%;
            height: 400px;
        }
    }

`