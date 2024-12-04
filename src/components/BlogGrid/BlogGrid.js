"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import React from "react";
import { BLOGIMG } from "@/values/Constants/ImageConstants";
import { Icon } from "@iconify/react";
import BlogItem from "../BlogItem/BlogItem";

export default function BlogGrid() {
  return (
    <Box sx={MUIStyle.SingleBlogMain}>
      <Container maxWidth="xl">
<Box sx={MUIStyle.SingleBlogGrid}>
  <BlogItem/>
  <BlogItem/>
  <BlogItem/>
  <BlogItem/>
  <BlogItem/>
  </Box>
      </Container>
    </Box>
  );
}
