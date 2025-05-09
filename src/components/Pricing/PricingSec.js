"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import React from "react";
import { PricingBoxContent } from "./PricingBoxContent";
import PricingBox from "./PricingBox";

export default function PricingSec() {
  return (
    <Box sx={MUIStyle.PricingSec}>
      <Container maxWidth="xl">
        <Box sx={MUIStyle.PricingSecHeadingBoxOuter} className="onsite-heading">
          <Box sx={MUIStyle.PricingSecHeadingBoxInner}>
            <Typography variant="h2" sx={MUIStyle.Heading}>
              What You Get With Every Plan
            </Typography>
          </Box>
        </Box>
        <Box sx={MUIStyle.PricingSecGrid}>
          {PricingBoxContent.map((item, i) => (
            <PricingBox
              key={i}
              title={item.title}
              desc={item.desc}
              btn={item.btn}
              img={item.img}
              slug={item.slug}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
