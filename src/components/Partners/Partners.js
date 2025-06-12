"use client";
import { Box, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import styles from "./Partners.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
// import SwiperCore, { Autoplay } from 'swiper/core';
// import required modules
import { Autoplay } from "swiper/modules";
import {
  PARTNERSLOGO1,
  PARTNERSLOGO2,
  PARTNERSLOGO3,
  PARTNERSLOGO4,
  PARTNERSLOGO5,
  PARTNERSLOGO6,
  PARTNERSLOGO7,
} from "@/values/Constants/ImageConstants";
import Link from "next/link";

// Install Swiper modules
// SwiperCore.use([Autoplay]);

export default function Partners() {
  const partnersLogos = [
    // Add your partners' logo URLs here
    { image: PARTNERSLOGO1, link: "https://www.iitb.ac.in/" },
    { image: PARTNERSLOGO2, link: "https://www.chitkara.edu.in/ciif/" },
    { image: PARTNERSLOGO3, link: "https://www.sptbi.com/" },
    { image: PARTNERSLOGO4, link: "https://brigadereap.com/" },
    { image: PARTNERSLOGO5, link: "https://marlvc.com/" },
    { image: PARTNERSLOGO6, link: "https://sineiitb.org/" },
    { image: PARTNERSLOGO1, link: "https://www.iitb.ac.in/" },
    { image: PARTNERSLOGO2, link: "https://www.chitkara.edu.in/ciif/" },
    { image: PARTNERSLOGO3, link: "https://www.sptbi.com/" },
    { image: PARTNERSLOGO4, link: "https://brigadereap.com/" },
    { image: PARTNERSLOGO5, link: "https://marlvc.com/" },
    { image: PARTNERSLOGO6, link: "https://sineiitb.org/" },
    { image: PARTNERSLOGO7, link: "https://sucseed-indovation.com/" },
    // more logos
  ];
  return (
    <Box sx={MUIStyle.PartnersMain}>
      <Container maxWidth="xl">
        <Box sx={MUIStyle.PartnersHeadingBoxOuter}>
          <Box sx={MUIStyle.PartnersHeadingBoxInner}>
            {/* <Typography variant="h4" sx={MUIStyle.SubHeading}>
              Supported By
            </Typography> */}
            <Typography variant="h2" sx={MUIStyle.Heading}>
              Powered by a Network of Global Investors and growth partners
            </Typography>
          </Box>
        </Box>
        <Box sx={MUIStyle.partnersLogoSec} className={"partnersLogoSec"}>
          <Swiper
            className={`${styles.logoSlider} partnersLogoSlider`}
            spaceBetween={0}
            slidesPerView={7}
            loop={true}
            speed={2000}
            // loopAdditionalSlides={7}
            modules={[Autoplay]}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            breakpoints={{
              200: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              320: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 7,
                spaceBetween: 50,
              },
            }}
          >
            {partnersLogos.map((logo, index) => (
              <SwiperSlide className={styles.logoSliderBox} key={index}>
                <Link href={logo.link} target="_blank">
                  <Box
                    component={"img"}
                    src={logo.image}
                    alt={`Partner ${index + 1}`}
                    sx={MUIStyle.partnersLogo}
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </Box>
      </Container>
    </Box>
  );
}
