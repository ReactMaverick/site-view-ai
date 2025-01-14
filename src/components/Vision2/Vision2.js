"use client";
import { Box, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import React, { } from "react";
import { IMAGE2 } from "@/values/Constants/ImageConstants";
import OurTechSVGBG1 from "../OurTechSVGBG1/OurTechSVGBG1";

export default function Vision2() {
  return (
    <Box sx={MUIStyle.VisionMain}>
      <Box sx={MUIStyle.VisionSVGContainer}>
        {/* <SiteViewSVG
                fillOpacity="0.05"
              /> */}
        {/* <OurTechSVGBG1
          svgStyle={{
            transform: 'rotateY(180deg)',
            transformOrigin: '45vw 50%'
          }}
        /> */}
      </Box>
      <Container maxWidth="xl">
        <Box sx={MUIStyle.VisionRow}>
          <Box sx={MUIStyle.VisionColRight}>
            <Box component={"img"} src={IMAGE2} alt="Vision" />
          </Box>
          <Box sx={MUIStyle.VisionColLeft}>
            <Box sx={MUIStyle.VisionContent}>
              <Typography variant="h2" sx={MUIStyle.Heading}>
                Vision based Indoor Positioning System
              </Typography>
              <Typography component={"span"} sx={MUIStyle.smallTitle}>
                Visual - IPS for seamless navigation
              </Typography>
              <Typography variant="body1" sx={MUIStyle.SubHeading}>
                Explore your virtual site effortlessly. SitePace.ai’s innovative platform utilizes Visual Indoor Positioning System (Visual-IPS) technology and advanced tools for a seamless, automated virtual tour experience{" "}
              </Typography>
              <Typography variant="body1" sx={MUIStyle.SubHeading}>
                Visual-IPS works like a robot mapping its surroundings. It enables SitePace.ai to capture 360° panoramic views, offering complete, detailed visual representations of your construction site’s progress.
              </Typography>
              <Typography variant="body1" sx={MUIStyle.SubHeading}>
                With Visual-IPS, SitePace.ai navigates autonomously along pre-defined paths and builds dynamic 3D site models over time, revealing progress and identifying potential issues.{" "}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
