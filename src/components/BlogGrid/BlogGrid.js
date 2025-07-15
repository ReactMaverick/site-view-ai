"use client";
import { Box, Button, Container, Typography, CircularProgress } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import React, { useEffect } from "react";
import BlogItem from "../BlogItem/BlogItem";
import { useDispatch, useSelector } from "react-redux";
import { SelectBlogsLoading, getAllBlogs } from "@/redux/blogSlice";

export default function BlogGrid() {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.blogs);
  const blogsLoading = useSelector(SelectBlogsLoading);

  useEffect(() => {
    dispatch(getAllBlogs());
  }, [dispatch]);

  if (blogsLoading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "40vh" }}>
        <CircularProgress />
      </Box>
    );
  }
  if (!blogsLoading && blogs.length === 0) {
    return (
      <Box sx={{ textAlign: "center", padding: "20px" }}>
        <Typography variant="h6">No blogs available</Typography>
      </Box>
    );
  }

  return (
    <Box sx={MUIStyle.SingleBlogMain}>
      <Container maxWidth="xl">
        <Box sx={MUIStyle.SingleBlogGrid}>
          {blogs.map((item, i) => (
            <BlogItem
              key={item.id || i}
              title={item.title}
              desc={item.short_description}
              img={item.banner_image}
              slug={item.id}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
