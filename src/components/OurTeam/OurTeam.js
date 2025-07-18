"use client";
import { Box, Container, Paper, styled, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import React, { useLayoutEffect, useRef } from "react";
import Grid from "@mui/material/Grid2";
import {
  TEAM,
  TEAM2,
  TEAM3,
  TEAM4,
  TEAM5,
  TEAM6,
  TEAM7,
  WAVY,
} from "@/values/Constants/ImageConstants";
import { commonColor } from "@/values/Colors/CommonColor";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { isSmallScreen } from "@/values/Constants/ResponsiveCheck";

export default function OurTeam() {
  const teamGridsSec = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
  }, []);

  useGSAP(() => {
    const teamGrids = gsap.utils.toArray(".ourTeamGrid");

    // Prevent hover effect on small screens
    if (isSmallScreen()) {
      return;
    }

    // const xPercentValues = [20, -20, 20, 0, -20, 20, -20];
    // const yPercentValues = [20, 20, 0, 0, 0, -20, -20];
    // const rotateZValues = [-10, 10, 0, 0, 0, 10, -10];

    const xPercentValues = [10, -10, 10, 0, -10, 10, -10];
    const yPercentValues = [10, 10, 0, 0, 0, -10, -10];
    const rotateZValues = [-5, 5, 0, 0, 0, 5, -5];

    gsap.set(teamGrids, {
      // set initial position for each grid dynamically
      xPercent: (i) => i !== 3 && xPercentValues[i],
      yPercent: (i) => i !== 3 && yPercentValues[i],
      rotateZ: (i) => i !== 3 && rotateZValues[i],
    });

    const endLocation = window.innerHeight <= 800 ? 200 : 100;

    gsap.to(teamGridsSec.current, {
      scrollTrigger: {
        trigger: teamGridsSec.current,
        start: "top top",
        end: "+=1200",
        // endTrigger: '.CTASection',
        scrub: true,
        // markers: true,
        id: `gridOuter`,
        pin: true,
      },
    });

    teamGrids.forEach((grid, i) => {
      gsap.to(grid, {
        scrollTrigger: {
          trigger: ".ourTeamGrids",
          start: "top top",
          end: "+=150",   // reduced from 300
          scrub: 0.3,      // reduced from 2 for quicker response
          // markers: true,
          id: `grid-${i}`,
        },
        xPercent: 0,
        yPercent: 0,
        rotateZ: 0,
        // duration: 3,
      });
    });
  });

  return (
    <Box sx={MUIStyle.BuildForMain} ref={teamGridsSec}>
      <Container maxWidth="xl" id="ourTeamContainer">
        <Box sx={MUIStyle.BuildForHeadingBoxOuter}>
          <Box sx={MUIStyle.BuildForHeadingBoxInner}>
            <Typography variant="h4" sx={MUIStyle.SubHeading}>
              BUILT FOR
            </Typography>
            <Typography variant="h2" sx={MUIStyle.Heading}>
              Experts Who Design, Build, and Transform the World Around Us
            </Typography>
          </Box>
        </Box>
        <Box className="ourTeamGridsOuter" sx={MUIStyle.OurTeamGridsOuter}>
          <Grid
            container
            spacing={{
              xs: 2,
              sm: 2,
              md: 2,
              lg: 2,
              xl: 2,
            }}
            className="ourTeamGrids"
          >
            <Grid
              size={{
                xs: 12,
                sm: 6,
                md: 6,
                lg: 6,
                xl: 6,
              }}
              className="ourTeamGrid"
            >
              <Box
                sx={{
                  ...MUIStyle.OurTeamBox,
                  background: commonColor.greenFade1,
                }}
              >
                <Box sx={MUIStyle.OurTeamBoxHeader}>
                  <Box
                    component={"img"}
                    src={WAVY}
                    alt="icon"
                    sx={MUIStyle.OurTeamIcon}
                  />
                  <Typography variant="h4" sx={MUIStyle.TeamRole}>
                    Project Managers
                  </Typography>
                </Box>
                <Box
                  component={"img"}
                  src={TEAM}
                  alt="Our Team"
                  className="ourTeamImg"
                  sx={MUIStyle.OurTeamImg}
                />
              </Box>
            </Grid>
            <Grid
              size={{
                xs: 12,
                sm: 6,
                md: 6,
                lg: 6,
                xl: 6,
              }}
              className="ourTeamGrid"
            >
              <Box
                sx={{
                  ...MUIStyle.OurTeamBox,
                  background: commonColor.greenFade2,
                }}
              >
                <Box sx={MUIStyle.OurTeamBoxHeader}>
                  <Box
                    component={"img"}
                    src={WAVY}
                    alt="icon"
                    sx={MUIStyle.OurTeamIcon}
                  />
                  <Typography variant="h4" sx={MUIStyle.TeamRole}>
                    General Managers
                  </Typography>
                </Box>
                <Box
                  component={"img"}
                  src={TEAM2}
                  alt="Our Team"
                  sx={MUIStyle.OurTeamImg}
                />
              </Box>
            </Grid>
            <Grid
              size={{
                xs: 12,
                sm: 6,
                md: 4.3,
                lg: 4.3,
                xl: 4.3,
              }}
              className="ourTeamGrid"
            >
              <Box
                sx={{
                  ...MUIStyle.OurTeamBox,
                  background: commonColor.greenFade3,
                }}
              >
                <Box sx={MUIStyle.OurTeamBoxHeader}>
                  <Box
                    component={"img"}
                    src={WAVY}
                    alt="icon"
                    sx={MUIStyle.OurTeamIcon}
                  />
                  <Typography variant="h4" sx={MUIStyle.TeamRole}>
                    Project Owner
                  </Typography>
                </Box>
                <Box
                  component={"img"}
                  src={TEAM3}
                  alt="Our Team"
                  sx={MUIStyle.OurTeamImg}
                />
              </Box>
            </Grid>
            <Grid
              size={{
                xs: 12,
                sm: 6,
                md: 3.2,
                lg: 3.2,
                xl: 3.2,
              }}
              className="ourTeamGrid"
            >
              <Box
                sx={{
                  ...MUIStyle.OurTeamBox,
                  background: commonColor.greenFade1,
                  position: "relative",
                  zIndex: 1,
                }}
              >
                <Box sx={MUIStyle.OurTeamBoxHeader}>
                  <Box
                    component={"img"}
                    src={WAVY}
                    alt="icon"
                    sx={MUIStyle.OurTeamIcon}
                  />
                  <Typography variant="h4" sx={MUIStyle.TeamRole}>
                    General Contractors
                  </Typography>
                </Box>
                <Box
                  component={"img"}
                  src={TEAM4}
                  alt="Our Team"
                  sx={MUIStyle.OurTeamImg}
                />
              </Box>
            </Grid>
            <Grid
              size={{
                xs: 12,
                sm: 6,
                md: 4.5,
                lg: 4.5,
                xl: 4.5,
              }}
              className="ourTeamGrid"
            >
              <Box
                sx={{
                  ...MUIStyle.OurTeamBox,
                  background: commonColor.greenFade2,
                }}
              >
                <Box sx={MUIStyle.OurTeamBoxHeader}>
                  <Box
                    component={"img"}
                    src={WAVY}
                    alt="icon"
                    sx={MUIStyle.OurTeamIcon}
                  />
                  <Typography variant="h4" sx={MUIStyle.TeamRole}>
                    Consultants
                  </Typography>
                </Box>
                <Box
                  component={"img"}
                  src={TEAM5}
                  alt="Our Team"
                  sx={MUIStyle.OurTeamImg}
                />
              </Box>
            </Grid>
            <Grid
              size={{
                xs: 12,
                sm: 6,
                md: 5.5,
                lg: 5.5,
                xl: 5.5,
              }}
              className="ourTeamGrid"
            >
              <Box
                sx={{
                  ...MUIStyle.OurTeamBox,
                  background: commonColor.greenFade1,
                }}
              >
                <Box sx={MUIStyle.OurTeamBoxHeader}>
                  <Box
                    component={"img"}
                    src={WAVY}
                    alt="icon"
                    sx={MUIStyle.OurTeamIcon}
                  />
                  <Typography variant="h4" sx={MUIStyle.TeamRole}>
                    Architects
                  </Typography>
                </Box>
                <Box
                  component={"img"}
                  src={TEAM6}
                  alt="Our Team"
                  sx={MUIStyle.OurTeamImg}
                />
              </Box>
            </Grid>
            <Grid
              size={{
                xs: 12,
                sm: 6,
                md: 6.5,
                lg: 6.5,
                xl: 6.5,
              }}
              className="ourTeamGrid"
            >
              <Box
                sx={{
                  ...MUIStyle.OurTeamBox,
                  background: commonColor.greenFade3,
                }}
              >
                <Box sx={MUIStyle.OurTeamBoxHeader}>
                  <Box
                    component={"img"}
                    src={WAVY}
                    alt="icon"
                    sx={MUIStyle.OurTeamIcon}
                  />
                  <Typography variant="h4" sx={MUIStyle.TeamRole}>
                    Designers
                  </Typography>
                </Box>
                <Box
                  component={"img"}
                  src={TEAM7}
                  alt="Our Team"
                  sx={MUIStyle.OurTeamImg}
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}
