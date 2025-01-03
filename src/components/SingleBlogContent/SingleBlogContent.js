"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import React from "react";
import { BLOGIMG } from "@/values/Constants/ImageConstants";
import { Icon } from "@iconify/react";

export default function SingleBlogContent() {
  return (
    <Box sx={MUIStyle.SingleBlogMain}>
      <Container maxWidth="xl">
        <Box sx={MUIStyle.SingleBlogRow}>
          <Box sx={MUIStyle.SingleBlogColRight}>
            <Box component={"img"} src={BLOGIMG} alt="Vision" />
          </Box>
          <Box sx={MUIStyle.SingleBlogColLeft}>
            <Box sx={MUIStyle.SingleBlogContent}>
              <Typography variant="h2" sx={MUIStyle.Heading}>
                ADVANCES IN CONSTRUCTION ENGINEERING
              </Typography>
              <Typography variant="body1" sx={MUIStyle.SubHeading}>
                A principle of construction is a use of an applied ontology
                based in the upper ontology. In practice, these ontologies take
                on a form of breakdown structures such as the work breakdown
                structure. Usually breakdown structures form metadata to
                represent a construction activity; there are notable cases at
                exceptionally large construction companies where they are simply
                numbered. In practice, an ontology approach requires a semantic
                integration approach to construction data so to capture a
                present status of construction activities (i.e., the project).
              </Typography>

            </Box>
            <Button sx={MUIStyle.CustomBtn}>
              Read More
              <Box component={"span"} sx={MUIStyle.BtnIcon}>
                <Icon icon="solar:arrow-right-up-outline" />
              </Box>
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
