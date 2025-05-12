"use client";
import { Box } from "@mui/material";
import styles from "./Pricing.module.css";
import BannerNew from "@/components/BannerNew/BannerNew";
import React from "react";
import PricingSec from "@/components/Pricing/PricingSec";
import PricingQuote from "@/components/PricingQuote/PricingQuote";
import FAQSecLight from "@/components/FAQSecLight/FAQSecLight";

export default function Pricing() {

  return (
    <Box className={styles.PricingSec}>
      <BannerNew
        headerButtonText="Pricing"
        title="Digitize Your Site in 24 Hours"
        subtitle="Get a tailored quote based on your project’s scale and duration"
        button={false}
        pricingButton={true}
      />
      <PricingSec />
      <PricingQuote />
      <FAQSecLight />
      <BannerNew
        headerButtonText=""
        title="Ready to scale smarter?"
        subtitle="No delays. No limits. Just a smarter way to document and manage your construction site—virtually and visually. Whether you’re working on a single floor or a multi-tower project, we deliver tailored solutions, fast."
        button={false}
        theme="dark"
        talkToSalesButton={true}
        talkToSalesButtonText="Talk to Sales"
      />
    </Box>
  );
}
