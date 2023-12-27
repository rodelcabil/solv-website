import React, { useState, useEffect } from 'react';
import { MainContainer, BodyContainer } from './product-demo-section-styles'

import VideoComponent from '../../../../components/VideoComponent/video-component';
import SolvCommsVideo from '../../../../assets/videos/solv-comms.mp4'
import SolvAccountingVideo from '../../../../assets/videos/solv-accounting.mp4'
import HRSolutionVideo from '../../../../assets/videos/hr-solutions.mp4'
import SalesAndInventoryVideo from '../../../../assets/videos/sales-and-inventory.mp4'
import SectionObserver from '../../../../functions/section-obeserver';

const ProductDemoDection = () => {

    const { ref } = SectionObserver("product-demo");
    const [name, setName] = useState("Sales and Inventory");
    const [product, setProduct] = useState([]);

    const productList = [
        {
            "name": "Sales and Inventory",
            "videoLink": SalesAndInventoryVideo,
            "description": "Sales and inventory system perfect for businesses with one or two stores with option to expand and scale in the future."
        },
        {
            "name": "HR Solutions",
            "videoLink": HRSolutionVideo,
            "description": "End to end software solution for the Human Resources Department designed to improve delivery of service, efficiency and productivity."
        },
        {
            "name": "SOLV Accounting",
            "videoLink": SolvAccountingVideo,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        {
            "name": "SOLV Comms",
            "videoLink": SolvCommsVideo,
            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
    ]

    useEffect(() => {

        let filteredProduct = productList.filter(product => product.name === name);
        setProduct(filteredProduct);

      

    }, [name])



    const onFilter = (key) => {
        setName(key);
        let filteredProduct = productList.filter(product => product.name === key);
        setProduct(filteredProduct);
    };




    return (
        <MainContainer ref={ref} id="product-demo">
            <div className='flex flex-col items-center justify-center'>
                <span className='text-4xl text-[#343434] font-normal text-center mb-2'>Our Product Demo</span>
                <span className='text-1xl text-[#7A7A7A] font-normal text-center max-w-3xl'>Here's the walkthrough that showcases some of the features, functionality, and benefits of our products. </span>
            </div>
            <br /><br />
            <BodyContainer>
                <div className='tab-container'>
                    {
                        productList.map((item, key) => {
                            return <button key={key} className={item.name === name ? 'tab-button selected' : 'tab-button'} onClick={() => item.name === name ? "" : onFilter(item.name)}>{item.name}</button>
                        })
                    }
                </div>
                <br /><br />
                {/*<div className="tab-body flex flex-col max-w-[500px] text-center items-center justify-center gap-4">
                    {
                        product.map((item, key)     => {
                            return <span key={key} className='text-[#7a7a7a]'>{item.description}</span>
                        })
                    }
                </div> */}
                <br />
                <div className="tab-body flex flex-col w-full items-center justify-center gap-4">
                    {
                        product.map((item, key) => {
                            return <VideoComponent key={key} width="900" videoSrc={item.videoLink} videoKey={key} />
                        })
                    }
                </div>
            </BodyContainer>
        </MainContainer>
    )
}

export default ProductDemoDection