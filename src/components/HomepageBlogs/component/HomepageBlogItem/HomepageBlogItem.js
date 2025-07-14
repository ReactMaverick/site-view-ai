"use client"
import { Box, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Icon } from '@iconify/react';
import { MUIStyle } from './MUIStyle'

const HomepageBlogItem = ({ blog }) => {
    return (
        <Box sx={MUIStyle.BlogBox}>
            <Box sx={MUIStyle.BlogImageBox}>
                {/* Image can be added here */}
                <Image src={blog.image} alt="Blog Image" layout="cover" width={800} height={800} />
            </Box>
            <Box sx={MUIStyle.BlogContent}>
                <Typography variant="body1" sx={MUIStyle.BlogDescription} className='line-clamp-3'>
                    {blog.title}
                </Typography>
                <Link href={`/blog/${blog.slug}`}>
                    <Box sx={MUIStyle.BlogBtn}>
                        <Typography variant="body2" sx={MUIStyle.BlogBtnText}>
                            Read More
                        </Typography>
                        <Box sx={MUIStyle.BlogBtnIcon}>
                            <Icon icon="meteor-icons:angle-right" />
                        </Box>
                    </Box>
                </Link>
            </Box>
        </Box >
    )
}

export default HomepageBlogItem