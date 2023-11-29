import styled from 'styled-components';


export const MainContainer = styled.div`
    
    width: 400px;
    border-radius: 16px;
    background: var(--bg-light);
    filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.25));
    display: flex;
    flex-direction: column;
    flex: 1;
    position: relative;
    margin-top: 130px;
    padding: 30px;

    .img-banner{
        border-radius: 8px;
        position: absolute;
        top: -25%;
        display: flex;
        height: 200px;
        width: 340px;
        min-height: 200px;
        // border-top-left-radius: 16px;
        // border-top-right-radius: 16px;

        @media screen and (max-width: 500px){
            position: static;
            margin-top: -100px;

            
        }
    }

    

    @media screen and (max-width: 500px){
        width: 100%;

        .service-title{
            font-size: 16px;
        }
        .service-description{
            font-size: 14px;
            line-height: 1.5;
        }
        .service-button{
            font-size: 14px;
            padding: 6px 10px;
        }

        .details-div{
            margin-top: 30px;
        }
    }
`;

export const Title = styled.span`
    position: relative;
    padding-left: 8px;
    &::after{
        content: attr(data-width);;
        position: absolute;
        
        top: 3px;
        bottom: -2%;
        left: -1%;
        z-index: -1;
        height: 20px;
        width: 5px;
        display: block;
        background: ${({ color }) => color};
        
        
    }
`;
