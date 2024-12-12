"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import { Icon } from "@iconify/react";
import { DASHBOARD } from "@/values/Constants/ImageConstants";
import { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import MotionPathPlugin from "gsap/MotionPathPlugin";

export default function About() {

  useLayoutEffect(() => {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
    gsap.registerPlugin(MotionPathPlugin);
  }, []);

  useGSAP(() => {
    const boxes = gsap.utils.toArray('.boxes');

    // console.log("cards", cards);

    boxes.forEach((box, i) => {

      ScrollTrigger.create({
        trigger: box, // The element that ScrollTrigger will "trigger" when it comes into view
        start: "top top", // When the top of the trigger hits the top of the viewport
        end: "bottom center", // When the bottom of the trigger hits the center of the viewport
        // endTrigger: ".workflowSec", // The element that ScrollTrigger will use as the end of the trigger.
        markers: true, // Show markers for testing purposes
        onEnter: () => {
          // console.log("onEnter", i);

          gsap.to(box, {
            motionPath: {
              path: path,
              align: box,
              autoRotate: true,
              alignOrigin: [0.5, 0.5]
            },
            duration: 2,
            ease: "power1.inOut"
          });
        },

      });
    });
  });

  return (
    <Box sx={MUIStyle.AboutMain} id='aboutSection'>
      <Container maxWidth="xl" sx={{
        display: "flex",
        flexDirection: "column",
      }}>
        <Box sx={MUIStyle.AboutAllBtns} className="boxes">

          <Box component={"span"} sx={[MUIStyle.Btn, MUIStyle.Btn1]} variant="contained">
            Save Cost
          </Box>
          <Box component={"span"} sx={[MUIStyle.Btn, MUIStyle.Btn2]} variant="contained">
            Save Time
          </Box>
          <Box component={"span"} sx={[MUIStyle.Btn, MUIStyle.Btn3]} variant="contained">
            Reduce Rework
          </Box>
          <Box component={"span"} sx={[MUIStyle.Btn, MUIStyle.Btn4]} variant="contained">
            Sustainable Practices
          </Box>
          <Box component={"span"} sx={[MUIStyle.Btn, MUIStyle.Btn5]} variant="contained">
            Save Resources
          </Box>
          <Box component={"span"} sx={[MUIStyle.Btn, MUIStyle.Btn6]} variant="contained">
            Safety Management
          </Box>

          <Box component={"span"} sx={[MUIStyle.Btn, MUIStyle.Btn7]} variant="contained">
            Remote Collaboration
          </Box>
          <Box component={"span"} sx={[MUIStyle.Btn, MUIStyle.Btn8]} variant="contained">
            Visual Progress
          </Box>
          <Box component={"span"} sx={[MUIStyle.Btn, MUIStyle.Btn9]} variant="contained">
            No Blind Spot
          </Box>
          <Box component={"span"} sx={[MUIStyle.Btn, MUIStyle.Btn10]} variant="contained">
            Increased Efficiency
          </Box>
          <Box component={"span"} sx={[MUIStyle.Btn, MUIStyle.Btn11]} variant="contained">
            Visual Progress1
          </Box>
          <Box component={"span"} sx={[MUIStyle.Btn, MUIStyle.Btn12]} variant="contained">
            No Blind Spot
          </Box>
          <Box component={"span"} sx={[MUIStyle.Btn, MUIStyle.Btn13]} variant="contained">
            Historical Records
          </Box>
          <Box component={"span"} sx={[MUIStyle.Btn, MUIStyle.Btn14]} variant="contained">
            Data Management
          </Box>
        </Box>

        <Box sx={MUIStyle.AboutSecOuterBox}>
          <Box sx={MUIStyle.AboutSecHeadingBox}>
            <Typography variant="body1" sx={MUIStyle.AboutSecText}>
              Boost productivity. Eliminate waste. Streamline operation with 360° visibility
            </Typography>
            <Typography variant="h2" sx={MUIStyle.AboutSecHeading}>
              DAILY DIGITAL-TWINS, VISUAL progress tracking, and real-time issue resolution, all within a single platform
            </Typography>
          </Box>
        </Box>
        <Box sx={MUIStyle.AboutDashBoardImg}>
          <Box component={"img"} src={DASHBOARD} alt="Dashboard" />
        </Box>
      </Container>
    </Box>
  );
}
