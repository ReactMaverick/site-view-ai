"use client";
import { Box, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import ProjectBox from "../ProjectBox/ProjectBox";


export default function Project() {
 
  return (
    <Box sx={MUIStyle.PartnersMain}>
      <Container maxWidth="xl">
        <Box sx={MUIStyle.PartnersHeadingBoxOuter}>
          <Box sx={MUIStyle.PartnersHeadingBoxInner}>
            <Typography variant="h4" sx={MUIStyle.SubHeading}>
            Take that important decision in minutes,Not Hours
            </Typography>
            <Typography variant="h2" sx={MUIStyle.Heading}>
            your project, anywhere, anytime
            </Typography>
          </Box>
        </Box>

        <Box sx={MUIStyle.ProjectSec}>
          <ProjectBox/>
          </Box>
  
      </Container>
    </Box>
  );
}
