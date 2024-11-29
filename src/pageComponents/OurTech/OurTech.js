"use client";
import { Box } from "@mui/material";
import styles from "./OurTech.module.css";
import BannerNew from "@/components/BannerNew/BannerNew";
import React from "react";
import Vision from "@/components/Vision/Vision";
import ConstructionProject from "@/components/ConstructionProject/ConstructionProject";

export default function () {
  return (
    <Box className={styles.OurTechSec}>
      <BannerNew />
      <Vision />
      <ConstructionProject/>
    </Box>
  );
}
