"use client";
import { Box } from "@mui/material";
import styles from "./Blogs.module.css";
import BannerNew from "@/components/BannerNew/BannerNew";
import React from "react";
import SingleBlogContent from "@/components/SingleBlogContent/SingleBlogContent";
import BlogGrid from "@/components/BlogGrid/BlogGrid";

export default function () {
  return (
    <Box className={styles.BlogSec}>
      <BannerNew />
      <SingleBlogContent />
      <BlogGrid />
    </Box>
  );
}
