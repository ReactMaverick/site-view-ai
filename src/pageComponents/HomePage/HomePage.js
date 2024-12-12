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
import { useState } from "react";
import FullPageLoader from "@/components/FullPageLoader/FullPageLoader";


export default function HomePage() {

  const [isThreeJSLoading, setIsThreeJSLoading] = useState(true);

  return (
    <Box className={styles.homePage}>
      {isThreeJSLoading && <FullPageLoader />}
      <BannerThree
        setIsThreeJSLoading={setIsThreeJSLoading}
      />
      {/* <div className='homeContent'> */}
      <About />
      <Partners />
      <Project />
      <Workflow />
      <VideoSec />
      <Industries />
      <OurTeam />
      <CTA />
      {/* </div> */}
    </Box>
  );
}
