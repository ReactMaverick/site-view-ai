"use client";
import { Box, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import React from "react";


export default function PrivacyPolicy() {

  return (
      <Box sx={MUIStyle.ContactSec}>
        <Container maxWidth="xl">
          <Box sx={MUIStyle.ContactHeadingBox}>
              <Typography variant="h1" sx={MUIStyle.Heading}>
              Privacy Policy
              </Typography>
              </Box>
        </Container>
      </Box>
  );
}
