import React, { useEffect, useState } from 'react'
import { Button } from './scroll-to-top-button-styles'
import ScrollToTop from '../../scrollToTop'
import { LuArrowUpToLine  } from "react-icons/lu";

const ScrollToTopButton = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
      window.onscroll = function () {
          if (window.scrollY > 600) {
              setScrolled(true);
          } else {
              setScrolled(false);
          }
      };
  }, []);

  const backToTop =() =>{
      window.scrollTo(0, 0);
  }

  return (
    <Button onClick={backToTop} scrolled={scrolled} ><LuArrowUpToLine  size="25" /></Button>
  )
}

export default ScrollToTopButton