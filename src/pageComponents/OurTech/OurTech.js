"use client";
import { Box } from "@mui/material";
import styles from "./OurTech.module.css";
import BannerNew from "@/components/BannerNew/BannerNew";
import React, { useEffect, useState } from "react";
import Vision from "@/components/Vision/Vision";
import ConstructionProject from "@/components/ConstructionProject/ConstructionProject";
import OnsiteSection from "@/components/OnsiteSection/OnsiteSection";
import TabBarSec from "@/components/TabBarSec/TabBarSec";
import DigitalConstruction from "@/components/DigitalConstruction/DigitalConstruction";
import FAQSec from "@/components/FAQSec/FAQSec";
import { tabBarSecContentOurTech } from "@/components/TabBarSec/TabBarSecContent";
import VisionSection from "@/components/VisionSection/VisionSection";
import { VISION, VISION2, VISIONMEETSPRECISION, WHYSITEPACELASTVID } from "@/values/Constants/ImageConstants";

export default function OutTech() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  if (isLoading) return null;

  return (
    <Box className={styles.OurTechSec}>
      {/* <div></div> */}
      <BannerNew
        theme="dark"
        headerButtonText="Tech Unleashed"
        title="Revolutionizing site management with cutting-edge technology"
        subtitle="Harness advanced technology to streamline planning, improve communication, and maximize project efficiency like never before."
      />
      {/* <Vision /> */}
      <VisionSection
        title="Vision Meets Precision. Every Angle, Every Detail"
        subtitle="360° capture redefined for precision and effortless navigation"
        description={"Capture your site comprehensively using industry-standard 360° cameras, drones with permits, or our intuitive mobile app. Ensure no blind spots in your project’s visual documentation.\n\nUpload and organize your captured media effortlessly. Drag-and-drop functionality ensures seamless integration, providing centralized, easily accessible data for all your construction needs.\n\nImmerse yourself in your site remotely with interactive 360° navigation. Zoom, pan, and explore every detail without the hassle of on-site visits."}
        image={VISIONMEETSPRECISION}
        orientation="image-right"
      />
      <ConstructionProject />
      <VisionSection />
      <OnsiteSection />
      <VisionSection
        orientation="image-right"
        title="Building a Future with Emerging Technologies"
        description={"Enhanced Collaboration with AR/ Mixed Reality : Imagine virtually walking through your construction site with colleagues, adding real-time annotations using AR features\n\nComputer Vision for Automated Tasks: We're constantly developing features that leverage computer vision to automate tasks, such as progress tracking and potentially even identifying safety hazards in the future"}
        showSubtitle={false}
        image={VISION2}
      />
      <TabBarSec
        theme="dark"
        caption="Building Tomorrow with Tech"
        title="Empowering construction with cutting edge tools and innovation"
        tabBarContents={tabBarSecContentOurTech}
        page="OurTech"
      />
      <VisionSection
        title="Beyond Visuals: A Powerful Data Management System"
        subtitle="Your Project’s Digital Brain"
        description={"Store all your project data—360° visuals, time-lapse recordings, and reports—securely in one cloud-based platform, ensuring easy access and robust data organization\n\nShare data instantly with stakeholders for seamless collaboration. Foster real-time teamwork with tools that connect on-site crews and remote decision-makers effortlessly\n\nGo paperless with a digital-first approach. Reduce waste, streamline documentation, and unlock cost savings through smarter workflows and early issue detection."}
        image={WHYSITEPACELASTVID}
      />
      <DigitalConstruction />
      <FAQSec />

    </Box>
  );
}
