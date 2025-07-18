"use client";
import { Box, Typography } from "@mui/material";
import styles from "./HomePage.module.css";
import Banner from "@/components/Banner/Banner";
import About from "@/components/About/About";
import Partners from "@/components/Partners/Partners";
import Project from "@/components/Project/Project";
import Workflow from "@/components/Workflow/Workflow";
import Industries from "@/components/Industries/Industries";
import OurTeam from "@/components/OurTeam/OurTeam";
import CTA from "@/components/CTA/CTA";
import BannerThree from "@/components/BannerThree/BannerThree";
import { useState } from "react";
import FullPageLoader from "@/components/FullPageLoader/FullPageLoader";
import VideoSec from "@/components/VideoSec/VideoSec";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import FeatureShowcase from "@/components/FeatureShowcase/FeatureShowcase";
import FeatureShowcaseNew from "@/components/FeatureShowcaseNew/FeatureShowcaseNew";
import HomepageBlogs from "@/components/HomepageBlogs/HomepageBlogs";


export default function HomePage() {

  const [isThreeJSLoading, setIsThreeJSLoading] = useState(true);

  return (
    <Box className={styles.homePage}>
      {isThreeJSLoading && <FullPageLoader />}
      <BannerThree
        setIsThreeJSLoading={setIsThreeJSLoading}
      />
      {/* <FeatureShowcase/> */}
      <FeatureShowcaseNew />
      <About />
      <Partners />
      <WhyChooseUs />
      <Project />
      <Workflow />
      <VideoSec />
      <Industries />
      <OurTeam />
      <HomepageBlogs />
      <CTA />
    </Box>
  );
}
