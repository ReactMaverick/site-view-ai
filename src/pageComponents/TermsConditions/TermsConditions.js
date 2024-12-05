"use client";
import { Box, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import React from "react";

export default function TermsConditions() {

  return (
    <Box sx={MUIStyle.ContactSec}>
    <Container maxWidth="xl">
          <Typography variant="h4" sx={MUIStyle.SubHeading}>
          TermsConditions
          </Typography>
    </Container>
  </Box>
  );
}
