'use client';
import { Box, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import { VIDEOBG1, VIDEOICON } from "@/values/Constants/ImageConstants";
import { useLayoutEffect, useRef } from "react";
import VideoOverlay from "./VideoOverlay";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { sectionContent } from "./VideoSecContent";
import { gsapAnimation } from "./VideoSecLogic";

export default function VideoSec() {

  const videoSecMain = useRef(null);
  const videoSecImages = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
  }, []);

  useGSAP(() => {
    gsapAnimation({
      gsap,
      videoSecMain,
      videoSecImages
    });
  });

  return (
    <Box className="videoSecMain" sx={MUIStyle.VideoSecMain} ref={videoSecMain}>
      <Box className="videoSecImages" sx={MUIStyle.VideoSecImages} ref={videoSecImages}>
        {sectionContent.map((item, index) => (
          <Box
            className="videoSecImageOuter"
            sx={{
              ...MUIStyle.VideoSecImageOuter,
              ...item.style,
            }}
            key={index}
          >
            {item.video && (
              <>
              <Box
                className="videoPlayerOuter"
                sx={MUIStyle.VideoSecVideo}
              >
                
                <video
                  className="videoPlayer"
                  width="100%"
                  height="100%"
                  src={item.video}
                  muted // IMPORTANT: Required for autoplay to work in all browsers
                  autoPlay
                  loop
                  playsInline // Ensures autoplay on iOS
                  controls
                  controlsList="nodownload"
                  style={{ objectFit: "cover" }}
                />
              </Box>
                <Box
                  className="videoPlayerOuter"
                  sx={MUIStyle.VideoSecVideoSM}
                >

                  <video
                    className="videoPlayer"
                    width="100%"
                    height="100%"
                    src={item.videoSM}
                    muted // IMPORTANT: Required for autoplay to work in all browsers
                    autoPlay
                    loop
                    playsInline // Ensures autoplay on iOS
                    controls
                    controlsList="nodownload"
                    style={{ objectFit: "cover" }}
                  />



                </Box>
              </>
              
            )}
            <Box
              component={"img"}
              src={item.image}
              alt={item.alt}
              className={"image-" + index + " videoSecImage"}
              sx={{
                ...MUIStyle.VideoSecImage,
                ...item.imageStyle,
              }}
            />
          </Box>
        ))}
        <VideoOverlay />
      </Box>
    </Box>
  );
}
