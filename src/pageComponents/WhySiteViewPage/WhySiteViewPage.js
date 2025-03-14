"use client";
import { Box } from "@mui/material";
import styles from "./WhySiteView.module.css";
import BannerNew from "@/components/BannerNew/BannerNew";
import React from "react";
import VideoInnerSec from "@/components/VideoInnerSec/VideoInnerSec";
import ProblemSolution from "@/components/ProblemSolution/ProblemSolution";
import TabBarSec from "@/components/TabBarSec/TabBarSec";

export default function WhySiteView() {
  return (
    <Box className={styles.WhySiteView}>
      <BannerNew />
      <VideoInnerSec />
      <ProblemSolution />
      <TabBarSec
        page="WhySiteView"
      />
    </Box>
  );
}
