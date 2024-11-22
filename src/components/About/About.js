"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import { Icon } from "@iconify/react";
import { DASHBOARD } from "@/values/Constants/ImageConstants";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function About() {
  useEffect(() => {
    const handleScroll = () => {
      const buttons = document.querySelectorAll(".btn");
      const imageBox = document.querySelector("[alt='Dashboard']");
      const imageBoxRect = imageBox.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      buttons.forEach(button => {
        if (imageBoxRect.top < windowHeight && imageBoxRect.bottom > 0) {
          const centerY = imageBoxRect.top + imageBoxRect.height / 10 - button.getBoundingClientRect().height / 10;
          button.style.transition = "transform 0.5s ease-out";
          button.style.transform = `translateY(${centerY}px)`;
        } else {
          button.style.transition = "transform 0.5s ease-out";
          button.style.transform = "translateY(0)";
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const buttons = document.querySelectorAll(".btn");
    const imageBox = document.querySelector("[alt='Dashboard']");

    buttons.forEach(button => {
      gsap.fromTo(button, 
        { y: 0 }, 
        {
          y: () => imageBox.getBoundingClientRect().top + imageBox.getBoundingClientRect().height / 10 - button.getBoundingClientRect().height / 10,
          scrollTrigger: {
            trigger: imageBox,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
  return (
    <Box sx={MUIStyle.AboutMain}>
      <Container maxWidth="xl" sx={{
        display: "flex",
        flexDirection: "column",
      }}>
        <Box sx={MUIStyle.AboutAllBtns}>
         
          <Box component={"span"} className="btn" sx={[MUIStyle.Btn, MUIStyle.Btn1]} variant="contained">
            Save Cost
          </Box>
          <Box component={"span"} className="btn"  sx={[MUIStyle.Btn, MUIStyle.Btn2]} variant="contained">
          Save Time
          </Box>
          <Box component={"span"} className="btn" sx={[MUIStyle.Btn, MUIStyle.Btn3]} variant="contained">
          Reduce Rework
          </Box>
          <Box component={"span"} className="btn"  sx={[MUIStyle.Btn, MUIStyle.Btn4]} variant="contained">
          Sustainable Practices
          </Box>
          <Box component={"span"} className="btn" sx={[MUIStyle.Btn, MUIStyle.Btn5]} variant="contained">
          Save Resources
          </Box>
          <Box component={"span"} className="btn"  sx={[MUIStyle.Btn, MUIStyle.Btn6]} variant="contained">
          Safety Management
          </Box>
        
          <Box component={"span"} className="btn" sx={[MUIStyle.Btn, MUIStyle.Btn7]} variant="contained">
          Remote Collaboration
          </Box>
          <Box component={"span"} className="btn"  sx={[MUIStyle.Btn, MUIStyle.Btn8]} variant="contained">
          Visual Progress
          </Box>
          <Box component={"span"} className="btn"  sx={[MUIStyle.Btn, MUIStyle.Btn9]} variant="contained">
          No Blind Spot
          </Box>
          <Box component={"span"} className="btn" sx={[MUIStyle.Btn, MUIStyle.Btn10]} variant="contained">
          Increased Efficiency
          </Box>
          <Box component={"span"} className="btn"  sx={[MUIStyle.Btn, MUIStyle.Btn11]} variant="contained">
          Visual Progress1
          </Box>
          <Box component={"span"} className="btn" sx={[MUIStyle.Btn, MUIStyle.Btn12]} variant="contained">
          No Blind Spot
          </Box>
          <Box component={"span"} className="btn"  sx={[MUIStyle.Btn, MUIStyle.Btn13]} variant="contained">
          Historical Records
          </Box>
          <Box component={"span"} className="btn" sx={[MUIStyle.Btn, MUIStyle.Btn14]} variant="contained">
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
