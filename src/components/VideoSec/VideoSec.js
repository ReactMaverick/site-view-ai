'use client';
import { Box, Button, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import { VIDEOBG1, VIDEOICON } from "@/values/Constants/ImageConstants";
import { useLayoutEffect, useRef, useState } from "react";
import VideoOverlay from "./VideoOverlay";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { sectionContent } from "./VideoSecContent";
import { gsapAnimation } from "./VideoSecLogic";

export default function VideoSec() {

  const video = useRef(null);
  const videoSecMain = useRef(null);
  const videoSecImages = useRef(null);

  const [isOverlayVisible, setIsOverlayVisible] = useState(true);

  const handlePlayVideo = () => {
    const videoElement = video.current;
    if (videoElement) {
      videoElement.play();
      setIsOverlayVisible(false);
    }
  };

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
              <Box
                className="videoPlayerOuter"
                sx={MUIStyle.VideoSecVideo}
              >
                <video
                  className="videoPlayer"
                  width={"100%"}
                  height={"100%"}
                  src={item.video}
                  // controls
                  muted
                  ref={video}
                  style={{ objectFit: "cover" }}
                  autoPlay
                  loop
                // onPause={() => setIsOverlayVisible(true)}
                />
                {/* {isOverlayVisible && (
                  <>
                    <Box
                      sx={MUIStyle.VideoOverlay}
                      className="videoOverlay"
                      onClick={handlePlayVideo}
                    >
                      <Box component={"img"} src={VIDEOBG1} alt="" />
                    </Box>
                    <Button
                      sx={MUIStyle.CustomButton}
                      className="customButton"
                      onClick={handlePlayVideo}
                    >
                      <Box component={"img"} src={VIDEOICON} alt="" />
                      <Typography variant="h4" sx={MUIStyle.CustomButtonText}>
                        Click to Play
                      </Typography>
                    </Button>
                  </>
                )} */}

              </Box>
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
