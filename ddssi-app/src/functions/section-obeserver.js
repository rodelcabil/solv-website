import React from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch } from "react-redux";
import { setActiveNav } from "../redux/activeNavSlice";


const SectionObserver = (tab) => {
    const dispatch = useDispatch();


    const { ref, inView } = useInView({ triggerOnce: false });
  
    useEffect(() => {
      if (inView) {
        dispatch(setActiveNav(tab));
      }
      
    }, [inView, tab]);
  
    return { ref };
  };
  
  export default SectionObserver;