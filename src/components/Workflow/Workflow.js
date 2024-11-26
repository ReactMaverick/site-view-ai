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
      xPercent: -100 * (cards.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".workflowSec",
        pin: true,
        scrub: 1,
        snap: 1 / (cards.length - 1),
        end: () => "+=" + document.querySelector(".workflowSec").offsetWidth
      }
    });

    cards.forEach((card, index) => {
      gsap.fromTo(card, 
        { rotation: index % 2 === 0 ? 15 : -15, opacity: 0 }, 
        {
          rotation: 0,
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
  }, []);

  const workflowBoxes = Array(5).fill(null);

  return (
    <Box  className="workflowSec" sx={MUIStyle.workflowMain}>
      <Container maxWidth="xl">
        <Box sx={MUIStyle.workflowHeadingBoxOuter}>
          <Box sx={MUIStyle.workflowHeadingBoxInner}>
            <Typography variant="h4" sx={MUIStyle.SubHeading}>
              Transfer your workflow
            </Typography>
            <Typography variant="h2" sx={MUIStyle.Heading}>
              Speed, Precision, and Savings at Every Step
            </Typography>
          </Box>
        </Box>
        </Container>
        <Box sx={{ display: 'flex', overflowX: 'hidden', width: '100%', scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {workflowBoxes.map((_, index) => (
            <div key={index} className="card-wrapper" style={{ minWidth: '400px', margin: '0 10px', scrollSnapAlign: 'start' }}>
              <WorkflowBox />
            </div>
          ))}
        </Box>
     
    </Box>
  );
}