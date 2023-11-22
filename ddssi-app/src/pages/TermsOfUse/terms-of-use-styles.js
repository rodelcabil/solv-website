import styled from "styled-components"

export const MainContainer = styled.div`
    
    padding: 60px;
    background: var(--bg-light);

    .numbered-list{
        list-style-type: decimal;
        list-style-position: inside;
    }

    .numbered-list{
        list-style-type: decimal;
        list-style-position: inside;
    }
    .letter-list{
        list-style-type: lower-alpha;
        list-style-position: inside;
    }
    .roman-list{
        list-style-type: lower-roman;
        list-style-position: inside;
    }
    .cirlce-list{
        list-style-type: circle;
        list-style-position: inside;
    }
    
    p{
        overflow-wrap: break-word;
    }

    @media screen and (max-width: 910px){
        padding: 30px;
    }
`;