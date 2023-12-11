import styled from "styled-components";

export const MainContainer = styled.div`

    position: relative;
    max-width: 900px;

    #video1{
        position: relative;
        border-radius: 20px;
        z-index: 999;
    }

`

export const Overlay = styled.div`
    display: ${({ isPlaying }) => (isPlaying ? 'none' : 'flex' )};
    background: rgba(0,0,0,0.4);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    border-radius: 20px;
    z-index: 1000;
`

export const ControlButton = styled.button`

    background: var(--bg-primary);
    padding: 16px;  
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    z-index: 1001;
`

export const Controls = styled.div`
    display: flex;
    background: rgb(255,255,255);
    background: linear-gradient(180deg, rgba(255,255,255,0.006039915966386533) 0%, rgba(0,0,0,1) 100%);
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 50px;
    justify-content: flex-end;
    align-items: center;    
    padding: 0px 20px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
    z-index: 999;

    .full-screen-icon{
        height: 40px;
        width: 40px;
        font-size: 10px;
        padding: 10px;
        border-radius: 100%;
        cursor: pointer;

        &:hover{
            background: rgba(255,255,255, 0.2);
        }
       
    }
`