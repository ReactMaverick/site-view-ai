"use client";
import React, { useEffect, useLayoutEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import ProblemSolutionBox from "../Problem/Problem";
import Grid from "@mui/material/Grid2";
import Solution from "../Solution/Solution";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SiteViewSVG from "../SiteViewSVG/SiteViewSVG";

export default function ProblemSolution() {
  const problemSolutionPairs = [
    { problem: <ProblemSolutionBox />, solution: <ProblemSolutionBox type="solution" heading="Solution" />, key: "pair1" },
    { problem: <ProblemSolutionBox />, solution: <ProblemSolutionBox type="solution" heading="Solution" />, key: "pair2" },
    { problem: <ProblemSolutionBox />, solution: <ProblemSolutionBox type="solution" heading="Solution" />, key: "pair3" },
    { problem: <ProblemSolutionBox />, solution: <ProblemSolutionBox type="solution" heading="Solution" />, key: "pair4" },
  ];

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useGSAP(() => {
    // Set Problem Cards
    gsap.set(".problem-main", {
      xPercent: 52
    });

    // Set Solution Cards
    gsap.set(".solution-main", {
      xPercent: -52
    });

    const problemCards = gsap.utils.toArray(".problem-main");
    const solutionCards = gsap.utils.toArray(".solution-main");

    problemCards.forEach((card, i) => {
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "bottom center",
          scrub: true,
          // markers: true,
          id: `problem-card-${i}`,
          snap: 1 / 3,
        },
        xPercent: 0,
        ease: "power1.inOut",
      });
    });

    solutionCards.forEach((card, i) => {
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "bottom center",
          scrub: true,
          // markers: true,
          id: `solution-card-${i}`,
          snap: 1 / 3,
        },
        xPercent: 0,
        ease: "power1.inOut",
      });
    });

  })

  return (
    <Box sx={MUIStyle.ProblemSolutionMain} className="problem-solution-main">
      <Box sx={MUIStyle.BannerSVGContainer}>
        <SiteViewSVG
          fillOpacity={0.05}
        />
      </Box>
      <Container maxWidth="xl">
        <Box sx={MUIStyle.AboutSecOuterBox}>
          <Box sx={MUIStyle.AboutSecHeadingBox}>
            <Typography variant="body1" sx={MUIStyle.AboutSecText}>
              Construction Chaos? We’ve Got Solutions to Fix the Mess
            </Typography>
            <Typography variant="h2" sx={MUIStyle.AboutSecHeading}>
              From blind spots to bottlenecks, see how SiteView.ai saves the day
            </Typography>
          </Box>
        </Box>
        <Box sx={MUIStyle.ProblemSolutionBox}>
          <Grid container columnSpacing={5} rowSpacing={3}>
            {problemSolutionPairs.map(({ problem, solution, key }) => (
              <Box sx={MUIStyle.ProblemSolutionPair} key={key}>
                {problem}
                {solution}
              </Box>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
