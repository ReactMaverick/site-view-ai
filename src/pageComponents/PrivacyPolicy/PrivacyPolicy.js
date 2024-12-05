"use client";
import { Box, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import React from "react";

export default function PrivacyPolicy() {
  return (
    <Box sx={MUIStyle.ContactSec}>
      <Container maxWidth="xl">
        <Box sx={MUIStyle.ContactHeadingBox}>
          <Typography variant="h1" sx={MUIStyle.Heading}>
            Privacy Policy
          </Typography>
        </Box>
        <Box sx={MUIStyle.ContactContentMainBox}>
          <Box sx={MUIStyle.ContactContentBox}>
            <Typography variant="h3" sx={MUIStyle.SubHeading}>
              Introduction
            </Typography>
            <Typography variant="body1" sx={MUIStyle.ContactContentText}>
              At SiteView.ai, your privacy is of utmost importance. We are
              committed to safeguarding your personal data in compliance with
              global privacy regulations, including the General Data Protection
              Regulation (GDPR), California Consumer Privacy Act (CCPA),
              and other applicable laws. This Privacy Policy explains how we
              collect, use, disclose, and protect your information.
            </Typography>
          </Box>
          <Box sx={MUIStyle.ContactContentBox}>
            <Typography variant="h3" sx={MUIStyle.SubHeading}>
              Information We Collect
            </Typography>
            <Box component={"ul"} sx={MUIStyle.ContactContentList}>
              <Box component={"li"} sx={MUIStyle.ContactContentListItem}>
                <Box sx={MUIStyle.pointBox}>
                  <Box component={"span"} sx={MUIStyle.Dot} />
                  <Typography variant="h5" sx={MUIStyle.ContactContenttitle}>
                    Personal Information
                  </Typography>
                </Box>
                <Typography variant="body1" sx={MUIStyle.SubTitle}>
                  We may collect personal information directly from you,
                  including:
                </Typography>
                <Box component={"ul"} sx={MUIStyle.SubUL}>
                  <Box component={"li"} sx={MUIStyle.SubLi}>
                    <Box component={"span"} sx={MUIStyle.DotGrey} />
                    <Typography variant="body1" sx={MUIStyle.Textgrey}>
                      Name, email address, phone number, job title, and company
                      details (e.g., during account registration).
                    </Typography>
                  </Box>
                  <Box component={"li"} sx={MUIStyle.SubLi}>
                    <Box component={"span"} sx={MUIStyle.DotGrey} />
                    <Typography variant="body1" sx={MUIStyle.Textgrey}>
                      Billing information such as payment methods and invoices
                      for paid services.
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box component={"li"} sx={MUIStyle.ContactContentListItem}>
                <Box sx={MUIStyle.pointBox}>
                  <Box component={"span"} sx={MUIStyle.Dot} />
                  <Typography variant="h5" sx={MUIStyle.ContactContenttitle}>
                    Automatically Collected Information
                  </Typography>
                </Box>
                <Typography variant="body1" sx={MUIStyle.SubTitle}>
                  When you use our platform, we may collect:
                </Typography>
                <Box component={"ul"} sx={MUIStyle.SubUL}>
                  <Box component={"li"} sx={MUIStyle.SubLi}>
                    <Box component={"span"} sx={MUIStyle.DotGrey} />
                    <Typography variant="body1" sx={MUIStyle.Textgrey}>
                      <strong> Technical Data:</strong> IP address, browser
                      type, device information, and operating system.
                    </Typography>
                  </Box>
                  <Box component={"li"} sx={MUIStyle.SubLi}>
                    <Box component={"span"} sx={MUIStyle.DotGrey} />
                    <Typography variant="body1" sx={MUIStyle.Textgrey}>
                      <strong> Usage Data: </strong> Platform features used,
                      session durations, and navigation paths.
                    </Typography>
                  </Box>
                  <Box component={"li"} sx={MUIStyle.SubLi}>
                    <Box component={"span"} sx={MUIStyle.DotGrey} />
                    <Typography variant="body1" sx={MUIStyle.Textgrey}>
                      <strong>Geolocation Data: </strong>With your consent,
                      approximate location for personalized services. 
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Box component={"li"} sx={MUIStyle.ContactContentListItem}>
                <Box sx={MUIStyle.pointBox}>
                  <Box component={"span"} sx={MUIStyle.Dot} />
                  <Typography variant="h5" sx={MUIStyle.ContactContenttitle}>
                    Third-Party Data
                  </Typography>
                </Box>
                <Typography variant="body1" sx={MUIStyle.SubTitle}>
                  We may receive data from third-party services such as
                  integrations with other tools, marketing partners, or public
                  sources.
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box sx={MUIStyle.ContactContentBox}>
            <Typography variant="h3" sx={MUIStyle.SubHeading}>
            How We Use Your Data
            </Typography>
            <Box component={"ul"} sx={MUIStyle.ContactContentList}>
              <Box component={"li"} sx={MUIStyle.ContactContentListItem}>
                  <Typography variant="h5" sx={[MUIStyle.ContactContenttitle,{marginBottom:"24px",}]}>
                  Your data is used for the following purposes: 
                  </Typography>
                <Box component={"ul"} sx={MUIStyle.SubUL}>
                  <Box component={"li"} sx={MUIStyle.SubLi}>
                    <Box component={"span"} sx={MUIStyle.DotGrey} />
                    <Typography variant="body1" sx={MUIStyle.Textgrey}>
                    To provide and maintain SiteView.ai services.
                    </Typography>
                  </Box>
                  <Box component={"li"} sx={MUIStyle.SubLi}>
                    <Box component={"span"} sx={MUIStyle.DotGrey} />
                    <Typography variant="body1" sx={MUIStyle.Textgrey}>
                    To improve platform functionality and user experience.
                    </Typography>
                  </Box>
                  <Box component={"li"} sx={MUIStyle.SubLi}>
                    <Box component={"span"} sx={MUIStyle.DotGrey} />
                    <Typography variant="body1" sx={MUIStyle.Textgrey}>
                    To send service-related communications (e.g., system updates, feature announcements).
                    </Typography>
                  </Box>
                  <Box component={"li"} sx={MUIStyle.SubLi}>
                    <Box component={"span"} sx={MUIStyle.DotGrey} />
                    <Typography variant="body1" sx={MUIStyle.Textgrey}>
                    To process payments, verify accounts, and ensure security.
                    </Typography>
                  </Box>
                  <Box component={"li"} sx={MUIStyle.SubLi}>
                    <Box component={"span"} sx={MUIStyle.DotGrey} />
                    <Typography variant="body1" sx={MUIStyle.Textgrey}>
                    To comply with legal obligations or respond to regulatory requests.
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Typography variant="body1" sx={MUIStyle.SubTitle}>
                  We may receive data from third-party services such as
                  integrations with other tools, marketing partners, or public
                  sources.
                </Typography>
            </Box>
          </Box>
          <Box sx={MUIStyle.ContactContentBox}>
            <Typography variant="h3" sx={MUIStyle.SubHeading}>
            Sharing Your Information
            </Typography>
            <Box component={"ul"} sx={MUIStyle.ContactContentList}>
            <Typography variant="h5" sx={[MUIStyle.ContactContenttitle,{marginBottom:"0px",}]}>
            We do not sell your personal information. Data may be shared only with:
                  </Typography>
            <Box component={"li"}  sx={[
                  MUIStyle.ContactContentListItem,
                  {
                    marginBottom: "20px",
                    padding: "0px",
                  },
                ]}>
                <Box component={"ul"} sx={MUIStyle.SubUL}>
                  <Box component={"li"} sx={MUIStyle.SubLi}>
                    <Box component={"span"} sx={MUIStyle.DotGrey} />
                    <Typography variant="body1" sx={MUIStyle.Textgrey}>
                      <strong> Technical Data:</strong> IP address, browser
                      type, device information, and operating system.
                    </Typography>
                  </Box>
                  <Box component={"li"} sx={MUIStyle.SubLi}>
                    <Box component={"span"} sx={MUIStyle.DotGrey} />
                    <Typography variant="body1" sx={MUIStyle.Textgrey}>
                      <strong> Usage Data: </strong> Platform features used,
                      session durations, and navigation paths.
                    </Typography>
                  </Box>
                  <Box component={"li"} sx={MUIStyle.SubLi}>
                    <Box component={"span"} sx={MUIStyle.DotGrey} />
                    <Typography variant="body1" sx={MUIStyle.Textgrey}>
                      <strong>Geolocation Data: </strong>With your consent,
                      approximate location for personalized services. 
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={MUIStyle.ContactContentBox}>
            <Typography variant="h3" sx={MUIStyle.SubHeading}>
            Your Rights
            </Typography>
            <Box component={"ul"} sx={MUIStyle.ContactContentList}>
            <Typography variant="h5" sx={[MUIStyle.ContactContenttitle,{marginBottom:"0px",}]}>
            Under global privacy laws, you may:
                  </Typography>
            <Box component={"li"}  sx={[
                  MUIStyle.ContactContentListItem,
                  {
                    marginBottom: "20px",
                    padding: "0px",
                  },
                ]}>
                <Box component={"ul"} sx={MUIStyle.SubUL}>
                  <Box component={"li"} sx={MUIStyle.SubLi}>
                    <Box component={"span"} sx={MUIStyle.DotGrey} />
                    <Typography variant="body1" sx={MUIStyle.Textgrey}>
                      <strong>Access and Portability: </strong> Request access to your data or receive it in a portable format.
                    </Typography>
                  </Box>
                  <Box component={"li"} sx={MUIStyle.SubLi}>
                    <Box component={"span"} sx={MUIStyle.DotGrey} />
                    <Typography variant="body1" sx={MUIStyle.Textgrey}>
                      <strong>Correction: </strong> Platform features used,
                      session durations, and navigation paths.
                    </Typography>
                  </Box>
                  <Box component={"li"} sx={MUIStyle.SubLi}>
                    <Box component={"span"} sx={MUIStyle.DotGrey} />
                    <Typography variant="body1" sx={MUIStyle.Textgrey}>
                      <strong>Deletion: </strong>Request data erasure, subject to legal requirements.
                    </Typography>
                  </Box>
                  <Box component={"li"} sx={MUIStyle.SubLi}>
                    <Box component={"span"} sx={MUIStyle.DotGrey} />
                    <Typography variant="body1" sx={MUIStyle.Textgrey}>
                      <strong>Restrict Processing: </strong> Object to data processing for specific purposes.
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Typography variant="body1" sx={MUIStyle.SubTitle}>
              To exercise these rights, email us at [email address]. Verification may be required.
                </Typography>
            </Box>
          </Box>
          <Box sx={MUIStyle.ContactContentBox}>
            <Typography variant="h3" sx={MUIStyle.SubHeading}>
            Data Retention
            </Typography>
            <Typography variant="body1" sx={MUIStyle.ContactContentText}>
            We retain personal data only as long as necessary for legitimate purposes or as required by law.
            </Typography>
          </Box>
          <Box sx={MUIStyle.ContactContentBox}>
            <Typography variant="h3" sx={MUIStyle.SubHeading}>
            Data Security
            </Typography>
            <Typography variant="body1" sx={MUIStyle.ContactContentText}>
            We employ industry-standard encryption, access controls, and secure infrastructure to protect your data from unauthorized access or disclosure. 
            </Typography>
          </Box>
          <Box sx={MUIStyle.ContactContentBox}>
            <Typography variant="h3" sx={MUIStyle.SubHeading}>
            International Data Transfers
            </Typography>
            <Typography variant="body1" sx={MUIStyle.ContactContentText}>
            If your data is transferred outside your jurisdiction, we ensure it is protected under equivalent standards through mechanisms like Standard Contractual Clauses (SCCs). 
            </Typography>
          </Box>
          <Box sx={MUIStyle.ContactContentBox}>
            <Typography variant="h3" sx={MUIStyle.SubHeading}>
            Updates to This Policy
            </Typography>
            <Typography variant="body1" sx={MUIStyle.ContactContentText}>
            This Privacy Policy may be updated periodically. Significant changes will be notified via email or platform notices.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
