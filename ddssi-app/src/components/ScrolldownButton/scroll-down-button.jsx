import React from 'react'
import { Anchor } from './scroll-down-button-styles'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const ScrollDownButton = ({href}) => {
  return (
    <Anchor href={href}>
        <p className='text-1xl text-white'>Read more</p>
        <MdOutlineKeyboardArrowDown color='#fff'/>
    </Anchor>
  )
}

export default ScrollDownButton