"use client";
import { Box, Button, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import React from "react";
import { BLOG1 } from "@/values/Constants/ImageConstants";
import { Icon } from "@iconify/react";

export default function BlogItem() {
  return (
    <Box sx={MUIStyle.BlogItemMain}>
      <Box sx={MUIStyle.BlogImgItem}>
        <Box sx={MUIStyle.BlogImg} component={"img"} src={BLOG1} />
      </Box>
      <Box sx={MUIStyle.BlogContent}>
        <Typography variant="h4" sx={MUIStyle.BlogTitle}>
          Virtual Construction Management Platform
        </Typography>
        <Typography variant="body1" sx={MUIStyle.BlogDesc} className="BlogContent"> Ant Eye tools
          will be integrated in a virtual, BIM-enabled, cloud-based construction
          management platform which is structured to mirror the most advanced
          integrated design and delivery frameworks for the building sector.
        </Typography>
        <Button href="/blog-details" sx={MUIStyle.CustomBtn}>
        Read More
          <Box component={"span"} sx={MUIStyle.BtnIcon}>
            <Icon icon="solar:arrow-right-up-outline" />
          </Box>
        </Button>
      </Box>
    </Box>
  );
}
