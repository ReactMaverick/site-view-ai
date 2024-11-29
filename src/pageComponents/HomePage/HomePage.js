"use client";
import { Box, Typography } from "@mui/material";
import styles from "./HomePage.module.css";
import Banner from "@/components/Banner/Banner";
import About from "@/components/About/About";
import Partners from "@/components/Partners/Partners";
import Project from "@/components/Project/Project";
import Workflow from "@/components/Workflow/Workflow";
import VideoSec from "@/components/VideoSec/VideoSec";
import Industries from "@/components/Industries/Industries";
import OurTeam from "@/components/OurTeam/OurTeam";
import CTA from "@/components/CTA/CTA";
import BannerThree from "@/components/BannerThree/BannerThree";


export default function HomePage() {
  return (
    <Box className={styles.homePage}>
      <BannerThree />
      <About />
      <Partners />
      <Project />
      <Workflow />
      <VideoSec />
      <Industries />
      <OurTeam />
      <CTA />
    </Box>
  );
}
