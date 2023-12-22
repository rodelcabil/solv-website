import React, {useRef} from 'react'
import { useLocation, useHistory  } from 'react-router-dom';
import { JitsiMeeting } from '@jitsi/react-sdk';

const MeetingPage = () => {
    const { roomName, displayName } = useLocation().state;
    console.log(roomName, displayName)
    const history = useHistory();
    const apiRef = useRef();

    const handleClose =()=>{
        history.goBack();
    }

    const handleConferenceLeft = () =>{
        window.location.href = 'https://www.digitaldoorssoftware.com/solv-meet';
        //window.location.href = 'http://localhost:5173/solv-meet';
    }

    const handleApiReady = apiObj => {
        apiRef.current = apiObj;
        apiRef.current.on('videoConferenceLeft', handleConferenceLeft);
    };

    return (
        <JitsiMeeting
            //domain="meet.jit.si"
            domain="comms.pesoapp.ph"
            roomName={roomName}
            configOverwrite={{
                startWithAudioMuted: true,
                disableModeratorIndicator: true,
                startScreenSharing: true,
                enableEmailInStats: false
            }}
            interfaceConfigOverwrite={{
                DISABLE_JOIN_LEAVE_NOTIFICATIONS: true
            }}
            userInfo={{
                displayName: displayName 
            }}
            onApiReady = { externalApi => handleApiReady(externalApi) }
            onReadyToClose={handleClose}
            getIFrameRef={(iframeRef) => { iframeRef.style.height = '100vh'; }}
        />
    )
}

export default MeetingPage