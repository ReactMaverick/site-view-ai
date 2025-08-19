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
      <div className="container-op">
        <BannerNew />
      </div>
      <div className="container-op">
        <VideoInnerSec />
      </div>
      <div className="container-op">
        <ProblemSolution />
      </div>
      <div className="container-op">
        <TabBarSec
          page="WhySiteView"
        />
      </div>
    </Box>
  );
}
