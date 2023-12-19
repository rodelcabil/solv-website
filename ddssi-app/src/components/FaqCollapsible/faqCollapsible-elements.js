import styled from 'styled-components';

export const FAQCollapsibleContainer = styled.div`
    //background: #F2F2F2;
    transition: all 0.5s ease !important;
    padding: 0;
    align-items: stretch;
    //border-radius: 5px;
    display: flex;
    width: 1500px;
    margin: auto;
    flex-direction: column;
  //  margin-bottom: 10px;
    border-top: 1px solid #dadce0;
   

    .header{
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        border-bottom: ${({ click, theme }) => (click ? theme.borderBottom : 'none')};
        padding: 15px 0;
        cursor: pointer;
        gap: 15px;

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
        transition: all 0.5s ease;

        p{
            font-size: 16px;
            text-align: left;
            color: ${({ theme }) => theme.color} !important;
           
        }

        
    }

    // &:hover{
    //     background: #e2e2e2;
    // }


    @media screen and (max-width: 1400px){
       width: 100%;
    }



`;