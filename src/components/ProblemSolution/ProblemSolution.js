"use client";
import React, { Fragment, useEffect, useLayoutEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import ProblemSolutionBox from "../Problem/Problem";
import Grid from "@mui/material/Grid2";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import SiteViewSVG from "../SiteViewSVG/SiteViewSVG";
import { ProblemSolutionContent } from "./ProblemSolutionContent";
import { isMobileScreen, isSmallScreen } from "@/values/Constants/ResponsiveCheck";

export default function ProblemSolution() {
  // const problemSolutionPairs = [
  //   { problem: <ProblemSolutionBox />, solution: <ProblemSolutionBox type="solution" heading="Solution" />, key: "pair1" },
  //   { problem: <ProblemSolutionBox />, solution: <ProblemSolutionBox type="solution" heading="Solution" />, key: "pair2" },
  //   { problem: <ProblemSolutionBox />, solution: <ProblemSolutionBox type="solution" heading="Solution" />, key: "pair3" },
  //   { problem: <ProblemSolutionBox />, solution: <ProblemSolutionBox type="solution" heading="Solution" />, key: "pair4" },
  // ];

  const problemSolutionPairs = ProblemSolutionContent.map(({ problem, solution, key }) => ({
    problem: <ProblemSolutionBox {...problem} />,
    solution: <ProblemSolutionBox {...solution} />,
    key,
  }));

  // console.log("problemSolutionPairs", problemSolutionPairs);


  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useGSAP(() => {

    if (isMobileScreen()) return;

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

    gsap.to('.problem-solution-main', {
      scrollTrigger: {
        trigger: '.problem-solution-main',
        start: "top top",
        end: "+=" + window.innerHeight * (3.5 / 2),
        scrub: true,
        // markers: true,
        pin: true,
      },
    });

    gsap.to(problemCards, {
      scrollTrigger: {
        trigger: '.problem-solution-main',
        start: "top top",
        end: "+=" + window.innerHeight * 1.5,
        scrub: true,
        // markers: true,
        id: `solution-card`,
        snap: 1,
      },
      xPercent: 0,
      ease: "power1.inOut",
      stagger: 0.05,
    });

    gsap.to(solutionCards, {
      scrollTrigger: {
        trigger: '.problem-solution-main',
        start: "top top",
        end: "+=" + window.innerHeight * 1.5,
        scrub: true,
        // markers: true,
        id: `solution-card`,
        snap: 1,
      },
      xPercent: 0,
      ease: "power1.inOut",
      stagger: 0.05,
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
              From blind spots to bottlenecks, see how SitePace.ai saves the day
            </Typography>
          </Box>
        </Box>
        <Box sx={MUIStyle.ProblemSolutionBox}>
          <Grid
            container
            columnSpacing={{
              xs: 1,
              sm: 1,
              md: 1,
              lg: 1,
              xl: 3,
            }}
            rowSpacing={{
              xs: 1,
              sm: 1,
              md: 1,
              lg: 1,
              xl: 3,
            }}
          >
            {problemSolutionPairs.map(({ problem, solution, key }) => (
              // <Box sx={MUIStyle.ProblemSolutionPair} key={key}>
              <Fragment key={key}>
                {problem}
                {solution}
              </Fragment>
              // </Box>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
