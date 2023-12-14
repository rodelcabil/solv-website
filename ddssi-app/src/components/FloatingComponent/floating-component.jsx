import React from 'react'
import { MainContainer } from './flaoting-component-styles'
import FloatingImg from '../../assets/solv-comms-float.png'
import { IoClose } from "react-icons/io5";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';


const FloatingComponent = () => {

    const [visible, setVisible] = useState(true);

    useEffect(()=>{
        console.log("visible", visible)
    },[visible]);

    const handleVisibility = () => {
        setVisible(!visible);
    }

    

    return (
        <MainContainer visible={visible} className='shadow-lg'>
            <div className='flex justify-end'>
                <IoClose className=' cursor-pointer absolute' size="25" onClick={handleVisibility} />
            </div>
            <NavLink exact to="/solv-meet">
                <img src={FloatingImg} width="200" />
            </NavLink>
        </MainContainer>
    )
}

export default FloatingComponent