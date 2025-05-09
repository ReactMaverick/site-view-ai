"use client";
import { Box } from "@mui/material";
import styles from "./Pricing.module.css";
import BannerNew from "@/components/BannerNew/BannerNew";
import React from "react";
import { MUIStyle } from "./MUIStyle";
import PricingSec from "@/components/Pricing/PricingSec";
import PricingQuote from "@/components/PricingQuote/PricingQuote";

export default function Pricing() {

  return (
    <Box className={styles.PricingSec}>
      <BannerNew
        headerButtonText="Pricing"
        title="Digitize Your Site in 24 Hours"
        subtitle="Get a tailored quote based on your project’s scale and duration"
        button={false}
      />
      <PricingSec />
      <PricingQuote />
    </Box>
  );
}
