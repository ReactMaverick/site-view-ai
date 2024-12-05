"use client";
import { Box, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import React from "react";


export default function CookiePolicy() {

  return (
      <Box sx={MUIStyle.ContactSec}>
        <Container maxWidth="xl">
              <Typography variant="h4" sx={MUIStyle.SubHeading}>
              Privacy Policy
              </Typography>
        </Container>
      </Box>
  );
}
