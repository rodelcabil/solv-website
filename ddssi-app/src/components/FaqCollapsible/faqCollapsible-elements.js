import styled from 'styled-components';

export const FAQCollapsibleContainer = styled.div`
    background: #F2F2F2;
    transition: all 0.5s ease !important;
    padding: 0 20px;
    border: ${({ theme }) => theme.border};
   
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    display: flex;
    max-width: 1500px;
    margin: auto;
    flex-direction: column;
    margin-bottom: 10px;

    .header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        border-bottom: ${({ click, theme }) => (click ? theme.borderBottom : 'none')};
        padding: 15px 0;
        cursor: pointer;

        h5{
            margin: 0;
            color: ${({ click, theme }) => (click ? '#2988B4' : theme.color)};
            text-align: left;

             @media screen and (max-width: 600px){
                font-size: 18px;
            }
        }

        .addIcon{
            display: flex;
            align-items: center;
            ${'' /* background: #295074; */}
            background: var(--bg-primary);
            padding: 10px;
            border-radius: 100%;
            cursor: pointer;
        }
    }

    .answerContainer{
       
        position: relative;
        height: ${({ click }) => (click ? '100%' : '0')};
        padding: ${({ click }) => (click ? '15px 0' : '0')};
        overflow: hidden;
        transition: 0.5s;

        p{
            font-size: 16px;
            text-align: left;
            color: ${({ theme }) => theme.color} !important;
           
        }

        @media (min-width: 751px) and (max-width: 1260px){
            height: ${({ click }) => (click ? '90px' : '0')};
        }
        @media (min-width: 471px) and (max-width: 750px){
            height: ${({ click }) => (click ? '120px' : '0')};
        }
        @media screen and (max-width: 470px){
            height: ${({ click }) => (click ? '170px' : '0')};
           
        }

    }



    @media screen and (max-width: 1400px){
       width: 100%;
    }



`;