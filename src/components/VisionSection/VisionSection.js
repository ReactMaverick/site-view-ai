"use client";
import { Box, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import React, { } from "react";
import { IMAGE2, VISIONBASED } from "@/values/Constants/ImageConstants";
import OurTechSVGBG1 from "../OurTechSVGBG1/OurTechSVGBG1";

export default function VisionSection({
  title = "Vision based Indoor Positioning System",
  showSubtitle = true,
  subtitle = "Visual - IPS for seamless navigation",
  description = "Explore your virtual site effortlessly. SitePace.ai’s innovative platform utilizes Visual Indoor Positioning System (Visual-IPS) technology and advanced tools for a seamless, automated virtual tour experience\n\nVisual-IPS works like a robot mapping its surroundings. It enables SitePace.ai to capture 360° panoramic views, offering complete, detailed visual representations of your construction site’s progress.\n\nWith Visual-IPS, SitePace.ai navigates autonomously along pre-defined paths and builds dynamic 3D site models over time, revealing progress and identifying potential issues.",
  image = VISIONBASED,
  orientation = "image-left",
}) {
  return (
    <Box sx={MUIStyle.VisionMain}>
      {/* <Box sx={MUIStyle.VisionSVGContainer}>
        <SiteViewSVG
                fillOpacity="0.05"
              />
        <OurTechSVGBG1
          svgStyle={{
            transform: 'rotateY(180deg)',
            transformOrigin: '45vw 50%'
          }}
        />
      </Box> */}
      <Container maxWidth="xl">
        <Box sx={MUIStyle.VisionRow(orientation)}>
          <Box sx={MUIStyle.VisionColRight}>
            <Box component={"img"} src={image} alt="Vision" />
          </Box>
          <Box sx={MUIStyle.VisionColLeft}>
            <Box sx={MUIStyle.VisionContent}>
              <Typography variant="h2" sx={MUIStyle.Heading}>
                {title}
              </Typography>
              {showSubtitle && (
                <Typography component={"span"} sx={MUIStyle.smallTitle}>
                  {subtitle}
                </Typography>
              )}
              {description.split("\n\n").map((item, index) => (
                <Typography key={index} variant="body1" sx={MUIStyle.SubHeading}>
                  {item}
                </Typography>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
