"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import React, { useState } from "react";
import ButtonTooltip from "../ButtonTooltip/ButtonTooltip";

export default function Industries() {
  const [hoveredButton, setHoveredButton] = useState(null);

  const handleMouseEnter = (industry) => {
    setHoveredButton(industry);
  };

  const handleMouseLeave = () => {
    setHoveredButton(null);
  };

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
          {[
            "Oil & Gas",
            "Museums & Galleries",
            "Manufacturing & Industrial",
            "Facility Management",
            "Forestry & Agriculture",
            "Construction & Engineering",
            "Data Centre",
            "Hospitals & Clinics",
            "Telecommunications & IT",
            "Renewable Energy",
            "Infrastructure Projects",
            "Event Venues",
            "Government & Public Services",
            "Retail Stores",
            "Disaster Relief & Restoration",
            "Insurance & Risk Management",
            "Hotels & Resorts",
            "Real Estate",
            "Mining & Resources",
            "Universities & Schools",
          ].map((industry) => (
            <Box
              key={industry}
              onMouseEnter={() => handleMouseEnter(industry)}
              onMouseLeave={handleMouseLeave}
              sx={{ position: "relative", display: "inline-block" }}
            >
              <Button
                className="IndustriesButton"
                sx={MUIStyle.IndustriesButton}
              >
                {industry}
              </Button>
              {hoveredButton === industry && (
                <Box sx={MUIStyle.CustomTooltip}>
                  <ButtonTooltip industry={industry} />
                </Box>
              )}
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
}