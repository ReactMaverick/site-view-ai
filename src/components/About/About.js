"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import { Icon } from "@iconify/react";
import { DASHBOARD } from "@/values/Constants/ImageConstants";
import { useEffect, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function About() {

  useLayoutEffect(() => {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
  }, []);

  useGSAP(() => {
    const leftBoxes = gsap.utils.toArray('.leftAnimBoxes .animBox');
    const rightBoxes = gsap.utils.toArray('.rightAnimBoxes .animBox');
    const middleBoxes = gsap.utils.toArray('.middleAnimBoxes .animBox');

    // console.log("cards", cards);

    leftBoxes.forEach((box, i) => {

      gsap.to(box, {
        scrollTrigger: {
          trigger: ".animBoxes",
          start: "top 15%",
          end: "bottom top",
          scrub: 1,
          // markers: true,
          id: `box-${i}`,
        },
        x: `+=${50 - i * 8}vw`,
        y: 800,
        duration: 3,
        delay: 2,
      });
    });

    rightBoxes.forEach((box, i) => {

      gsap.to(box, {
        scrollTrigger: {
          trigger: ".animBoxes",
          start: "top 15%",
          end: "bottom top",
          scrub: 1,
          // markers: true,
          id: `box-${i}`,
        },
        x: `+=${i * 8 - 50}vw`,
        y: 800,
        duration: 3,
        delay: 2,
      });
    });

    middleBoxes.forEach((box, i) => {

      gsap.to(box, {
        scrollTrigger: {
          trigger: ".animBoxes",
          start: "top 15%",
          end: "bottom top",
          scrub: 1,
          // markers: true,
          id: `box-${i}`,
        },
        // y: 1000,
        x: 0,
        y: 800,
        duration: 3,
        delay: 2,
      });
    });

  });

  return (
    <Box sx={MUIStyle.AboutMain} id='aboutSection'>
      <Container maxWidth="xl" sx={{
        display: "flex",
        flexDirection: "column",
      }}>
        <Box sx={MUIStyle.AboutAllBtns} className="animBoxes">
          <Box className="leftAnimBoxes">
            <Box component={"span"} sx={[MUIStyle.Btn, MUIStyle.Btn10]} variant="contained" className="animBox">
              Increased Efficiency
            </Box>
            <Box component={"span"} sx={[MUIStyle.Btn, MUIStyle.Btn3]} variant="contained" className="animBox">
              Reduce Rework
            </Box>
            <Box component={"span"} sx={[MUIStyle.Btn, MUIStyle.Btn1]} variant="contained" className="animBox">
              Save Cost
            </Box>
            <Box component={"span"} sx={[MUIStyle.Btn, MUIStyle.Btn5]} variant="contained" className="animBox">
              Save Resources
            </Box>
            <Box component={"span"} sx={[MUIStyle.Btn, MUIStyle.Btn13]} variant="contained" className="animBox">
              Historical Records
            </Box>
            <Box component={"span"} sx={[MUIStyle.Btn, MUIStyle.Btn7]} variant="contained" className="animBox">
              Remote Collaboration
            </Box>
          </Box>

          <Box className="rightAnimBoxes">
            <Box component={"span"} sx={[MUIStyle.Btn, MUIStyle.Btn9]} variant="contained" className="animBox">
              No Blind Spot
            </Box>
            <Box component={"span"} sx={[MUIStyle.Btn, MUIStyle.Btn4]} variant="contained" className="animBox">
              Sustainable Practices
            </Box>
            <Box component={"span"} sx={[MUIStyle.Btn, MUIStyle.Btn2]} variant="contained" className="animBox">
              Save Time
            </Box>
            <Box component={"span"} sx={[MUIStyle.Btn, MUIStyle.Btn12]} variant="contained" className="animBox">
              No Blind Spot
            </Box>
            <Box component={"span"} sx={[MUIStyle.Btn, MUIStyle.Btn6]} variant="contained" className="animBox">
              Safety Management
            </Box>
            <Box component={"span"} sx={[MUIStyle.Btn, MUIStyle.Btn14]} variant="contained" className="animBox">
              Data Management
            </Box>

            <Box component={"span"} sx={[MUIStyle.Btn, MUIStyle.Btn8]} variant="contained" className="animBox">
              Visual Progress
            </Box>
          </Box>

          <Box className="middleAnimBoxes">
            <Box component={"span"} sx={[MUIStyle.Btn, MUIStyle.Btn11]} variant="contained" className="animBox">
              Visual Progress1
            </Box>
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
