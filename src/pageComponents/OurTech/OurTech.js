"use client";
import { Box } from "@mui/material";
import styles from "./OurTech.module.css";
import BannerNew from "@/components/BannerNew/BannerNew";
import React from "react";
import Vision from "@/components/Vision/Vision";
import ConstructionProject from "@/components/ConstructionProject/ConstructionProject";
import Vision2 from "@/components/Vision2/Vision2";
import OnsiteSection from "@/components/OnsiteSection/OnsiteSection";
import TabBarSec from "@/components/TabBarSec/TabBarSec";
import DigitalConstruction from "@/components/DigitalConstruction/DigitalConstruction";
import FAQSec from "@/components/FAQSec/FAQSec";
import { tabBarSecContentOurTech } from "@/components/TabBarSec/TabBarSecContent";

export default function OutTech() {
  return (
    <Box className={styles.OurTechSec}>
      <BannerNew
        theme="dark"
        headerButtonText="Tech Unleashed"
        title="Revolutionizing site management with cutting-edge technology"
        subtitle="Harness advanced technology to streamline planning, improve communication, and maximize project efficiency like never before."
      />
      <Vision />
      <ConstructionProject />
      <Vision2 />
      <OnsiteSection />
      <Vision />
      <TabBarSec
        theme="dark"
        caption="Building Tomorrow with Tech"
        title="Empowering construction with cutting edge tools and innovation"
        tabBarContents={tabBarSecContentOurTech}
        page="OurTech"
      />
      <Vision2 />
      <DigitalConstruction />
      <FAQSec />

    </Box>
  );
}
