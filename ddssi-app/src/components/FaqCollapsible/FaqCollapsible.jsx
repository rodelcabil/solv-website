import React, { useState } from 'react'
import { FAQCollapsibleContainer } from './faqCollapsible-elements'
import { MdAdd } from 'react-icons/md'
import { HiMinus } from 'react-icons/hi'

const FaqCollapsible = ({ question, answer }) => {

    const [isClick, setIsClick] = useState(false);

    const clickFunction = () =>{
        setIsClick(!isClick);
    }


    return (
        <FAQCollapsibleContainer click={isClick}>
            <div className='header' onClick={clickFunction}>
                <h5 className="font-normal text-[#343434]">{question}</h5>
                <div className='addIcon'>
                    {isClick ? <HiMinus color='white' size={20} onClick={clickFunction} /> : <MdAdd color='white' size={20} onClick={clickFunction} /> }
                </div>
                
            </div>
           
            <div className='answerContainer'>
                <p className="text-[#7a7a7a]" dangerouslySetInnerHTML={{ __html: answer }} />
            </div>

        </FAQCollapsibleContainer>
    )
}

export default FaqCollapsible