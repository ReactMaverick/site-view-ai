"use client";
import { Box, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import WorkflowBox from "../WorkflowBox/WorkflowBox";
import { backgroundColors, workflowContents } from "./WorkflowContents";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Autoplay } from "swiper/modules";

export default function Workflow() {
  return (
    <Box className="workflowSec" sx={MUIStyle.workflowMain}>
      <Container maxWidth="xl">
        <Box sx={MUIStyle.workflowHeadingBoxOuter}>
          <Box sx={MUIStyle.workflowHeadingBoxInner}>
            <Typography variant="h4" sx={MUIStyle.SubHeading}>
              Transfer your workflow
            </Typography>
            <Typography variant="h2" sx={MUIStyle.Heading}>
              Speed, Precision, and Savings at Every Step
            </Typography>
          </Box>
        </Box>
      </Container>
      <Box sx={MUIStyle.SliderOuter} className="sliderOuter">
        <Swiper
          className={`partnersLogoSlider`}
          spaceBetween={20}
          slidesPerView={5}
          loop={true}
          speed={2000}
          modules={[Autoplay]}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            200: { slidesPerView: 1, spaceBetween: 10 },
            640: { slidesPerView: 2, spaceBetween: 20 },
            1024: { slidesPerView: 5, spaceBetween: 30 },
          }}
        >
          {workflowContents.map((workflow, index) => (
            <SwiperSlide key={index}>
              <WorkflowBox
                backgroundColor={
                  backgroundColors[index % backgroundColors.length]
                }
                title={workflow.title}
                content={workflow.content}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Box>
  );
}
