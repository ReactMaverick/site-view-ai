"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import ButtonTooltip from "../ButtonTooltip/ButtonTooltip";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function Industries() {
  const [hoveredButton, setHoveredButton] = useState(null);
  const industriesRef = useRef(null);

  const handleMouseEnter = (industry) => {
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
          markers: true,  // Set to true to see the trigger area
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
          {[
            "Oil & Gas",
            "Museums & Galleries",
            "Manufacturing & Industrial",
            "Facility Management",
            "Forestry & Agriculture",
            "Construction & Engineering",
            "Data Centre",
            "Hospitals & Clinics",
            "Telecommunications & IT",
            "Renewable Energy",
            "Infrastructure Projects",
            "Event Venues",
            "Government & Public Services",
            "Retail Stores",
            "Disaster Relief & Restoration",
            "Insurance & Risk Management",
            "Hotels & Resorts",
            "Real Estate",
            "Mining & Resources",
            "Universities & Schools",
          ].map((industry) => (
            <Box
              key={industry}
              onMouseEnter={() => handleMouseEnter(industry)}
              onMouseLeave={handleMouseLeave}
              sx={{ position: "relative", display: "inline-block" }}
            >
              <Button
                className="IndustriesButton"
                sx={MUIStyle.IndustriesButton}
              >
                {industry}
              </Button>
              {hoveredButton === industry && (
                <Box sx={MUIStyle.CustomTooltip}>
                  <ButtonTooltip industry={industry} />
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}