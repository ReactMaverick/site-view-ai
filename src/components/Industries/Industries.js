"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import ButtonTooltip from "../ButtonTooltip/ButtonTooltip";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { industryContents } from "./IndustryContents";

export default function Industries() {
  const [hoveredButton, setHoveredButton] = useState(null);
  const industriesRef = useRef(null);

  const handleMouseEnter = (e, industry) => {
    // console.log("Event target", e.target);

    if (e.target.tagName === "BUTTON") {
      // console.log("Button hovered", industry);

      if (e.target.style.filter === "blur(5px)") {
        setHoveredButton(null);
        e.target.classList.remove("hovered");
        return;
      } else {
        e.target.style.filter = "blur(0px)";
        e.target.style.opacity = 1;

        e.target.classList.add("hovered");
      }
    } else {
      // console.log("Parent element hovered", industry);
      if (e.target.children[0].style.filter === "blur(5px)") {
        setHoveredButton(null);
        e.target.children[0].classList.remove("hovered");
        return;
      } else {
        e.target.children[0].style.filter = "blur(0px)";
        e.target.children[0].style.opacity = 1;
        e.target.children[0].classList.add("hovered");
      }
    }

    setHoveredButton(industry);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

  // Runs before the first render
  useLayoutEffect(() => {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
  }, []);

  useGSAP(() => {
    const buttons = gsap.utils.toArray(".IndustriesButton");

    gsap.fromTo(
      buttons,
      { opacity: 0, filter: "blur(5px)" },
      {
        opacity: 1,
        filter: "blur(0px)",
        duration: 1.5,
        stagger: {
          each: 0.1,
          from: "random",
        },
        scrollTrigger: {
          trigger: industriesRef.current,
          start: "top top",
          end: "+=2000", // Adjust this value based on the height of your section and desired animation duration
          scrub: true,
          pin: true,
          // markers: true,  // Set to true to see the trigger area
        },
      }
    );

    buttons.forEach((button) => {
      button.addEventListener("mouseenter", () => {
        gsap.to(button, { scale: 1.1, duration: 0.3 });
      });
      button.addEventListener("mouseleave", () => {
        gsap.to(button, { scale: 1, duration: 0.3 });
      });
    });
  });

  return (
    <Box sx={MUIStyle.IndustriesMain}>
      <Container maxWidth="xl">
        <Box sx={MUIStyle.IndustriesHeadingBoxOuter}>
          <Box sx={MUIStyle.IndustriesHeadingBoxInner}>
            <Typography variant="h4" sx={MUIStyle.SubHeading}>
              Multiple industries, one simple platform
            </Typography>
            <Typography variant="h2" sx={MUIStyle.Heading}>
              Delivering Precision and Clarity Through Virtual and Visual Insights
            </Typography>
          </Box>
        </Box>

        <Box sx={MUIStyle.IndustriesSec} ref={industriesRef}>
          {industryContents.map((industry, index) => (
            <Box
              key={index}
              onMouseEnter={(e) => handleMouseEnter(e, industry)}
              onMouseLeave={handleMouseLeave}
              sx={{ position: "relative", display: "inline-block" }}
            >
              <Button
                className="IndustriesButton"
                sx={MUIStyle.IndustriesButton}
              >
                {industry?.title}
              </Button>
              {hoveredButton?.title === industry?.title && (
                <Box sx={MUIStyle.CustomTooltip}>
                  <ButtonTooltip
                    title={industry.title}
                    content={industry.content}
                    image={industry.image}
                  />
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}