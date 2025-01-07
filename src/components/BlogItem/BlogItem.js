"use client";
import { Box, Button, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import React from "react";
import { BLOG1 } from "@/values/Constants/ImageConstants";
import { Icon } from "@iconify/react";

export default function BlogItem({
  title = "Virtual Construction Management Platform",
  desc = "Ant Eye tools will be integrated in a virtual, BIM-enabled, cloud-based construction management platform which is structured to mirror the most advanced integrated design and delivery frameworks for the building sector.",
  btn = "Read More",
  img = BLOG1,
  slug = "virtual-construction",
}) {
  return (
    <Box sx={MUIStyle.BlogItemMain}>
      <Box sx={MUIStyle.BlogImgItem}>
        <Box sx={MUIStyle.BlogImg} component={"img"} src={img} />
      </Box>
      <Box sx={MUIStyle.BlogContent}>
        <Box>
          <Typography variant="h4" sx={MUIStyle.BlogTitle}>
            {title}
          </Typography>
          <Typography variant="body1" sx={MUIStyle.BlogDesc} className="BlogContent">
            {desc}
          </Typography>
        </Box>
        <Button
          href={"/blog-details/" + slug}
          sx={MUIStyle.CustomBtn}
        >
          {btn}
          <Box component={"span"} sx={MUIStyle.BtnIcon}>
            <Icon icon="solar:arrow-right-up-outline" />
          </Box>
        </Button>
      </Box>
    </Box>
  );
}
