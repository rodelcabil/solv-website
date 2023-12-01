import React from 'react'
import { useLocation } from 'react-router-dom';
import { JitsiMeeting } from '@jitsi/react-sdk';

const MeetingPage = () => {
    const { roomName, displayName } = useLocation().state;
    console.log("roomName",roomName, "displayName",displayName);

    return (
        <JitsiMeeting
            //domain="meet.jit.si"
            //domain="comms.pesoapp.ph"
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
                displayName: { displayName }
            }}
            onApiReady={(externalApi) => {
                // here you can attach custom event listeners to the Jitsi Meet External API
                // you can also store it locally to execute commands
            }}
            getIFrameRef={(iframeRef) => { iframeRef.style.height = '100vh'; }}
        />
    )
}

export default MeetingPage