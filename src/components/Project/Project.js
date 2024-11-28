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

    // Set initial positions of the cards
    gsap.set(cards, {
      x: (i) => window.innerWidth - cards[i].offsetWidth - (window.innerWidth / 5),
      y: (i) => (window.innerHeight - cards[i].offsetHeight) / 2,
    });


    cards.forEach((card, i) => {
      ScrollTrigger.create({
        trigger: card, // The element that ScrollTrigger will "trigger" when it comes into view
        start: "-200px " + (i * 10) + "px", // When the top of the trigger hits 200px above the bottom of the viewport
        end: "-100px bottom", // When the top of the trigger hits the bottom of the viewport
        endTrigger: ".workflowSec", // The element that ScrollTrigger will use as the end of the trigger.
        pin: true, // Pin the trigger element while it is in view
        // pinType: "transform", // Use transforms for pinning instead of fixed positioning
        pinSpacing: false, // Don't reserve the pin element's space in the document
        markers: true, // Show markers for testing purposes
        scrub: 0.5, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        anticipatePin: 2, // Wait for 1 second before pinning the element
        onEnter: () => {
          console.log("onEnter");

          gsap.to(card, {
            x: (window.innerWidth - cards[0].offsetWidth - (window.innerWidth / 5)) - (cards.length - i) * (100 - i * 10), // Slightly move the card in the x direction
            y: (window.innerHeight - cards[0].offsetHeight) / 2 - (cards.length - i) * 30, // Slightly move the card in the y direction
            rotate: i - 2, // Rotate the card
            duration: 1, // Animation duration
            ease: "power1.out", // Animation easing
          });
        },
        onLeaveBack: () => {
          console.log("onLeaveBack");

          gsap.to(card, {
            x: window.innerWidth - cards[0].offsetWidth - (window.innerWidth / 5), // Move the card back to the center of the screen
            y: (window.innerHeight - cards[0].offsetHeight) / 2, // Move the card back to the center of the screen
            rotate: 0, // Reset the rotation of the card
            duration: 1, // Animation duration
            ease: "power1.out", // Animation easing
          });
        },
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