import styled from 'styled-components';

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 15px;
    border: ${({ color }) => '1px solid' + color};
    border-radius: 16px;
    cursor: pointer;

    .card-header{
        background:  ${({ color }) => color};
        padding: 10px;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        align-items: center;
        color: var(--text-light);
        height: 100px;
        position: relative;


        p{
            font-size: 12px;
        }
        .title{
            font-size: 18px;
        }

        .circle{
            position: absolute;
            top: 0;
            left: 0;
            height: 50%;
            width: 50px;
            background: rgba(255,255,255, 0.3);
            border-bottom-right-radius: 100%;
            z-index: 10;
            border-top-left-radius: 8px;
        }
    }

    .price-container{
        position: absolute;
        bottom: -20%;
        padding: 10px;
        background: var(--bg-light);
        color: ${({ color }) => color};
        border-radius: 20px;
        border: ${({ color }) => '1px solid' + color};
    }


    .accordion{

        .accordion-header{
            color: ${({ color }) => color};
            position: relative;
            padding: 10px 0px;
        }

        .accordion-body{
            position: relative;
            height: ${({ click }) => (click ? '100%' : '0')};
            padding: ${({ click }) => (click ? '15px 0' : '0')};
            overflow: hidden;
            
        }
    }
    
    &:hover {
        background:  ${({ color }) => color};
    }

    &:hover .descritpion{
        color:  white;
    }

    &:hover .card-header{
        background:  white;

        p, .title{
            color: var(--text-primary);
        }
    }

    &:hover .card-header .price-container{
        background:  ${({ color }) => color};
        color: white;
        border: 3px solid white;
    }


    
    
`;