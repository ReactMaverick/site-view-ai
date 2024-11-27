import { useEffect, useLayoutEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import ProjectBox from "../ProjectBox/ProjectBox";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

export default function Project() {
  const projectBoxes = Array(5).fill(null); // Adjust the number of ProjectBox components as needed

  // Runs before the first render
  useLayoutEffect(() => {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
  }, []);

  useGSAP(() => {
    let cards = gsap.utils.toArray(".card");

    cards.forEach((card, index) => {
      const cardInner = card.querySelector(".card__inner");

      gsap.fromTo(card,
        { y: 100, opacity: 1, marker: true },
        {
          y: 0,
          opacity: 1,
          scrollTrigger: {
            trigger: card,
            start: "top center",
            end: "top center",
            scrub: true,
            toggleActions: "play none none reverse",
            markers: true,  // Set to true to see the trigger area
          }
        },
      );
    });

    ScrollTrigger.create({
      trigger: ".projectSec",
      start: "top top",
      end: () => "+=" + document.querySelector(".projectSec").offsetHeight * cards.length,
      pin: true,
      pinSpacing: true
    });
  });

  return (
    <Box sx={MUIStyle.PartnersMain}>
      <Container maxWidth="xl">
        <Box sx={MUIStyle.PartnersHeadingBoxOuter}>
          <Box sx={MUIStyle.PartnersHeadingBoxInner}>
            <Typography variant="h4" sx={MUIStyle.SubHeading}>
              Take that important decision in minutes, Not Hours
            </Typography>
            <Typography variant="h2" sx={MUIStyle.Heading}>
              your project, anywhere, anytime
            </Typography>
          </Box>
        </Box>

        <Box className="projectSec" sx={{ ...MUIStyle.ProjectSec, }}>
          {projectBoxes.map((_, index) => (
            <div key={index} className="card"
              style={{}}
            >
              <ProjectBox />
            </div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}