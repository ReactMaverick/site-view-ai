"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import ButtonTooltip from "../ButtonTooltip/ButtonTooltip";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { industryContents } from "./IndustryContents";
import { isSmallScreen } from "@/values/Constants/ResponsiveCheck";

export default function Industries() {
  const [hoveredButton, setHoveredButton] = useState(null);
  const industriesRef = useRef(null);

  const handleMouseEnter = (e, industry) => {
    // console.log("Event target", e.target);

    // Prevent hover effect on small screens
    if (isSmallScreen()) return;

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
    // Prevent hover effect on small screens
    if (isSmallScreen()) return;

    setHoveredButton(null);
  };

  const handleClick = (e, industry) => {
    // console.log("Button clicked", industry);

    // Prevent Click effect on big screens
    if (!isSmallScreen()) return;

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

    if (hoveredButton === industry) {
      setHoveredButton(null);
    } else {
      setHoveredButton(industry);
    }
  }

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
          end: "+=1000", // Adjust this value based on the height of your section and desired animation duration
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
    <Box sx={MUIStyle.IndustriesMain} ref={industriesRef} className="industriesSec">
      <Container maxWidth="xl">
        <Box sx={MUIStyle.IndustriesHeadingBoxOuter}>
          <Box sx={MUIStyle.IndustriesHeadingBoxInner}>
            <Typography variant="h4" sx={MUIStyle.SubHeading}>
              Delivering Precision and Clarity Through Virtual and Visual Insights
            </Typography>
            <Typography variant="h2" sx={MUIStyle.Heading}>
              Multiple industries, one simple platform
            </Typography>
          </Box>
        </Box>

        <Box sx={MUIStyle.IndustriesSec}>
          {industryContents.map((industry, index) => (
            <Box
              key={index}
              onMouseEnter={(e) => handleMouseEnter(e, industry)}
              onMouseLeave={handleMouseLeave}
              onClick={(e) => handleClick(e, industry)}
              sx={{ position: "relative", display: "inline-block" }}
            >
              <Button
                className="IndustriesButton"
                sx={MUIStyle.IndustriesButton}
              >
                {industry?.title}
              </Button>
              {hoveredButton?.title === industry?.title && (
                <Box sx={[MUIStyle.CustomTooltip,
                index <= 3 ? { top: "110%" } : { bottom: "110%" }
                ]}
                  onClick={(e) => {
                    e.stopPropagation();
                    setHoveredButton(null);
                  }}
                >
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