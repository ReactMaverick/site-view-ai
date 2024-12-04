"use client";
import { Box, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import React from "react";
import { DEVICE1 } from "@/values/Constants/ImageConstants";
import { commonColor } from "@/values/Colors/CommonColor";

export default function DigitalConstruction() {
  return (
    <Box sx={MUIStyle.DigitalConstructionMain}>
      <Container maxWidth="xl">
        <Box sx={MUIStyle.DigitalConstructionHeadingBoxOuter}>
          <Box sx={MUIStyle.DigitalConstructionHeadingBoxInner}>
            <Typography variant="h4" sx={MUIStyle.SubHeading}>
              Revolutionize your projects with SiteView.ai
            </Typography>
            <Typography variant="h2" sx={MUIStyle.Heading}>
              Your Digital Construction Assistant
            </Typography>
          </Box>
        </Box>
        <Box sx={MUIStyle.DigitalConstructionRow}>
          <Box sx={MUIStyle.DigitalColLeft}>
            <Box
              sx={[
                MUIStyle.DigitalContentBox,
                {
                  backgroundColor: commonColor.greenFade1,
                },
              ]}
            >
              <Typography variant="h2" sx={MUIStyle.ContentHeading}>
                Site Notes
              </Typography>
              <Typography variant="body1" sx={MUIStyle.ContentText}>
                Pin Sticky Notes directly to specific site locations
              </Typography>
            </Box>
            <Box
              sx={[
                MUIStyle.DigitalContentBox,
                {
                  backgroundColor: commonColor.greenFade3,
                },
              ]}
            >
              <Typography variant="h2" sx={MUIStyle.ContentHeading}>
              360° Site Capture
              </Typography>
              <Typography variant="body1" sx={MUIStyle.ContentText}>
              Document every angle with immersive 360° visuals
              </Typography>
            </Box>
          </Box>
          <Box sx={MUIStyle.DigitalColCenter}>
            <Box
              sx={MUIStyle.DigitalConstructionImg}
              component={"img"}
              src={DEVICE1}
            />
          </Box>
          <Box sx={MUIStyle.DigitalColRight}>
          <Box
              sx={[
                MUIStyle.DigitalContentBox,
                {
                  backgroundColor: commonColor.greenFade3,
                },
              ]}
            >
              <Typography variant="h2" sx={MUIStyle.ContentHeading}>
              Floorplan Management
              </Typography>
              <Typography variant="body1" sx={MUIStyle.ContentText}>
              Upload, annotate, and organize floorplans with ease
              </Typography>
            </Box>
            <Box
              sx={[
                MUIStyle.DigitalContentBox,
                {
                  backgroundColor: commonColor.greenFade1,
                },
              ]}
            >
              <Typography variant="h2" sx={MUIStyle.ContentHeading}>
              Real-Time Uploads
              </Typography>
              <Typography variant="body1" sx={MUIStyle.ContentText}>
              Sync captured data instantly to the cloud
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
