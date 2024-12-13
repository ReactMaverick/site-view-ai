"use client";
import React from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import { VIDEO, VIDEOBG1, VIDEOICON } from "@/values/Constants/ImageConstants";
import { connectedConstruction } from "@/values/Constants/VideoConstants";


export default function VideoSec() {
  const handlePlayVideo = () => {
    const videoElement = document.querySelector('.videoPlayer');
    if (videoElement) {
      videoElement.play();
      document.querySelector('.videoOverlay').style.display = 'none';
      document.querySelector('.customButton').style.display = 'none';
    }
  };

  return (
    <Box sx={MUIStyle.VideoSecMain} className="videoSection">
      <Container maxWidth="xL" sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        width: "100%",
        padding: "0",
      }}>
        <Box sx={MUIStyle.VideoBox}>
          <video
            className="videoPlayer"
            width={"100%"}
            height={"100%"}
            src={connectedConstruction}
            controls
            // autoPlay
            muted
          />
          <Box sx={MUIStyle.VideoOverlay} className="videoOverlay" onClick={handlePlayVideo}>
            <Box component={"img"} src={VIDEOBG1} alt="" />
          </Box>
          <Button sx={MUIStyle.CustomButton} className="customButton" onClick={handlePlayVideo}>
            <Box component={"img"} src={VIDEOICON} alt="" />
          </Button>

        </Box>
      </Container>
    </Box>
  );
}