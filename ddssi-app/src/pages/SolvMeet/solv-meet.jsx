import React, { useState, useEffect } from 'react'
import { BodyContainer, CreateButton, CreateLink, MainContainer, TextInput } from './solv-meet-styles'
import OtherNavbar from '../../components/Navbar/OtherNav/other-nav'


const SolvMeet = () => {
    const [isDisabled, setDisabled] = useState(true);
    const [meetingName, setMeetingName] = useState("");
    const [displayName, setDisplayName] = useState("");

    useEffect(() => {
        handleDisabledButton();
    }, [meetingName,displayName,isDisabled])

    const handleMeetingNameInputChange = (event) => {
        if (event.target.value.trim() !== "") {
            setMeetingName(event.target.value);
            
        }
        else {
            setMeetingName("");
        }
    };

    const handleDisplayNameInputChange = (event) => {
        if (event.target.value.trim() !== "") {
            setDisplayName(event.target.value); 
        }
        else {
            setDisplayName("");
        }
    };

    const handleDisabledButton = () => {
        
        if (meetingName.trim() === "" || displayName.trim() === "") {
            setDisabled(true);
        }
        else {
            setDisabled(false);
        }
    }

    const handleCreateMeeting = () =>{
        setDisplayName("");
        setMeetingName("");
        setDisabled(true);
    }

    return (
        <>
            <OtherNavbar hasBanner={false}/>
            <MainContainer>
                <BodyContainer>
                    <div className="meet-container flex flex-col gap-5">
                        <p className="text-2xl text-center mb-6">Start Meeting</p>
                        <div className='flex flex-col'>
                            <label className='text-sm text-[#7a7a7a] mb-1'>Meeting Name</label>
                            <TextInput placeholder="Enter Meeting Name" type="text" name="meetingName" value={meetingName} onChange={handleMeetingNameInputChange} />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-sm text-[#7a7a7a] mb-1'>Display Name</label>
                            <TextInput placeholder="Enter Display Name" type="text" name="meetingName" value={displayName} onChange={handleDisplayNameInputChange} />
                        </div>
                        <span className='text-sm text-[#343434]'>By clicking "Start", you agree to our <a href="/privacy-policy" target="_blank" className='text-[#1595FF] hover:underline '>Privacy Policy</a> and <a href="/terms-of-use" target="_blank" className='text-[#1595FF] hover:underline'>Terms of Use</a>  </span>
                        {isDisabled ? <CreateButton disabled={isDisabled}>Start</CreateButton> : <CreateLink to={{ pathname: `/solv-meet/meeting/${meetingName}`, state: { roomName: meetingName, displayName: displayName } }} onClick={handleCreateMeeting}>Start</CreateLink>}
                    </div>
                </BodyContainer>
                <span className='flex w-full text-[#7a7a7a] justify-center text-center py-5'>© Copyright 2023 | Digital Doors Software Solutions Inc. | All rights reserved.</span>
            </MainContainer>
            
        </>

    )
}

export default SolvMeet