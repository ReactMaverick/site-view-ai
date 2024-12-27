import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

// import required modules
import { EffectCards } from 'swiper/modules';

export default function ImageSlider({
    slideComponents = [],
    className = "image-slider-container",
}) {
    return (
        <>
            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
                className={className}
            >
                {slideComponents.map((slideComponent, index) => (
                    <SwiperSlide
                        key={index}
                    >
                        {slideComponent}
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
}
