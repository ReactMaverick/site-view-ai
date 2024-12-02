"use client";
import { Box, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import React from "react";
import { IPHONE, MACBOOKPRO } from "@/values/Constants/ImageConstants";

export default function OnsiteSection() {
  return (
    <Box sx={MUIStyle.OnsiteSectionMain}>
      <Container maxWidth="xl">
        <Box sx={MUIStyle.OnsiteSectionHeadingBoxOuter}>
          <Box sx={MUIStyle.OnsiteSectionHeadingBoxInner}>
            <Typography variant="h4" sx={MUIStyle.SubHeading}>
              From Field to Office, Simplified
            </Typography>
            <Typography variant="h2" sx={MUIStyle.Heading}>
              Connecting On-Site Action to Office Decisions in Real-Time
            </Typography>
          </Box>
        </Box>
        <Box sx={MUIStyle.Row}>
          <Box sx={MUIStyle.ColLeft}>
            <Box component={"img"} src={MACBOOKPRO} alt="Onsite" sx={MUIStyle.OnsiteImg}/>
            <Box sx={MUIStyle.LEftContent}>
              <Typography variant="h2" sx={MUIStyle.ContentHeading}>
              Web App for Comprehensive Views and Collaboration
              </Typography>
              <Typography variant="body1" sx={MUIStyle.ContentText}>
              Web app centralizes virtual tours, progress tracking, field notes, measurements, and collaboration, enabling efficient construction management, seamless communication, and real-time stakeholder engagement from any location
              </Typography>
            </Box>
          </Box>
          <Box sx={MUIStyle.ColRight}>
          <Box component={"img"} src={IPHONE} alt="Onsite" sx={MUIStyle.OnsiteImg}/>
            <Box sx={MUIStyle.RightContent}>
              <Typography variant="h2" sx={MUIStyle.ContentHeading}>
              Mobile App for Data Capture 
              </Typography>
              <Typography variant="body1" sx={MUIStyle.ContentText}>
              Mobile app enables 360° capture, field notes, floorplan integration, real-time uploads, remote monitoring, and collaboration, enhancing on-site efficiency, safety, and communication for construction teams.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
