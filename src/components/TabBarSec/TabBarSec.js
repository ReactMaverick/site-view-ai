"use client";
import React, { useRef } from "react";
import { Box, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import Grid from "@mui/material/Grid2";
import { gsap } from "gsap";

export default function TabBarSec() {
  const buttonRefs = useRef([]);
  const headRefs = useRef([]);
  const bodyRefs = useRef([]);

  const handleClick = (index) => {
    gsap.to(headRefs.current[index], {
      height: 0,
      opacity: 0,
      duration: 0.5,
      
      onComplete: () => {
        gsap.to(bodyRefs.current[index], {
          height: '100%',
          opacity: 1,
          duration: 0.5,
        });
      },
    });
  };

  const buttons = Array.from({ length: 8 });

  return (
    <Box sx={MUIStyle.TabBarSec}>
      <Container maxWidth="xl">
        <Box sx={MUIStyle.AboutSecOuterBox}>
          <Box sx={MUIStyle.AboutSecHeadingBox}>
            <Typography variant="body1" sx={MUIStyle.AboutSecText}>
              The Full Picture, Every Time
            </Typography>
            <Typography variant="h2" sx={MUIStyle.AboutSecHeading}>
              Complete site visibility means fewer surprises and better
              decisions, every single day
            </Typography>
          </Box>
        </Box>
        <Grid container columnSpacing={5} rowSpacing={3}>
          <Grid size={8}>
            <Box sx={MUIStyle.TabBarSecImageBox}>
              {/* <Box
                component={"img"}
                src="https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg"
                alt="TabBarSecImage"
                sx={MUIStyle.TabBarSecImage}
              /> */}
            </Box>
          </Grid>
          <Grid size={4}>
            <Box sx={MUIStyle.TabBarSecInnerBox}>
      {buttons.map((_, index) => (
        <Box
          key={index}
          sx={MUIStyle.TabBarSecButton}
          ref={(el) => (buttonRefs.current[index] = el)}
          onClick={() => handleClick(index)}
        >
          <Box
            sx={MUIStyle.TabBarSecButtonHead}
            ref={(el) => (headRefs.current[index] = el)}
          >
            On-site Management
          </Box>
          <Box
            sx={{
              ...MUIStyle.TabBarSecButtonBody,
              height: 0,
              opacity: 0,
              overflow: 'hidden',
            }}
            ref={(el) => (bodyRefs.current[index] = el)}
          >
            <Box sx={MUIStyle.TabBarSecButtonBodyTop}>
              <Typography
                variant="h4"
                sx={MUIStyle.TabBarSecButtonBodyTopHeading}
              >
                On-site Management
              </Typography>
              <Typography
                component={"span"}
                sx={MUIStyle.TabBarSecButtonBodyTopText}
              >
                Your Hub for Complete Project Insights
              </Typography>
            </Box>
            <Typography
              variant="body1"
              sx={MUIStyle.TabBarSecButtonBodyText}
            >
              360° Site Capture: Get a full visual record beyond standard
              photos. 360° Site Capture: Get a full visual record beyond
              standard photos. 360° Site Capture: Get a full visual
              record.
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
            
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
