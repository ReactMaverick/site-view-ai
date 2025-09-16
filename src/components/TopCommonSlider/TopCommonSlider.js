"use client";

import React from 'react';
import { Box, Typography, Container } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';
import { sliderStyles } from './MUIStyle';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { CARD, CARD1, CARD2, CARD3 } from '@/values/Constants/ImageConstants';

const sliderData = [
    {
        id: 1,
        image: CARD,
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7344395216302280704"
    },
    {
        id: 2,
        title: "Next-Gen",
        image: CARD1,
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7360638701556711424"
    },
    {
        id: 3,
        title: "Best Tech Innovation - NICMAR ICCRIP 2025",
        image: CARD2,
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7365765987486380033"
    },
    {
        id: 4,
        title: "Best Construction Tech - Reality NXT 2025",
        image: CARD3,
        link: "https://www.linkedin.com/posts/sitepace_ictdd2025-realtynxt-sitepace-activity-7331003768265719808-mV7p?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFsnfZ8BQDG49S-JQeZkfJjyRnQFlZqsreM"
    },
    {
        id: 1,
        image: CARD,
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7344395216302280704"
    },
    {
        id: 2,
        title: "Next-Gen",
        image: CARD1,
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7360638701556711424"
    },
    {
        id: 3,
        title: "Best Tech Innovation - NICMAR ICCRIP 2025",
        image: CARD2,
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7365765987486380033"
    },
    {
        id: 4,
        title: "Best Construction Tech - Reality NXT 2025",
        image: CARD3,
        link: "https://www.linkedin.com/posts/sitepace_ictdd2025-realtynxt-sitepace-activity-7331003768265719808-mV7p?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFsnfZ8BQDG49S-JQeZkfJjyRnQFlZqsreM"
    },

];

const TopCommonSlider = () => {
    return (
        <Box id="top-common-slider" sx={sliderStyles.sliderContainer}>
            <Container maxWidth="xxl">
                <Box sx={sliderStyles.swiperStyles}>
                    <Swiper
                        spaceBetween={10}
                        slidesPerView={3}
                        loop={true}
                        speed={4000}
                        modules={[Autoplay]}
                        autoplay={{
                            delay: 0,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 15,
                            },
                            1366: {
                                slidesPerView: 4,
                                spaceBetween: 20,
                            },
                        }}
                    >
                        {sliderData.map((slide, index) => (
                            <SwiperSlide key={`${slide.id}-${index}`}>
                                <Box
                                    sx={{
                                        ...sliderStyles.imageContainer,
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => window.open(slide.link, '_blank')}
                                >
                                    <Image
                                        src={slide.image}
                                        alt={slide.title}
                                        fill
                                        style={{ objectFit: 'contain' }}
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                        }}
                                    />
                                </Box>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </Box>
            </Container>
        </Box>
    );
};

export default TopCommonSlider