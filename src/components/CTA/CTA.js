"use client";
import { Box, Button, Container, LinearProgress, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import React, { useLayoutEffect } from "react";
import { CTABG, HELMATE, LINEARROW } from "@/values/Constants/ImageConstants";
import { Icon } from "@iconify/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function CTA() {

  useLayoutEffect(() => {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
  }, []);

  useGSAP(() => {

    const ctaImages = gsap.utils.toArray(".ctaImage");

    gsap.to('progress', {
      value: 100,
      ease: 'none',
      scrollTrigger: {
        trigger: '.ctaImageFlex',
        start: "left left", // Start when the left of the trigger hits the left of the viewport
        end: () => "+=" + document.querySelector(".ctaImageFlex").offsetWidth,
        scrub: 0.3,
        id: 'progress',
        // markers: true,
        onUpdate: self => {
          const progress = self.progress * 100;
          // console.log("progress", progress);
          // document.querySelectorAll('progress').forEach(progress => {
          //   progress.value = Math.round(progress.max * self.progress);
          // });
        }
      }
    });

    gsap.to(ctaImages, {
      xPercent: -80 * (ctaImages.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".CTASection",
        start: "top -300px",
        // markers: true,  // Set to true to see the trigger area
        pin: true,
        scrub: 1,
        // snap: 1 / 3,
        id: 'ctaImages',
        end: () => "+=" + document.querySelector(".ctaImageFlex").offsetWidth,
      },

    });

  });

  return (
    <Box sx={MUIStyle.CTAMain} className="CTASection">
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={MUIStyle.CTAInner}>
          <Typography variant="h2" sx={MUIStyle.CTAHeading}>
            “SiteView.ai for every stage of construction”
          </Typography>
        </Box>
        <Box sx={MUIStyle.CTAImgInner}>
          <Box component={"img"} src={HELMATE} alt="CTA" sx={MUIStyle.CTAImg} />
        </Box>
        <Box component={"ul"} sx={MUIStyle.CTAList}>
          <progress value="0" max="100" />
          {/* <Box component={"span"} sx={MUIStyle.CTAListDivider} /> */}
          <Typography variant="h4" sx={MUIStyle.CTAListItemHeading}>
            Planning
          </Typography>
          <progress value="0" max="100" />
          <Typography variant="h4" sx={MUIStyle.CTAListItemHeading}>
            Execution
          </Typography>
          <progress value="0" max="100" />
          <Typography variant="h4" sx={MUIStyle.CTAListItemHeading}>
            Close Out
          </Typography>
          <progress value="0" max="100" />
          {/* <Box component={"img"} sx={MUIStyle.CTAListImg} src={LINEARROW} /> */}
          <Button sx={MUIStyle.BannerBtn} variant="contained" size="large">

            <Box component={"span"} className="BannerBtnIcon" sx={MUIStyle.BannerBtnIcon}>
              <Icon icon="flowbite:arrow-right-outline" />
            </Box>
            Try Now
            <Box className="BannerBtnBG" sx={MUIStyle.BannerBtnBG} />
          </Button>
        </Box>
      </Container>
      <Box sx={MUIStyle.CTAImgFlex} className="ctaImageFlex">
        <Box component={"img"} src={CTABG} alt="CTA" sx={MUIStyle.CTAImg} className="ctaImage" />
        <Box component={"img"} src={CTABG} alt="CTA" sx={MUIStyle.CTAImg} className="ctaImage" />
        <Box component={"img"} src={CTABG} alt="CTA" sx={MUIStyle.CTAImg} className="ctaImage" />
      </Box>
    </Box>
  );
}
