"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import React, { useState, useEffect, useRef } from "react";
import { PROJECTLOGO, VISION } from "@/values/Constants/ImageConstants";
import Grid from "@mui/material/Grid2";
import OurTechSVG from "../OurTechSVG/OurTechSVG";
import $ from "jquery";

export default function ConstructionProject() {

  useEffect(() => {
    const rotateMouse = () => {
      let mousePosition = {
        x: 0,
        y: 0
      }

      const $pointerElement = $('.pointerPath')

      $(window).on("mousemove", (e) => {
        mousePosition.x = e.pageX;
        mousePosition.y = e.pageY;

        update()
      })


      function update() {

        var dx = mousePosition.x - $pointerElement.position().left;
        var dy = mousePosition.y - $pointerElement.position().top;

        var transform = "rotate(" + (Math.atan2(dy, dx) + Math.PI * 1.2) + "rad)";

        $pointerElement.css({
          transform: transform
        })

      }
    }

    rotateMouse();
  }, [])

  return (
    <Box sx={MUIStyle.ConstructionProjectMain}>
      <Container maxWidth="xl">
        <Box sx={MUIStyle.workflowHeadingBoxOuter}>
          <Box sx={MUIStyle.workflowHeadingBoxInner}>
            <Typography variant="h4" sx={MUIStyle.SubHeading}>
              Simple Steps, Powerful Results
            </Typography>
            <Typography variant="h2" sx={MUIStyle.Heading}>
              Manage your construction project in four easy, powerful steps
            </Typography>
          </Box>
        </Box>
        <Box sx={MUIStyle.ConstructionProjectGrid} className="construction-project-grid">
          {/* <Box
            component={"img"}
            src={PROJECTLOGO}
            sx={MUIStyle.ConstructionProjectImg}
          /> */}
          <Box
            sx={MUIStyle.ConstructionProjectImg}
          >
            <OurTechSVG />
          </Box>
          <Box sx={MUIStyle.ConstructionProjectBox}>
            <Typography variant="h2" sx={MUIStyle.Heading}>
              4. COLLABORATE
            </Typography>
            <Typography variant="body1" sx={MUIStyle.ProjectText}>
              Showcase projects, virtual site meetings, streamline
              discussions, annotate photos, and keep teams aligned for
              seamless progress and transparency.{" "}
            </Typography>
          </Box>
          <Box sx={MUIStyle.ConstructionProjectBox}>
            <Typography variant="h2" sx={MUIStyle.Heading}>
              1. CAPTURE
            </Typography>
            <Typography variant="body1" sx={MUIStyle.ProjectText}>
              Connect the 360-camera to SiteView’s app, mount it on your
              helmet, and effortlessly capture complete site visuals with no
              blind spots or missed areas.{" "}
            </Typography>
          </Box>
          <Box sx={MUIStyle.DividerBox} />
          <Box sx={MUIStyle.ConstructionProjectBox}>
            <Typography variant="h2" sx={MUIStyle.Heading}>
              3. MONITOR
            </Typography>
            <Typography variant="body1" sx={MUIStyle.ProjectText}>
              Your project is fully documented, enabling progress verification, condition reviews, and side-by-side comparisons across dates anytime, anywhere.
            </Typography>
          </Box>
          <Box sx={MUIStyle.ConstructionProjectBox}>
            <Typography variant="h2" sx={MUIStyle.Heading}>
              2. VIEW
            </Typography>
            <Typography variant="body1" sx={MUIStyle.ProjectText}>
              SiteView automatically organizes 360° photos by floor plan and date, allowing you to navigate the site remotely anytime.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
