"use client";
import React, { useRef, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import Grid from "@mui/material/Grid2";
import { gsap } from "gsap";
import { VIDEOINNER } from "@/values/Constants/ImageConstants";

export default function TabBarSec() {
  const buttonRefs = useRef([]);
  const headRefs = useRef([]);
  const bodyRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    if (activeIndex === index) {
      // Close the active button
      gsap.to(headRefs.current[index], {
        height: "auto",
        display: "block",
        duration: 0.5,
      });
      gsap.to(bodyRefs.current[index], {
        height: 0,
        display: "none",
        overflow: "hidden",
        duration: 0.5,
      });
      setActiveIndex(null);
    } else {
      // Close any currently active button
      if (activeIndex !== null) {
        gsap.to(headRefs.current[activeIndex], {
          height: "auto",
          display: "block",
          duration: 0.5,
        });
        gsap.to(bodyRefs.current[activeIndex], {
          height: 0,
          display: "none",
          overflow: "hidden",
          duration: 0.5,
        });
      }

      // Open the clicked button
      gsap.to(headRefs.current[index], {
        height: 0,
        display: "none",
        duration: 0.5,
      });
      gsap.to(bodyRefs.current[index], {
        height: "auto",
        display: "block",
        duration: 0.5,
        onComplete: () => {
          gsap.set(bodyRefs.current[index], { overflow: "visible" });
        },
      });
      setActiveIndex(index);
    }
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
        <Box sx={MUIStyle.TabBarSecMyRow}>
          <Box sx={MUIStyle.TabBarSecMyColLeft}>
            <Box sx={MUIStyle.TabBarSecImageBox}>
              <Box
              component={"img"}
                src={VIDEOINNER}
                alt="TabBarSec"
                sx={MUIStyle.TestImage}
              />
            </Box>
          </Box>
          <Box sx={MUIStyle.TabBarSecMyColRight}>
            <Box sx={MUIStyle.TabBarSecInnerBox}>
              {buttons.map((_, index) => (
                <Box
                  key={index}
                  sx={MUIStyle.TabBarSecButton}
                  ref={(el) => (buttonRefs.current[index] = el)}
                  onClick={() => handleClick(index)}
                >
                  <Box
                    sx={{
                      ...MUIStyle.TabBarSecButtonHead,
                      height: activeIndex === index ? 0 : "auto",
                      display: activeIndex === index ? "none" : "block",
                      transition: "all 0.5s ease",
                    }}
                    ref={(el) => (headRefs.current[index] = el)}
                  >
                    On-site Management
                  </Box>
                  <Box
                    sx={{
                      ...MUIStyle.TabBarSecButtonBody,
                      height: activeIndex === index ? "auto" : 0,
                      display: activeIndex === index ? "block" : "none",
                      overflow: activeIndex === index ? "visible" : "hidden",
                      transition: "all 0.5s ease",
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
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
