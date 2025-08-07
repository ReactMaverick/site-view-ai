"use client"
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Icon } from '@iconify/react';
import { MUIStyle } from './MUIStyle'

const HomepageBlogItem = ({ blog }) => {
    // {
      //   "id": "TpqZfkig2wbt",
      //     "title": "test2 By Sarfaraj",
      //       "short_description": "hello",
      //         "banner_image": "https://site-view-ai.s3.us-east-1.amazonaws.com/media/blog_images/wp1894046.png",
      //           "created_at": "2025-07-12T12:11:21.713992Z",
      //             "updated_at": "2025-07-12T12:11:21.714020Z"
      // }
    return (
        <Link href={`/blog-details/${blog.id}`} passHref>
    <Box  sx={MUIStyle.BlogBox} style={{ textDecoration: 'none', color: 'inherit' }}>
        <Box sx={MUIStyle.BlogImageBox}>
            <Image
                src={blog.banner_image}
                alt="Blog Image"
                layout="cover"
                width={800}
                height={800}
            />
        </Box>
        <Box sx={MUIStyle.BlogContent}>
            <Typography
                variant="body1"
                sx={MUIStyle.BlogDescription}
                className='line-clamp-3'
            >
                {blog.title}
            </Typography>
            <Box sx={MUIStyle.BlogBtn}>
                <Typography variant="body2" sx={MUIStyle.BlogBtnText}>
                    Read More
                </Typography>
                <Box sx={MUIStyle.BlogBtnIcon}>
                    <Icon icon="meteor-icons:angle-right" />
                </Box>
            </Box>
        </Box>
    </Box>
</Link>

    )
}

export default HomepageBlogItem