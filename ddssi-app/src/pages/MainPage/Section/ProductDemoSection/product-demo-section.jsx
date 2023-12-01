import React, { useState, useEffect } from 'react';
import { MainContainer, BodyContainer } from './product-demo-section-styles'

const ProductDemoDection = () => {

    const [name, setName] = useState("Sales and Inventory");
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false);

    const productList = [
        {
            "name": "Sales and Inventory",
            "videoLink": [
                "https://www.youtube.com/embed/fBGbzeAMqvg",
            ]
        },
        {
            "name": "HR Solutions",
            "videoLink": [
                "https://www.youtube.com/embed/fBGbzeAMqvg",
                "https://www.youtube.com/embed/fBGbzeAMqvg",
            ]
        },
        {
            "name": "Accounting",
            "videoLink": [
                "https://www.youtube.com/embed/8JW6qzPCkE8?list=RDEQxz6zL9RFI",
                "https://www.youtube.com/embed/fBGbzeAMqvg",
                "https://www.youtube.com/embed/fBGbzeAMqvg"
            ]
        },
    ]

    useEffect(() => {
        let productVideos = productList.filter(product => product.name === name);
        setVideos(productVideos[0]?.videoLink);

    }, [name, loading])


    const onFilter = (key) => {
        setName(key);
        let productVideos = productList.filter(product => product.name === name);
        setVideos(productVideos[0]?.videoLink);
    };



    return (
        <MainContainer id="product-demo">
            <div className='flex flex-col items-center justify-center'>
                <span className='text-4xl text-[#343434] font-normal text-center mb-2'>Our Product Demo</span>
                <span className='text-1xl text-[#7A7A7A] font-normal text-center max-w-3xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</span>
            </div>
            <br /><br />
            <BodyContainer>
                <div className='tab-container'>
                    {
                        productList.map((item, key) => {
                            return <button key={key} className={item.name === name ? 'tab-button selected' : 'tab-button'} onClick={() => onFilter(item.name)}>{item.name}</button>
                        })
                    }
                </div>
                <br /><br /><br />
                <div className="tab-body flex flex-col w-full items-center justify-center gap-4">
                    {
                        videos.map((item, key) => {
                            return <iframe key={key} className='video flex w-[800px] rounded' height="600" src={item} title="Test" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen={true}></iframe>
                        })
                    }
                </div>
            </BodyContainer>
        </MainContainer>
    )
}

export default ProductDemoDection