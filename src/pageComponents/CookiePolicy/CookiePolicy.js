"use client";
import { Box, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import React from "react";


export default function CookiePolicy() {

  return (
    <Box sx={MUIStyle.ContactSec}>
    <Container maxWidth="xl">
      <Box sx={MUIStyle.ContactHeadingBox}>
        <Typography variant="h1" sx={MUIStyle.Heading}>
        Cookie Policy
        </Typography>
      </Box>
      <Box sx={MUIStyle.ContactContentMainBox}>
        <Box sx={MUIStyle.ContactContentBox}>
          <Typography variant="h3" sx={MUIStyle.SubHeading}>
            Introduction
          </Typography>
          <Typography variant="body1" sx={MUIStyle.ContactContentText}>
          This Cookie Policy explains how SiteView.ai uses cookies to improve user experience and analyze platform performance.
          </Typography>
        </Box>
        <Box sx={MUIStyle.ContactContentBox}>
          <Typography variant="h3" sx={MUIStyle.SubHeading}>
          What Are Cookies?
          </Typography>
          <Typography variant="body1" sx={MUIStyle.ContactContentText}>
          Cookies are small text files stored on your device when you access our platform. They help us recognize you and enhance functionality.
          </Typography>
        </Box>

        <Box sx={MUIStyle.ContactContentBox}>
          <Typography variant="h3" sx={MUIStyle.SubHeading}>
          Types of Cookies We Use
          </Typography>
          <Box component={"ul"} sx={MUIStyle.ContactContentList}>
          <Box component={"li"} sx={MUIStyle.ContactContentListItem}>
              <Box component={"ul"} sx={MUIStyle.SubUL}>
                <Box component={"li"} sx={MUIStyle.SubLi}>
                  <Box component={"span"} sx={MUIStyle.DotGrey} />
                  <Typography variant="body1" sx={MUIStyle.Textgrey}>
                    <strong> Essential Cookies:</strong> Enable platform functionality, such as login and navigation.
                  </Typography>
                </Box>
                <Box component={"li"} sx={MUIStyle.SubLi}>
                  <Box component={"span"} sx={MUIStyle.DotGrey} />
                  <Typography variant="body1" sx={MUIStyle.Textgrey}>
                    <strong> Performance Cookies: </strong> Analyze site usage to improve performance.
                  </Typography>
                </Box>
                <Box component={"li"} sx={MUIStyle.SubLi}>
                  <Box component={"span"} sx={MUIStyle.DotGrey} />
                  <Typography variant="body1" sx={MUIStyle.Textgrey}>
                    <strong>Targeting Cookies: </strong> Deliver relevant advertisements and track campaign effectiveness.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={MUIStyle.ContactContentBox}>
          <Typography variant="h3" sx={MUIStyle.SubHeading}>
          Managing Cookies
          </Typography>
          <Typography variant="body1" sx={MUIStyle.ContactContentText}>
          You can manage or disable cookies through browser settings. Note that disabling essential cookies may impact platform functionality.
          </Typography>
        </Box>
        <Box sx={MUIStyle.ContactContentBox}>
          <Typography variant="h3" sx={MUIStyle.SubHeading}>
          Updates to This Policy
          </Typography>
          <Typography variant="body1" sx={MUIStyle.ContactContentText}>
          This Cookie Policy may be updated periodically. Continued use of the platform constitutes acceptance of the updated policy.
          </Typography>
        </Box>
      </Box>
    </Container>
  </Box>
  );
}
