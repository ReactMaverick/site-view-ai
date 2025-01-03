"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import React from "react";
import BlogItem from "../BlogItem/BlogItem";
import { BlogContent } from "./BlogContent";

export default function BlogGrid() {
  return (
    <Box sx={MUIStyle.SingleBlogMain}>
      <Container maxWidth="xl">
        <Box sx={MUIStyle.SingleBlogGrid}>
          {BlogContent.map((item, i) => (
            <BlogItem
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
