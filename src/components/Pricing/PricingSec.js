"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import React, { useLayoutEffect } from "react";
import { PricingBoxContent } from "./PricingBoxContent";
import PricingBox from "./PricingBox";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { isMobileScreen, isSmallScreen } from "@/values/Constants/ResponsiveCheck";

export default function PricingSec() {

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useGSAP(() => {

    const pricingBoxes = gsap.utils.toArray(".pricing-box");


    gsap.set(pricingBoxes, {
      xPercent: (i) => {

        if (isMobileScreen()) {
          const columnIndex = i % 2;
          if (columnIndex === 0) {
            // First column: move right
            return 100;
          } else if (columnIndex === 1) {
            // Second column: move left
            return -100;
          }
          // Third column: no movement
          return 0;
        } else if (isSmallScreen()) {
          const columnIndex = i % 2;
          if (columnIndex === 0) {
            // First column: move right
            return 100;
          } else if (columnIndex === 1) {
            // Second column: move left
            return -100;
          }
          // Third column: no movement
          return 0;
        } else {
          // Assuming 3 columns, calculate column index
          const columnIndex = i % 3;
          if (columnIndex === 0) {
            // First column: move right
            return 210;
          } else if (columnIndex === 2) {
            // Third column: move left
            return -210;
          }
          // Second column: no movement
          return 0;
        }
      },
    });

    pricingBoxes.forEach((card, index) => {
      gsap.to(card, {
        scrollTrigger: {
          trigger: card,
          start: "top " + (4 * window.innerHeight / 5),
          end: "+=200",
          scrub: true,
          // markers: true,
          id: `pricing-card-${index}`,
          snap: 1,
        },
        xPercent: 0,
        ease: "power3.inOut",
      });
    });

  })

  return (
    <Box sx={MUIStyle.PricingSec} className="pricing-sec">
      <Container maxWidth="xl">
        <Box sx={MUIStyle.PricingSecHeadingBoxOuter} className="onsite-heading">
          <Box sx={MUIStyle.PricingSecHeadingBoxInner}>
            <Typography variant="h2" sx={MUIStyle.Heading}>
              What You Get With Every Plan
            </Typography>
          </Box>
        </Box>
        <Box sx={MUIStyle.PricingSecGrid}>
          {PricingBoxContent.map((item, i) => (
            <PricingBox
              key={i}
              title={item.title}
              desc={item.desc}
              btn={item.btn}
              img={item.img}
              slug={item.slug}
              bgColor={item.bgColor}
            />
          ))}
        </Box>
      </Container>
    </Box>
  );
}
