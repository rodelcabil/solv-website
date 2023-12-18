import React from 'react'
import { MainContainer } from './flaoting-component-styles'
import FloatingImg from '../../assets/new-images/floating-img.png'
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
        <MainContainer visible={visible}>
            <div className='flex justify-center absolute top-0 right-0'>
                <IoClose className=' cursor-pointer absolute' size="25" onClick={handleVisibility} />
            </div>
            <NavLink exact to="/solv-meet">
                <img src={FloatingImg} width="200" />
            </NavLink>
        </MainContainer>
    )
}

export default FloatingComponent