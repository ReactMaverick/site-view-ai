"use client";
import React, { useRef, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import gsap from "gsap";
import { VIDEOINNER } from "@/values/Constants/ImageConstants";
import SiteViewSVG from "../SiteViewSVG/SiteViewSVG";
import { tabBarSecContent } from "./TabBarSecContent";
import { useGSAP } from "@gsap/react";

export default function TabBarSec() {
  const buttonRefs = useRef([]);
  const bodyRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const container = useRef(null);

  useGSAP(
    (context, contextSafe) => {

      const buttonElements = buttonRefs.current;

      const handleClick = contextSafe((index) => {
        const element = bodyRefs.current[index];
        const isCollapsed = gsap.getProperty(element, "height") === 0;

        const expandedElements = bodyRefs.current.filter((el, i) => i !== index && gsap.getProperty(el, "height") !== 0);

        // Collapse all other elements
        expandedElements.forEach((el, i) => {
          gsap.to(el, {
            marginTop: 0,
            height: 0,
            padding: 0,
            minHeight: 0,
            opacity: 0,
            duration: 0.5
          });
        });

        setActiveIndex(isCollapsed ? index : null);

        if (isCollapsed) {
          // Expand the element
          gsap.to(element, {
            marginTop: 30,
            height: "auto",
            padding: 24,
            minHeight: 275, // Adjust minHeight as needed
            opacity: 1,
            duration: 0.5
          });
        } else {
          // Collapse the element
          gsap.to(element, {
            marginTop: 0,
            height: 0,
            padding: 0,
            minHeight: 0,
            opacity: 0,
            duration: 0.5
          });
        }
      });

      buttonElements.forEach((button, index) => {
        button.addEventListener("click", () => handleClick(index));
      });

      return () => {
        buttonElements.forEach((button, index) => {
          button.removeEventListener("click", () => handleClick(index));
        });
      }

    },
    { scope: container }
  );

  return (
    <Box sx={MUIStyle.TabBarSec}>
      <Box sx={MUIStyle.BannerSVGContainer}>
        <SiteViewSVG
          fillOpacity={0.5}
        />
      </Box>
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
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
              {activeIndex !== null && tabBarSecContent[activeIndex].images && (
                tabBarSecContent[activeIndex].images.map((image, index) => (
                  <Box
                    key={index}
                    component={"img"}
                    src={image}
                    alt="TabBarSec"
                    sx={[MUIStyle.TestImage,
                    index !== 0 ? {
                      position: "absolute",
                      top: 0,
                      left: 0,
                      zIndex: 10 - index,
                      transform: `translateX(${index * 6}%) scale(${100 - index * 5}%)`,
                    } : { position: "relative", zIndex: 10 }
                    ]}
                  />
                ))
              )}
              {/* <Box
                component={"img"}
                src={tabBarSecContent[0].images[0]}
                alt="TabBarSec"
                sx={MUIStyle.TestImage}
              /> */}
            </Box>
          </Box>
          <Box sx={MUIStyle.TabBarSecMyColRight}>
            <Box sx={MUIStyle.TabBarSecInnerBox} ref={container}>
              {tabBarSecContent.map((tabBar, index) => (
                <Box
                  key={index}
                  sx={MUIStyle.TabBarSecButton}
                >
                  <Box
                    sx={{
                      ...MUIStyle.TabBarSecButtonHead,
                      // height: activeIndex === index ? 0 : "auto",
                      // display: activeIndex === index ? "none" : "block",
                      // transition: "all 0.5s ease",
                    }}
                    ref={(el) => (buttonRefs.current[index] = el)}
                  >
                    {tabBar.title}
                  </Box>
                  <Box
                    sx={{
                      ...MUIStyle.TabBarSecButtonBody,
                      // height: activeIndex === index ? "auto" : 0,
                      // display: activeIndex === index ? "block" : "none",
                      // overflow: activeIndex === index ? "visible" : "hidden",
                      // transition: "all 0.5s ease",
                    }}
                    ref={(el) => (bodyRefs.current[index] = el)}
                  >
                    <Box sx={MUIStyle.TabBarSecButtonBodyTop}>
                      <Typography
                        variant="h4"
                        sx={MUIStyle.TabBarSecButtonBodyTopHeading}
                      >
                        {tabBar.title}
                      </Typography>
                      <Typography
                        component={"span"}
                        sx={MUIStyle.TabBarSecButtonBodyTopText}
                      >
                        {tabBar.subtitle}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      sx={MUIStyle.TabBarSecButtonBodyText}
                    >
                      {tabBar.content}
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
