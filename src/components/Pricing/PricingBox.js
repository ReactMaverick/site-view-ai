"use client";
import { Box, Button, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import React from "react";
import { PRICINGICON1 } from "@/values/Constants/ImageConstants";
import { commonColor } from "@/values/Colors/CommonColor";

export default function PricingBox({
  title = "Virtual Construction Management Platform",
  desc = "Ant Eye tools will be integrated in a virtual, BIM-enabled, cloud-based construction management platform which is structured to mirror the most advanced integrated design and delivery frameworks for the building sector.",
  img = PRICINGICON1,
  bgColor = commonColor.white,
}) {
  return (
    <Box
      sx={{
        ...MUIStyle.SinglePricingBox,
        backgroundColor: bgColor,
      }}
      className="pricing-box"
    >
      <Box component={"span"} sx={MUIStyle.SinglePricingIconBox}>
        <Box component={"img"} src={img} alt="Pricing Icon 1" />
      </Box>
      <Typography variant="h2" sx={MUIStyle.SinglePricingHeading}>
        {title}
      </Typography>
      <Typography variant="body1" sx={MUIStyle.SinglePricingSubHeading}>
        {desc}
      </Typography>
    </Box>
  );
}
