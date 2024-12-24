import { useEffect, useLayoutEffect, useRef } from "react";
import { Box, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import ProjectBox from "../ProjectBox/ProjectBox";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import ScrollToPlugin from "gsap/ScrollToPlugin";
import { COMPAREPROCESS, NOBLINDSPOT, TIMETRAVEL, VISUALDOCUMENTATION, VIRTUALSITEMEETS } from "@/values/Constants/ImageConstants";
import { commonColor } from "@/values/Colors/CommonColor";

export default function Project() {
  const projectBoxes = Array(5).fill(null); // Adjust the number of ProjectBox components as needed

  const projectSecRef = useRef(null);

  const cardContents = [
    {
      title: "Virtual Site Meets",
      image: VIRTUALSITEMEETS,
      backgroundColor: commonColor.white,
      description: "Experience immersive site visits remotely. SiteView.ai enables 360° virtual views, real-time collaboration, and precise issue resolution with your team—all within dynamic virtual meetings. Connect without boundaries.",
    },
    {
      title: "Time Travel",
      image: TIMETRAVEL,
      backgroundColor: commonColor.greenFade3,
      description: "Travel your site back in time. SiteView records the visuals from Day-1 and stores it for years even after completion of the project. Select the date of your walk, as if you are there on that day. This forms an important tool to avoid disputes and serve as an evidence during disputes.",
    },
    {
      title: "No Blind Spot",
      image: NOBLINDSPOT,
      backgroundColor: commonColor.white,
      description: "Walk through any floor or room with a few clicks. With SiteView.ai’s secure cloud storage, access your entire project from any device, anywhere with an internet connection. Never miss a detail, whether you’re in the office or on the go.",
    },
    {
      title: "Visual Documentation",
      image: VISUALDOCUMENTATION,
      backgroundColor: commonColor.greenFade3,
      description: "Capture photos or screenshots during virtual walkthroughs with a click. Save them to your computer or share instantly with your team. Keep critical visuals handy for discussions or reports, whenever you need them.",
    },
    {
      title: "Compare Process",
      image: COMPAREPROCESS,
      backgroundColor: commonColor.white,
      description: "Monitor progress effortlessly by comparing site views from two different dates. Uncover hidden details, create as-built drawings, and ensure nothing is left unnoticed beneath finishes like plaster or paint.",
    },
  ]

  // Runs before the first render
  useLayoutEffect(() => {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
    gsap.registerPlugin(useGSAP, ScrollToPlugin);
  }, []);

  useGSAP(() => {
    const cards = gsap.utils.toArray('.card__inner');

    // console.log("cards", cards);

    // gsap.set(cards, {
    //   x: (i) => `${-((window.innerWidth - cards[i].offsetWidth) / 2 - window.innerWidth * 0.1) + i * (window.innerWidth / 8)}`,
    //   rotate: (i) => i - 2,
    // });

    const gapFromSides = window.innerWidth >= 900 ? 100 : 40;

    gsap.set(cards, {
      x: (i) => {
        const baseValue = window.innerWidth / 2 - cards[i].offsetWidth / 2 - gapFromSides;
        const spacing = (baseValue * 2) / (cards.length - 1); // Total range divided by number of gaps
        return `${-baseValue + i * spacing}px`;
      },
      rotate: (i) => i - 2,
    });

    const endLocation = window.innerHeight <= 800 ? 50 : 100;

    cards.forEach((card, i) => {
      ScrollTrigger.create({
        trigger: card, // The element that ScrollTrigger will "trigger" when it comes into view
        start: `top-=${i * window.innerHeight * 0.03}px ${window.innerHeight * 0.08}px`, // When the top of the trigger - 30px * i hits 5% of the viewport from the top
        end: `-${endLocation}px bottom`, // When the top of the trigger hits the bottom of the viewport
        endTrigger: ".workflowSec", // The element that ScrollTrigger will use as the end of the trigger.
        pin: true, // Pin the trigger element while it is in view
        // pinType: "transform", // Use transforms for pinning instead of fixed positioning
        pinSpacing: false, // Don't reserve the pin element's space in the document
        // markers: true, // Show markers for testing purposes
        scrub: 1, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
        anticipatePin: 0.8, // Wait for 0.5 second before pinning the element
        // onEnter: () => {
        //   // console.log("onEnter", i);

        //   gsap.to(card, {
        //     // x: `${-((window.innerWidth - card.offsetWidth) / 2 - window.innerWidth * 0.15) + i * (window.innerWidth / 8)}`, // Move the card to the left
        //     // y: i * 30 - 150, // Move the card dynamically
        //     // rotate: i - 2, // Rotate the card
        //     // duration: 1, // Animation duration
        //     // ease: "power1.out", // Animation easing
        //   });
        // },

      });
    });
  });

  return (
    <Box sx={MUIStyle.PartnersMain} className="projectMain">
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
                title={cardContents[index].title}
                image={cardContents[index].image}
                backgroundColor={cardContents[index].backgroundColor}
                content={cardContents[index].description}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}