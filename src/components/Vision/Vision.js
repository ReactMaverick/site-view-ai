"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import React, { useState, useEffect, useRef } from "react";
import { VISION } from "@/values/Constants/ImageConstants";
import SiteViewSVG from "../SiteViewSVG/SiteViewSVG";
import OurTechSVGBG1 from "../OurTechSVGBG1/OurTechSVGBG1";


export default function Vision() {

  return (
    <Box sx={MUIStyle.VisionMain}>
      <Box sx={MUIStyle.VisionSVGContainer}>
        {/* <SiteViewSVG
          fillOpacity="0.05"
        /> */}
        {/* <OurTechSVGBG1 /> */}
      </Box>
      <Container maxWidth="xl">
        <Box sx={MUIStyle.VisionRow}>
          <Box sx={MUIStyle.VisionColLeft}>
            <Box sx={MUIStyle.VisionContent}>
              <Typography variant="h2" sx={MUIStyle.Heading}>
                Vision Meets Precision. Every Angle, Every Detail
              </Typography>
              <Typography component={"span"} sx={MUIStyle.smallTitle}>
                360° capture redefined for precision and effortless navigation
              </Typography>
              <Typography variant="body1" sx={MUIStyle.SubHeading}>
                Capture your site comprehensively using industry-standard 360° cameras, drones with permits, or our intuitive mobile app. Ensure no blind spots in your project’s visual documentation. </Typography>
              <Typography variant="body1" sx={MUIStyle.SubHeading}>
                Upload and organize your captured media effortlessly. Drag-and-drop functionality ensures seamless integration, providing centralized, easily accessible data for all your construction needs.</Typography>
              <Typography variant="body1" sx={MUIStyle.SubHeading}>
                Immerse yourself in your site remotely with interactive 360° navigation. Zoom, pan, and explore every detail without the hassle of on-site visits. </Typography>
            </Box>
          </Box>
          <Box sx={MUIStyle.VisionColRight}>
            <Box component={"img"} src={VISION} alt="Vision" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
}