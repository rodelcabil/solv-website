import React from 'react'
import { Anchor } from './scroll-down-button-styles'
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const ScrollDownButton = ({ href }) => {

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -60;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' });
  }

  return (
    <Anchor to={href} scroll={el => scrollWithOffset(el)}>
      <p className='text-1xl text-white'>Scroll for more details</p>
      <MdOutlineKeyboardArrowDown color='#fff' size="25" className='scroll-icon' />
    </Anchor>
  )
}

export default ScrollDownButton