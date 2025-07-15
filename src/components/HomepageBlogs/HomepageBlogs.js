"use client"
import { Box, Button, Container, Typography } from '@mui/material'
import React, { use, useEffect } from 'react'
import { MUIStyle } from './MUIStyle'
import HomepageBlogItem from './component/HomepageBlogItem/HomepageBlogItem'
import { BLOG1, BLOG2, BLOG3, BLOG4, BLOG5, BLOG6 } from '@/values/Constants/ImageConstants'
import Link from 'next/link'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBlogs, SelectBlogs, SelectBlogsLoading } from '@/redux/blogSlice'



// This component renders the homepage blogs section
// It includes a heading and a grid of blog items
export const blogData = [
  {
    id: 1,
    image: BLOG1,
    title: "What Is SitePace.ai? The Future of Construction Site Monitoring, Documentation, and Collaboration",
    slug: "what-is-sitepace-ai-future-construction-monitoring"
  },
  {
    id: 2,
    image: BLOG2,
    title: "How AI is Revolutionizing Construction Site Safety and Efficiency",
    slug: "ai-revolutionizing-construction-site-safety"
  },
  {
    id: 3,
    image: BLOG3,
    title: "Real-time Collaboration Tools for Modern Construction Teams",
    slug: "real-time-collaboration-tools-construction"
  },
  {
    id: 4,
    image: BLOG4,
    title: "The Impact of AI on Construction Project Management",
    slug: "impact-ai-construction-project-management"
  },
  {
    id: 5,
    image: BLOG5,
    title: "Leveraging AI for Enhanced Construction Site Productivity",
    slug: "leveraging-ai-construction-site-productivity"
  },
  {
    id: 6,
    image: BLOG6,
    title: "Future Trends in Construction Technology: What to Expect",
    slug: "future-trends-construction-technology"
  }

]


const HomepageBlogs = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.blogs);
  const blogsLoading = useSelector(SelectBlogsLoading);
  
  useEffect(() => {
    console.log("Blogs:", blogs);
  },[blogs, blogsLoading])
  useEffect(() => {
    dispatch(getAllBlogs());
  },[])
  return (
    <Box sx={MUIStyle.BlogsSectionMain}>
      <Container maxWidth="xl">
        <Box sx={MUIStyle.BuildForHeadingBoxOuter}>
          <Box sx={MUIStyle.BuildForHeadingBoxInner}>
            <Typography variant="h4" sx={MUIStyle.SubHeading}>
              SitePace Blogs & Articles
            </Typography>
            <Typography variant="h2" sx={MUIStyle.Heading}>
              Explore the future of connected construction.
            </Typography>
          </Box>
        </Box>
        <Box sx={MUIStyle.BlogsSectionContent}>
          {blogs
            .filter(blog => blog.home_page_blog)
            .map(blog => (
              <HomepageBlogItem
                key={blog.id}
                blog={blog}
              />
            ))}
        </Box>
        <Box>
          {/* see all button */}
          <Box sx={MUIStyle.SeeAllBtnBox}>
            <Button
              href='/blogs'
              sx={MUIStyle.HeaderBtn}
              variant="contained" >See All
            </Button>
          </Box>

        </Box>
      </Container>
    </Box>
  )
}

export default HomepageBlogs