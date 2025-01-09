"use client";
import { Box, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import React, { useLayoutEffect, useRef } from "react";
import { IPHONE, MACBOOKPRO } from "@/values/Constants/ImageConstants";
import SiteViewSVG from "../SiteViewSVG/SiteViewSVG";
import $ from "jquery";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function OnsiteSection() {

  const onSiteSec = useRef(null);

  // Runs before the first render
  useLayoutEffect(() => {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
  }, []);

  useGSAP(() => {

    const onSiteContent = gsap.utils.toArray(".onsite-content");

    gsap.set(onSiteContent, {
      xPercent: (i) => i === 0 ? 50 : -65,
      scale: 1.2,
    });

    gsap.set('.onsite-heading', {
      y: -100,
      opacity: 0,
    });

    gsap.set('.onsite-content-text', {
      opacity: 0,
    });

    gsap.to(onSiteSec.current, {
      scrollTrigger: {
        trigger: onSiteSec.current,
        start: "top top",
        end: "+=" + window.innerHeight * 2,
        scrub: 1,
        pin: true,
        // markers: true,
        id: "onsiteSection",
      }
    });

    gsap.to(onSiteContent, {
      xPercent: 0,
      scale: 1,
      scrollTrigger: {
        trigger: onSiteSec.current,
        start: "top top",
        end: "+=" + window.innerHeight * 2,
        scrub: 1,
        // markers: true,
        id: "onsiteContent",
      }
    });

    gsap.to('.onsite-heading', {
      y: 0,
      opacity: 1,
      scrollTrigger: {
        trigger: onSiteSec.current,
        start: "top top",
        end: "+=" + window.innerHeight * 2 / 5,
        scrub: 1,
        // markers: true,
        id: "onsiteHeading",
      }
    });

    gsap.to('.onsite-content-text', {
      // opacity: 1,
      scrollTrigger: {
        trigger: onSiteSec.current,
        start: "top top",
        end: "+=" + window.innerHeight * 1.5,
        scrub: 1,
        // markers: true,
        id: "onsiteHeading",
      },
      keyframes: {
        "0%": {
          opacity: 0,
        },
        "75%": {
          opacity: 0,
        },
        "100%": {
          opacity: 1,
        }
      }
    });

  });

  return (
    <Box sx={MUIStyle.OnsiteSectionMain} ref={onSiteSec}>
      <Box sx={MUIStyle.VisionSVGContainer}>
        <SiteViewSVG
          fillOpacity="0.05"
        />
      </Box>
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={MUIStyle.OnsiteSectionHeadingBoxOuter} className="onsite-heading">
          <Box sx={MUIStyle.OnsiteSectionHeadingBoxInner}>
            <Typography variant="h4" sx={MUIStyle.SubHeading}>
              From Field to Office, Simplified
            </Typography>
            <Typography variant="h2" sx={MUIStyle.Heading}>
              Connecting On-Site Action to Office Decisions in Real-Time
            </Typography>
          </Box>
        </Box>
        <Box sx={MUIStyle.Row}>
          <Box sx={MUIStyle.ColLeft} className="onsite-content">
            <Box component={"img"} src={MACBOOKPRO} alt="Onsite" sx={MUIStyle.OnsiteImg} />
            <Box sx={MUIStyle.LEftContent} className="onsite-content-text">
              <Typography variant="h2" sx={MUIStyle.ContentHeading}>
                Web App for Comprehensive Views and Collaboration
              </Typography>
              <Typography variant="body1" sx={MUIStyle.ContentText}>
                Web app centralizes virtual tours, progress tracking, field notes, measurements, and collaboration, enabling efficient construction management, seamless communication, and real-time stakeholder engagement from any location
              </Typography>
            </Box>
          </Box>
          <Box sx={MUIStyle.ColRight} className="onsite-content">
            <Box component={"img"} src={IPHONE} alt="Onsite" sx={MUIStyle.OnsiteImg} />
            <Box sx={MUIStyle.RightContent} className="onsite-content-text">
              <Typography variant="h2" sx={MUIStyle.ContentHeading}>
                Mobile App for Data Capture
              </Typography>
              <Typography variant="body1" sx={MUIStyle.ContentText}>
                Mobile app enables 360° capture, field notes, floorplan integration, real-time uploads, remote monitoring, and collaboration, enhancing on-site efficiency, safety, and communication for construction teams.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
