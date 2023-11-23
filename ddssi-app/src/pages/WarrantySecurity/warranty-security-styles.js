import styled from "styled-components"

export const MainContainer = styled.div`
    
    padding: 60px;
    background: var(--bg-light);


    li{
        margin-left: 20px;
        list-style-type: disc;
    }

    p{
        overflow-wrap: break-word;
    }

    @media screen and (max-width: 910px){
        padding: 10px;
    }

`;