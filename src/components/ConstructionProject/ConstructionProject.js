"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import { PROJECTLOGO, VISION } from "@/values/Constants/ImageConstants";
import Grid from "@mui/material/Grid2";
import OurTechSVG from "../OurTechSVG/OurTechSVG";
import $ from "jquery";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { constructionContent } from "./ConstructionContent";
import { isSmallScreen } from "@/values/Constants/ResponsiveCheck";

export default function ConstructionProject() {

  const constructionSec = useRef(null);

  // Runs before the first render
  useLayoutEffect(() => {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
  }, []);

  useGSAP(() => {
    const boxes = gsap.utils.toArray(".construction-project-box");
    const pointer = $(".pointerPath");

    gsap.set(pointer, { transformOrigin: "center" });

    // Number of scrolls
    const numScrolls = boxes.length;

    gsap.to(pointer, {
      scrollTrigger: {
        trigger: constructionSec.current,
        start: "top top",
        end: "+=" + window.innerHeight * 3,
        scrub: 1,
        pin: true,
        // markers: true,
        id: "constructionProjectBoxes",
        snap: {
          snapTo: 1 / (numScrolls - 1),
          duration: 0.05,
          delay: 0,  // No delay in snapping
          ease: "power2.inOut",
          inertia: false  // Disable inertia-based scrolling
        },
        snap: 1 / (boxes.length - 1),
        onUpdate: self => {
          const progress = self.progress;

          // Determining the current box based on the progress
          let currentIndex = -1;
          if (progress > 0 && progress <= 0.25) {
            currentIndex = 1;
            gsap.to(pointer, { rotate: 165, duration: 0.5 });
          } else if (progress > 0.25 && progress <= 0.5) {
            currentIndex = 3;
            gsap.to(pointer, { rotate: 255, duration: 0.5 });
          } else if (progress > 0.5 && progress <= 0.75) {
            currentIndex = 2;
            gsap.to(pointer, { rotate: 345, duration: 0.5 });
          } else if (progress > 0.75 && progress < 1) {
            currentIndex = 0;
            gsap.to(pointer, { rotate: 345 + 90, duration: 0.5 });
          }

          // Resetting the background color of all boxes
          gsap.to(boxes, {
            backgroundColor: "rgba(255, 255, 255, 0.05)",
            duration: 0
          });

          // Resetting the color of the heading
          gsap.to(boxes.map(box => box.querySelector("h2")), {
            color: "#fff",
            duration: 0
          });

          // Highlighting the current box
          if (currentIndex !== -1) {
            gsap.to(boxes[currentIndex], {
              backgroundColor: "#C9F625",
              duration: 0
            });

            // Changing the color of the heading
            gsap.to(boxes[currentIndex].querySelector("h2"), {
              color: "#000",
              duration: 0
            });
          }
        }
      }
    });

  });

  return (
    <Box className="container-op" sx={MUIStyle.ConstructionProjectMain} ref={constructionSec}>
      <Container maxWidth="xl">
        <Box sx={MUIStyle.workflowHeadingBoxOuter}>
          <Box sx={MUIStyle.workflowHeadingBoxInner}>
            <Typography variant="h4" sx={MUIStyle.SubHeading}>
              Simple Steps, Powerful Results
            </Typography>
            <Typography variant="h2" sx={MUIStyle.Heading}>
              Manage your construction project in four easy, powerful steps
            </Typography>
          </Box>
        </Box>
        <Box sx={MUIStyle.ConstructionProjectGrid} className="construction-project-grid">
          {/* <Box
            component={"img"}
            src={PROJECTLOGO}
            sx={MUIStyle.ConstructionProjectImg}
          /> */}
          <Box
            sx={MUIStyle.ConstructionProjectImg}
          >
            <OurTechSVG />
          </Box>
          {constructionContent.map((content, index) => (
            <Box
              sx={[MUIStyle.ConstructionProjectBox, 
                isSmallScreen() && {
                  order: content.mobileOrder
                }
              ]}
              key={index}
              className="construction-project-box"
            >
              <Typography variant="h2" sx={MUIStyle.Heading}>
                {content.title}
              </Typography>
              <Typography variant="body1" sx={MUIStyle.ProjectText}>
                {content.content}
              </Typography>
            </Box>
          ))}

        </Box>
      </Container>
    </Box>
  );
}
