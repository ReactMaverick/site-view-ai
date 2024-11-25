"use client";
import { Box, Container, Paper, styled, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import React from "react";
import Grid from "@mui/material/Grid2";
import { TEAM, TEAM2, TEAM3, TEAM4, TEAM5, TEAM6, TEAM7, WAVY } from "@/values/Constants/ImageConstants";
import { commonColor } from "@/values/Colors/CommonColor";
export default function OurTeam() {
  return (
    <Box sx={MUIStyle.BuildForMain}>
      <Container maxWidth="xl">
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
        <Box sx={MUIStyle.OurTeamSec}>
          <Grid container spacing={3}>
            <Grid size={6}>
                <Box sx={{...MUIStyle.OurTeamBox,  background:commonColor.greenFade1}}>
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
                    sx={MUIStyle.OurTeamImg}
                  />
                </Box>
            </Grid>
            <Grid size={6}>
            <Box sx={{...MUIStyle.OurTeamBox,  background:commonColor.greenFade2}}>
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
            <Grid size={4.3}>
            <Box sx={{...MUIStyle.OurTeamBox,  background:commonColor.greenFade3}}>
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
            <Grid size={3.2}>
            <Box sx={{...MUIStyle.OurTeamBox,  background:commonColor.greenFade1}}>
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
            <Grid size={4.5}>
            <Box sx={{...MUIStyle.OurTeamBox,  background:commonColor.greenFade2}}>
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
            <Grid size={5.5}>
            <Box sx={{...MUIStyle.OurTeamBox,  background:commonColor.greenFade1}}>
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
            <Grid size={6.5}>
            <Box sx={{...MUIStyle.OurTeamBox,  background:commonColor.greenFade3}}>
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

