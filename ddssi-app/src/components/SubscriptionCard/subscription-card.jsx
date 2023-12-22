import React, { useEffect } from 'react'
import { AvailButton, CloseButton, ComingSoonButton, MainContainer } from './subscription-card-styles'
import { useState } from 'react'
import Discount from '../../assets/new-images/discount.png'
import FreeDownload from '../../assets/new-images/free-download-2.png'
import { Button, Modal } from 'antd';

const SubscriptionCard = ({ header, title, price, description, color, hasDiscount, isAvailable, isSolv24 }) => {

    const [click, setClicked] = useState(false);
    const [hover, serHover] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);


    useEffect(() => {

    }, [hover])

    const handleClick = () => {
        //setClicked(!click);
        showModal();
    }

    const handleMouseOver = () => {
        serHover(!hover);
    }

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    return (
        <MainContainer color={color} click={click}
        // onMouseEnter={handleMouseOver} onMouseLeave={handleMouseOver}
        >
            {hasDiscount === true && isAvailable == true ? <img src={Discount} id="discount" /> : <></>}
            <div className='card-header'>
                <p className='uppercase font-semibold'>{header}</p>
                <span className='uppercase font-semibold title text-center'>{title}</span>
                <div className='price-container'>
                    <span className='price'>{price}</span>
                </div>
                <div className="circle" />
            </div>
            <br /><br />
            <span className='description text-[#7a7a7a] text-sm'>{description}</span>
            <br />

            <div className='discount-container'>
                {
                    isAvailable ?
                        <>
                            {isSolv24 === true ?
                                <div className="accordion" >
                                    <div className="accordion-header flex flex-col items-center cursor-pointer gap-1" onClick={handleClick}>
                                        <img src={FreeDownload} width="200" />
                                        <span className='flex items-center text-sm gap-2'>Learn more</span>
                                        {/*{click ? <IoIosArrowUp /> : <IoIosArrowDown />}  */}

                                    </div>
                                    <Modal title="Free Download Details" centered={true} open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
                                        footer={
                                            <CloseButton href="http://192.168.230.35:8023/Registration" target="_blank">
                                                Download now
                                            </CloseButton>}>
                                        <div className='accordion-body text-[#7a7a7a] cursor-pointer'>
                                            <br />
                                            <p className='text-sm'>Experience the freedom to download and install our premium software completely free of charge no credit card or any upfronts payments required. </p><br />
                                            <p className='text-sm'>Take a full  30 days to explore its features and functionality at your own pace. We believe in the quality of our product, and your satisfaction is our priority.</p><br />
                                            <p className='text-sm'>Start paying only after 30 days, once your fully satisfied with the benefits and performance and here's the added flexibility; stop payment anytime within the 24-month installment if your needs change or you decide it's not the right fit for you. We believe in delivering execellence with the freedom to choose.</p><br />
                                            <p className='text-sm'>It's our way of insuring you have the confidence and convenience your deserve.</p><br />
                                        </div>
                                    </Modal>
                                </div>
                                :
                                <></>
                            }

                            {hasDiscount === true ? <span>Avail within <span className='font-semibold'>48 hours</span> and get a <span className='font-semibold'>20% discount!</span></span> : <></>}
                            <br />
                            <AvailButton href="http://192.168.230.35:8023/Registration" target="_blank" color={color} className='avail-button'>Avail now</AvailButton>

                        </>
                        :
                        <ComingSoonButton>Coming soon</ComingSoonButton>
                }
            </div>


        </MainContainer >
    )
}

export default SubscriptionCard