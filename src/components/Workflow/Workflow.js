"use client";
import { useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import WorkflowBox from "../WorkflowBox/WorkflowBox";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Workflow() {
  useEffect(() => {
    let cards = gsap.utils.toArray(".card-wrapper");

    gsap.to(cards, {
      xPercent: -80 * (cards.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".workflowSec",
        markers: true,  // Set to true to see the trigger area
        pin: true,
        scrub: 1,
        snap: 1 / (cards.length - 2),
        end: () => "+=" + document.querySelector(".workflowSec").offsetWidth
      }
    });

    cards.forEach((card, index) => {
      gsap.fromTo(card, 
        { rotation: index % 2 === 0 ? -7 : 5,
           opacity: 0,
          }, 
        {
          opacity: 1,
          scrollTrigger: {
            trigger: card,
            start: "left center",
            end: "right center",
            scrub: true,
            toggleActions: "play none none reverse"
          }
        }
      );
    });

  },
   []);

  const workflowBoxes = Array(10).fill(null);

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
        <Box sx={MUIStyle.SliderOuter}>
          {workflowBoxes.map((_, index) => (
            <Box key={index} className="card-wrapper" sx={MUIStyle.SliderInner} style={{ minWidth: '400px', margin: '80px 10px', scrollSnapAlign: 'center' }}>
              <WorkflowBox />
            </Box>
          ))}
        </Box>
     
    </Box>
  );
}