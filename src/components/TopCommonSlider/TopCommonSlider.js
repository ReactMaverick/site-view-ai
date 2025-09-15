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
        title: "Next-Gen Construction Startup - BigShift 2025",
        description: "Showcased as a rising force shaping construction's future.",
        image: CARD,
        award: "Recognized Startup - Construction Technology BigShift 2025"
    },
    {
        id: 2,
        title: "Best Tech Innovation - NICMAR ICCRIP 2025",
        description: "Awarded for groundbreaking AI-driven site monitoring.",
        image: CARD1,
        award: "Best Tech Innovation Award"
    },
    {
        id: 3,
        title: "Top 10 Construction Tech Startups - TechReview 2024",
        description: "Honored among the most innovative startups transforming construction.",
        image: CARD2,
        award: "Top 10 Construction Tech Startups - TechReview 2024"
    },
    {
        id: 4,
        title: "Innovation in Construction Award - BuildTech 2024",
        description: "Celebrated for pioneering advancements in construction technology.",
        image: CARD3,
        award: "Innovation in Construction Award - BuildTech 2024"
    },
    {
        id: 1,
        title: "Next-Gen Construction Startup - BigShift 2025",
        description: "Showcased as a rising force shaping construction's future.",
        image: CARD,
        award: "Recognized Startup - Construction Technology BigShift 2025"
    },
    {
        id: 2,
        title: "Best Tech Innovation - NICMAR ICCRIP 2025",
        description: "Awarded for groundbreaking AI-driven site monitoring.",
        image: CARD1,
        award: "Best Tech Innovation Award"
    },
    {
        id: 3,
        title: "Top 10 Construction Tech Startups - TechReview 2024",
        description: "Honored among the most innovative startups transforming construction.",
        image: CARD2,
        award: "Top 10 Construction Tech Startups - TechReview 2024"
    },
    {
        id: 4,
        title: "Innovation in Construction Award - BuildTech 2024",
        description: "Celebrated for pioneering advancements in construction technology.",
        image: CARD3,
        award: "Innovation in Construction Award - BuildTech 2024"
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
                                <Box sx={sliderStyles.imageContainer}>
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