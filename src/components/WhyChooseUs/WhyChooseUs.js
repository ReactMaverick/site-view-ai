import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import SpeedIcon from "@mui/icons-material/Speed";
import SecurityIcon from "@mui/icons-material/Security";
import DomainAddIcon from "@mui/icons-material/DomainAdd";

const features = [
  {
        icon: <TipsAndUpdatesOutlinedIcon sx={{ fontSize: 40, color: "#C6FF00" }} />,
    title: "Smart",
    desc: "SitePace.ai captures 360° site visuals using a helmet-mounted camera and automatically aligns them to your floorplan using AI and IoT. All on request with just minutes effort needed.",
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 40, color: "#C6FF00" }} />,
    title: "Fast",
    desc: "Generate a fully mapped, time-stamped virtual walkthrough within minutes of capturing your site. No stitching, no syncing delays—just instant visibility from your desk/field.",
  },
  {
    icon: <DomainAddIcon sx={{ fontSize: 40, color: "#C6FF00" }} />,
    title: "Scalable",
    desc: "From a single site to an entire portfolio, SitePace is built to scale. Use it across projects, offices, and teams without changing your workflows or purchasing expensive hardware.",
  },
  {
    icon: <SecurityIcon sx={{ fontSize: 40, color: "#C6FF00" }} />,
    title: "Trusted",
    desc: "Trusted by top-tier developers, contractors, and PMCs, SitePace.ai is built with security and data control in mind. All your visuals are cloud-stored, encrypted, and accessible only to those you authorize.",
  },
];

export default function WhyChooseUs() {
  return (
    <Box
      sx={{
        width: "100%",
        bgcolor: "#0B0E17",
        py: { xs: 6, md: 10 },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
          <Container maxWidth="xl">
              <Box
                  sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: { xs: "flex-start", md: "flex-start" },
                      mb: { xs: 4, md: 6 },
                  }}
              >
                  <Typography
                      variant="h2"
                      sx={{
                          fontSize: {
                              xs: "1.5rem",
                              sm: "2rem",
                              md: "2.2rem",
                              lg: "2.2rem",
                              xl: "2.5rem",
                          },
                          lineHeight: "1.5em",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          color: "#C6FF00",
                          mb: 1,
                          letterSpacing: 0.5,
                      }}
                  >
                      Why choose SitePace.ai for your projects?
                  </Typography>
              </Box>
              <Grid container spacing={6}>
                  {features.map((feature, idx) => (
                      <Grid
                          item
                          xs={12}
                          sm={6}
                          lg={6}
                          key={feature.title}
                      >
                          <Box
                              sx={{
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "flex-start", // Align icon and text at the top
                                  background: "#181B26",
                                  borderRadius: "18px",
                                  p: 3,
                                  minHeight: 180,
                                  height: "100%",
                              }}
                          >
                              <Box sx={{ mr: 2, mt: 0.5 /* adjust as needed for vertical alignment */ }}>
                                  {feature.icon}
                              </Box>
                              <Box
                                  sx={{
                                      display: "flex",
                                      flexDirection: "column",
                                      alignItems: "flex-start",
                                  }}
                              >
                                  <Typography
                                      variant="h6"
                                      sx={{
                                          color: "#C6FF00",
                                          fontWeight: 600,
                                          mb: 1,
                                          fontSize: 20,
                                      }}
                                  >
                                      {feature.title}
                                  </Typography>
                                  <Typography
                                      variant="body2"
                                      sx={{
                                          color: "#fff",
                                          fontSize: 14,
                                          opacity: 0.9,
                                      }}
                                  >
                                      {feature.desc}
                                  </Typography>
                              </Box>
                          </Box>
                      </Grid>
                  ))}
              </Grid>
          </Container>
    </Box>
  );
}