"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import React from "react";
import { HELMATE, LINEARROW } from "@/values/Constants/ImageConstants";
import { Icon } from "@iconify/react";
export default function CTA() {
  return (
    <Box sx={MUIStyle.CTAMain}>
      <Container maxWidth="xl">
        <Box sx={MUIStyle.CTAInner}>
          <Typography variant="h2" sx={MUIStyle.CTAHeading}>
            “SiteView.ai for every stage of construction”
          </Typography>
        </Box>
        <Box sx={MUIStyle.CTAImgInner}>
          <Box component={"img"} src={HELMATE} alt="CTA" sx={MUIStyle.CTAImg} />
        </Box>
        <Box component={"ul"} sx={MUIStyle.CTAList}>
          <Box component={"span"} sx={MUIStyle.CTAListDivider} />
            <Typography variant="h4" sx={MUIStyle.CTAListItemHeading}>
              Planning
            </Typography>
          <Box component={"span"} sx={MUIStyle.CTAListDivider} />
            <Typography variant="h4" sx={MUIStyle.CTAListItemHeading}>
              Execution
            </Typography>
          <Box component={"span"} sx={MUIStyle.CTAListDivider} />
            <Typography variant="h4" sx={MUIStyle.CTAListItemHeading}>
              Close Out
            </Typography>
          <Box component={"img"} sx={MUIStyle.CTAListImg} src={LINEARROW} />
          <Button sx={MUIStyle.BannerBtn} variant="contained" size="large">
                                    
                                    <Box component={"span"} className="BannerBtnIcon" sx={MUIStyle.BannerBtnIcon}>
                                    <Icon icon="flowbite:arrow-right-outline" />
                                    </Box>
                                Try Now
                                <Box className="BannerBtnBG" sx={MUIStyle.BannerBtnBG}/>
                                </Button>
        </Box>
      </Container>
    </Box>
  );
}
