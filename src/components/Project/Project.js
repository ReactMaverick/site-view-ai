import { useEffect, useLayoutEffect, useRef } from "react";
import { Box, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import ProjectBox from "../ProjectBox/ProjectBox";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

export default function Project() {
  const projectBoxes = Array(5).fill(null); // Adjust the number of ProjectBox components as needed

  const projectSecRef = useRef(null);

  // Runs before the first render
  useLayoutEffect(() => {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
  }, []);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.card__inner');

    console.log("cards", cards);


    cards.forEach((card, i) => {
      ScrollTrigger.create({
        trigger: card, // The element that ScrollTrigger will "trigger" when it comes into view
        start: "top top", // When the top of the trigger hits the top of the viewport
        end: "top bottom", // When the top of the trigger hits the bottom of the viewport
        endTrigger: projectSecRef.current, // The element that ScrollTrigger will use as the end of the trigger.
        pin: true, // Pin the trigger element while it is in view
        pinSpacing: false, // Don't reserve the pin element's space in the document
        markers: true, // Show markers for testing purposes
        scrub: true, // Smoothly animate the pin movement
        anticipatePin: 1 // Wait for 1 second before pinning the element
      });
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

        <Box className="projectSec" sx={{ ...MUIStyle.ProjectSec, }} ref={projectSecRef}>
          {projectBoxes.map((_, index) => (
            // <div key={index} className="card"
            //   style={{}}
            // >
            <ProjectBox
              key={index}
            />
            // </div>
          ))}
        </Box>
      </Container>
    </Box>
  );
}