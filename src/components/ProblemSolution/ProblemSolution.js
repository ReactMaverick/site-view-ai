"use client";
import React, { useEffect } from "react";
import { Box, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import Problem from "../Problem/Problem";
import Grid from "@mui/material/Grid2";
import Solution from "../Solution/Solution";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProblemSolution() {
  const problemSolutionPairs = [
    { problem: <Problem />, solution: <Solution />, key: "pair1" },
    { problem: <Problem />, solution: <Solution />, key: "pair2" },
    { problem: <Problem />, solution: <Solution />, key: "pair3" },
    { problem: <Problem />, solution: <Solution />, key: "pair4" },
  ];

  useEffect(() => {
    const sections = document.querySelectorAll(".problem-solution-pair");

    sections.forEach((section) => {
      const [problem, solution] = section.querySelectorAll(".box");

      // Animation for Problem (move left)
      gsap.fromTo(
        problem,
        { x: 0,},
        {
          x: 0,
          scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        solution,
        { x: 0,},
        {
          x: 200,
          scrollTrigger: {
            trigger: section,
            start: "top center",
            end: "bottom center",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <Box sx={MUIStyle.ProblemSolutionMain}>
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
              <Grid
                container
                spacing={2}
                key={key}
                className="problem-solution-pair"
              >
                <Grid xs={6} md={6} lg={6} xl={6}sx={MUIStyle.BoxOuter} >
                  <Box sx={MUIStyle.BoxOuterLeft} className="box">
                    {problem}
                  </Box>
                </Grid>
                <Grid xs={6} md={6} lg={6} xl={6}>
                  <Box sx={MUIStyle.BoxOuterRight} className="box">
                    {solution}
                  </Box>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
