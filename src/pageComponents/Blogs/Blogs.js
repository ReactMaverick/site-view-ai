"use client";
import { Box } from "@mui/material";
import styles from "./Blogs.module.css";
import BannerNew from "@/components/BannerNew/BannerNew";
import React from "react";
import SingleBlogContent from "@/components/SingleBlogContent/SingleBlogContent";
import BlogGrid from "@/components/BlogGrid/BlogGrid";

export default function Blogs() {
  return (
    <Box className={styles.BlogSec}>
      <BannerNew
        headerButtonText="Constructive Thinking"
        title="Explore trends, tips, and tech shaping the future of construction."
        subtitle="Dive into topics that elevate your construction and engineering strategies"
        button={false}
      />
      {/* <SingleBlogContent /> */}
      <BlogGrid />
    </Box>
  );
}
