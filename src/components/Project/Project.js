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

    // console.log("cards", cards);

    cards.forEach((card, i) => {
      ScrollTrigger.create({
        trigger: card, // The element that ScrollTrigger will "trigger" when it comes into view
        start: "top 300px", // When the top of the trigger hits 300px above the bottom of the viewport
        end: "bottom bottom", // When the top of the trigger hits the bottom of the viewport
        endTrigger: ".workflowSec", // The element that ScrollTrigger will use as the end of the trigger.
        pin: true, // Pin the trigger element while it is in view
        // pinType: "transform", // Use transforms for pinning instead of fixed positioning
        pinSpacing: false, // Don't reserve the pin element's space in the document
        markers: true, // Show markers for testing purposes
        // scrub: 1, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        // anticipatePin: 0.5, // Wait for 0.5 second before pinning the element
        onEnter: () => {
          // console.log("onEnter", i);

          gsap.to(card, {
            x: `${-((window.innerWidth - card.offsetWidth) / 2 - 200) + i * (window.innerWidth / 8)}`, // Move the card to the left
            y: i * 30 - 150, // Move the card dynamically
            rotate: i - 2, // Rotate the card
            duration: 1, // Animation duration
            // ease: "power1.out", // Animation easing
          });
        },



        // onLeaveBack: () => {
        //   console.log("onLeaveBack", i);

        //   // gsap.to(card, {
        //   //   x: 0, // Move the card to the left
        //   //   y: 0, // Move the card down
        //   //   rotate: 0, // Rotate the card
        //   //   duration: 1, // Animation duration
        //   //   // ease: "power1.out", // Animation easing
        //   // });
        // },
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

        <Box className="projectSecOuter" sx={MUIStyle.ProjectSecOuter}>
          <Box className="projectSec" sx={{ ...MUIStyle.ProjectSec, }} ref={projectSecRef}>
            {projectBoxes.map((_, index) => (
              <ProjectBox
                key={index}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}