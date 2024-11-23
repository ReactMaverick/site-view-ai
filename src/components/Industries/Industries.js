"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import ProjectBox from "../ProjectBox/ProjectBox";


export default function Industries() {
 
  return (
    <Box sx={MUIStyle.IndustriesMain}>
      <Container maxWidth="xl">
        <Box sx={MUIStyle.IndustriesHeadingBoxOuter}>
          <Box sx={MUIStyle.IndustriesHeadingBoxInner}>
            <Typography variant="h4" sx={MUIStyle.SubHeading}>
            Multiple industries, one simple platform
            </Typography>
            <Typography variant="h2" sx={MUIStyle.Heading}>
            Delivering Precision and Clarity Through Virtual and Visual Insights
            </Typography>
          </Box>
        </Box>

        <Box sx={MUIStyle.IndustriesSec}>
        {["Oil & Gas",
         "Museums & Galleries",
         "Manufacturing & Industrial",
         "Facility Management",
         "Forestry & Agriculture",
         "Construction & Engineering",
         "Data Centre",

        ].map((industry) => (
        <Button key={industry} className="IndustriesButton" sx={MUIStyle.IndustriesButton}>{industry}</Button>
        ))}
          </Box>
  
      </Container>
    </Box>
  );
}
