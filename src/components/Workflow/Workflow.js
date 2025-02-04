"use client";
import { useEffect, useLayoutEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import WorkflowBox from "../WorkflowBox/WorkflowBox";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { backgroundColors, workflowContents } from "./WorkflowContents";
import { isSmallScreen } from "@/values/Constants/ResponsiveCheck";

export default function Workflow() {

  // Runs before the first render
  useLayoutEffect(() => {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
  }, []);


  useGSAP(() => {
    const cards = gsap.utils.toArray(".card-wrapper");

    // console.log(document.querySelector(".workflowSec").offsetWidth, document.querySelector(".sliderOuter").offsetWidth);

    gsap.to(cards, {
      xPercent: -(isSmallScreen() ? 108 : 100) * (cards.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".workflowSec",
        start: "top top",
        // markers: true,  // Set to true to see the trigger area
        pin: true,
        scrub: 1,
        // snap: 1 / (cards.length - 2),
        end: () => "+=" + isSmallScreen() ? (document.querySelector(".workflowSec").offsetHeight * 15) : (document.querySelector(".workflowSec").offsetWidth * 2),
        endTrigger: ".videoSecMain",
        onUpdate: self => {

          const direction = self.direction > 0 ? 1 : -1;
          const progress = self.progress;
          const progressMultiplier = progress <= 0.4 ? (1 - progress) : progress;
          cards.forEach((card, index) => {
            const rotation = index % 2 === 0 ? -7 * progressMultiplier : 5 * progressMultiplier;
            gsap.to(card, {
              rotation: rotation * direction,
              ease: "none",
            });
          });
        }
      },

    });
  });

  return (
    <Box className="workflowSec" sx={MUIStyle.workflowMain}>
      <Container maxWidth="xl">
        <Box sx={MUIStyle.workflowHeadingBoxOuter}>
          <Box sx={MUIStyle.workflowHeadingBoxInner} >
            <Typography variant="h4" sx={MUIStyle.SubHeading}>
              Transfer your workflow
            </Typography>
            <Typography variant="h2" sx={MUIStyle.Heading}>
              Speed, Precision, and Savings at Every Step
            </Typography>
          </Box>
        </Box>
      </Container>
      <Box sx={MUIStyle.SliderOuter} className="sliderOuter">
        {workflowContents.map((workflow, index) => (
          <Box key={index} className="card-wrapper" sx={MUIStyle.SliderInner}
          >
            <WorkflowBox
              backgroundColor={backgroundColors[index % backgroundColors.length]}
              title={workflow.title}
              content={workflow.content}
            />
          </Box>
        ))}
      </Box>

    </Box>
  );
}