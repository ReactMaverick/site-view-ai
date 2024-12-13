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

export default function OutTech() {
  return (
    <Box className={styles.OurTechSec}>
      <BannerNew />
      <Vision />
      <ConstructionProject />
      <Vision2 />
      <OnsiteSection />
      <Vision />
      <TabBarSec />
      <Vision2 />
      <DigitalConstruction />
      <FAQSec />

    </Box>
  );
}
