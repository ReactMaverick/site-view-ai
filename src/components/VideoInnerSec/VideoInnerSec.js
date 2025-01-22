"use client";
import { Box, Container } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import { VIDEOINNER, WHYSITEVIEW } from "@/values/Constants/ImageConstants";
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function VideoInnerSec() {
  const videoRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useGSAP(() => {
    const videoElement = videoRef.current;

    gsap.to(videoElement, {
      scrollTrigger: {
        trigger: videoElement,
        start: "top bottom", // the trigger's top edge hit the bottom of the viewport
        end: "bottom top", // the trigger's bottom edge hit the top of the viewport
        scrub: 1,
      },
      scale: 0.75,
    });

  }, [videoRef]);

  return (
    <Box sx={MUIStyle.VideoInnerSecMain}>
      <Container maxWidth="xl">
        <Box sx={MUIStyle.VideoInnerSecInner}>
          <Box
            component={"img"}
            src={WHYSITEVIEW}
            alt="Video"
            ref={videoRef}
          />
        </Box>
      </Container>
    </Box>
  );
}
