import React from 'react'
import Product from "./Product"
import "./slideProduct.css"

import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Autoplay ,Navigation } from 'swiper/modules';

const SlideProducts = ({title,data}) => { 
    // console.log(data);
    
    return (
        <div>
            <div className="slide-products">
                <div className="container">
                    <div className="top-slide">
                        <h2>{title}</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse, quisquam.</p>
                    </div>
                    
                    <Swiper 
                        loop={true} 
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }} 
                        slidesPerView={5}
                        navigation={true} 
                        modules={[Autoplay , Navigation]}
                        className="mySwiper"
                    >

                        {data.map((item, index) => {
                            return (
                                <SwiperSlide><Product key={index} item={item}/></SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default SlideProducts