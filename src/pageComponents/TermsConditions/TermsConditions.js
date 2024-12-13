"use client";
import { Box, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import React from "react";

export default function TermsConditions() {
  return (
    <Box sx={MUIStyle.ContactSec}>
      <Container maxWidth="xl">
        <Box sx={MUIStyle.ContactHeadingBox}>
          <Typography variant="h1" sx={MUIStyle.Heading}>
            Terms Conditions
          </Typography>
        </Box>
        <Box sx={MUIStyle.ContactContentMainBox}>
          <Box sx={MUIStyle.ContactContentBox}>
            <Typography variant="h3" sx={MUIStyle.SubHeading}>
              Introduction
            </Typography>
            <Typography variant="body1" sx={MUIStyle.ContactContentText}>
              These Terms & Conditions (`&quot;`Terms`&quot;`) govern your use of SiteView.ai.
              By accessing our services, you agree to comply with these Terms.
            </Typography>
          </Box>
          <Box sx={MUIStyle.ContactContentBox}>
            <Typography variant="h3" sx={MUIStyle.SubHeading}>
              Use of Services
            </Typography>
            <Box component={"ul"} sx={MUIStyle.ContactContentList}>
              <Box
                component={"li"}
                sx={[
                  MUIStyle.ContactContentListItem,
                  {
                    marginBottom: "12px",
                    padding: "0px",
                  },
                ]}
              >
                <Box
                  sx={[
                    MUIStyle.pointBox,
                    {
                      marginBottom: "12px",
                      padding: "0px",
                    },
                  ]}
                >
                  <Box component={"span"} sx={MUIStyle.Dot} />
                  <Typography variant="h5" sx={MUIStyle.ContactContenttitle}>
                    You may use SiteView.ai for lawful purposes only.
                  </Typography>
                </Box>
              </Box>
              <Box
                component={"li"}
                sx={[
                  MUIStyle.ContactContentListItem,
                  {
                    marginBottom: "12px",
                    padding: "0px",
                  },
                ]}
              >
                <Box
                  sx={[
                    MUIStyle.pointBox,
                    {
                      marginBottom: "12px",
                      padding: "0px",
                    },
                  ]}
                >
                  <Box component={"span"} sx={MUIStyle.Dot} />
                  <Typography variant="h5" sx={MUIStyle.ContactContenttitle}>
                    Unauthorized access, misuse, or interference with platform
                    operations is strictly prohibited.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={MUIStyle.ContactContentBox}>
            <Typography variant="h3" sx={MUIStyle.SubHeading}>
              User Accounts
            </Typography>
            <Box component={"ul"} sx={MUIStyle.ContactContentList}>
              <Box
                component={"li"}
                sx={[
                  MUIStyle.ContactContentListItem,
                  {
                    marginBottom: "12px",
                    padding: "0px",
                  },
                ]}
              >
                <Box
                  sx={[
                    MUIStyle.pointBox,
                    {
                      marginBottom: "12px",
                      padding: "0px",
                    },
                  ]}
                >
                  <Box component={"span"} sx={MUIStyle.Dot} />
                  <Typography variant="h5" sx={MUIStyle.ContactContenttitle}>
                    You are responsible for securing your account credentials.
                  </Typography>
                </Box>
              </Box>
              <Box
                component={"li"}
                sx={[
                  MUIStyle.ContactContentListItem,
                  {
                    marginBottom: "12px",
                    padding: "0px",
                  },
                ]}
              >
                <Box
                  sx={[
                    MUIStyle.pointBox,
                    {
                      marginBottom: "12px",
                      padding: "0px",
                    },
                  ]}
                >
                  <Box component={"span"} sx={MUIStyle.Dot} />
                  <Typography variant="h5" sx={MUIStyle.ContactContenttitle}>
                    Notify us immediately of any unauthorized account access or
                    breaches.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={MUIStyle.ContactContentBox}>
            <Typography variant="h3" sx={MUIStyle.SubHeading}>
              Intellectual Property
            </Typography>
            <Typography variant="body1" sx={MUIStyle.ContactContentText}>
              All content, features, and technology on SiteView.ai are the exclusive property of SiteView.ai. Unauthorized use, reproduction, or distribution is prohibited.
            </Typography>
          </Box>
          <Box sx={MUIStyle.ContactContentBox}>
            <Typography variant="h3" sx={MUIStyle.SubHeading}>
              Termination
            </Typography>
            <Typography variant="body1" sx={MUIStyle.ContactContentText}>
              We reserve the right to terminate accounts violating these Terms without notice.
            </Typography>
          </Box>
          <Box sx={MUIStyle.ContactContentBox}>
            <Typography variant="h3" sx={MUIStyle.SubHeading}>
              Governing Law
            </Typography>
            <Typography variant="body1" sx={MUIStyle.ContactContentText}>
              These Terms are governed by the laws of [your jurisdiction], and disputes will be resolved in local courts.
            </Typography>
          </Box>
          <Box sx={MUIStyle.ContactContentBox}>
            <Typography variant="h3" sx={MUIStyle.SubHeading}>
              Changes to Terms
            </Typography>
            <Typography variant="body1" sx={MUIStyle.ContactContentText}>
              We reserve the right to update these Terms at any time. Continued use constitutes acceptance of the updated Terms.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
