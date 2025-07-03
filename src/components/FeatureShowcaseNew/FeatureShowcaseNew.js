import React, { useState, useRef, useLayoutEffect, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Card,
  CardMedia,
  Grid2,
} from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FSLOGO, FSLOGO2, LINKLINEBIG, LINKLINEMOB, SITELGO, VIDEO } from "@/values/Constants/ImageConstants";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./FeatureShowcaseNew.module.css";
import { isMobileScreen, isSmallScreen } from "@/values/Constants/ResponsiveCheck";
import Lottie from "lottie-react";

const featureThumbnails = [
  {
    label: "360° Navigation",
    subLabel: "Click and Walk. Explore any room in 360°—right from your mobile or laptop.",
    img: "/images/feature-360.png",
    video: "/videos/360_video_navigation.mp4",
  },
  {
    label: "IntelliViz – Talk to Your Site",
    subLabel: "IntelliViz uses construction-focused AI to generate reports, detect issues, and answer queries from a single prompt",
    img: "/images/InteliViz.png",
    video: "/videos/AI_chat_with_blur.mp4",
  },
  {
    label: "Sticky Notes",
    subLabel: "Smart Annotation notes as snags pinned directly on objects—bypass the excel sheets.",
    img: "/images/feature-sticky.png",
    video: "/videos/Sticky_Notes.mp4",
  },
  {
    label: "Compare Progress",
    subLabel: "Compare progress views between two dates—spot changes at a glance.",
    img: "/images/feature-camera.png",
    video: "/videos/Compare_Dates.mp4",
  },
  {
    label: "Secure QR Code Access",
    subLabel: "Instantly share secure site access with clients or consultants—temporarily.",
    img: "/images/feature-qr.png",
    video: "/videos/Secure_QR_code.mp4",
  },
  {
    label: "Calendar Timeline",
    subLabel: "Compare site progress by date and time—floor by floor, in one view.",
    img: "/images/feature-calendar.png",
    video: "/videos/Calendar_Timeline.mp4",
  },
  {
    label: "Virtual Site Meet",
    subLabel: "Meet your team on- site—remotely, without leaving your desk.",
    img: "/images/feature-virtual.png",
    video: "/videos/Virtual_Site_Meet.mp4",
  },
  {
    label: "Live 360° Stream",
    subLabel: "Broadcast your site in real-time—anywhere, anytime.",
    img: "/images/feature-live.png",
    video: "/videos/360_Live_stream.mp4",
  },
  {
    label: "Floor Plan",
    subLabel: "Navigate your site via floor plans. Click to view any room in 360° — fast, intuitive access to every corner of your project.",
    img: "/images/feature-floorplan.png",
    video: "/videos/Floor_plan.mp4",
  },
];

const videos = [
  { src: "/videos/PersonWalking_fast_speed.mp4", alt: "Worker Demo" },
  { src: "/videos/Floor_map_animation.mp4", alt: "Floorplan Demo" },
  { src: "/videos/Sitepace_ai_engine_logo_animation.mp4", alt: "360 Navigation Demo" },
];

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "transparent", height: "20px" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "transparent", height: "20px" }}
      onClick={onClick}
    >
    </div>
  );
}

export default function FeatureShowcaseNew() {
  const [playingFeatureIdx, setPlayingFeatureIdx] = useState(0);
  const sectionRef = useRef(null);
  const videoRefs = useRef([]);

  // Initialize the array to store video references
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, featureThumbnails.length);
  }, []);

  // Play the video when playingFeatureIdx changes
  useEffect(() => {
    console.log("Playing feature index changed:", playingFeatureIdx);

    // Make sure the video reference exists and try to play it
    if (videoRefs.current[playingFeatureIdx]) {
      const video = videoRefs.current[playingFeatureIdx];

      // Reset the video to the beginning if needed
      video.currentTime = 0;

      // Play the video with error handling (important for mobile browsers)
      const playPromise = video.play();

      if (playPromise !== undefined) {
        playPromise.catch(error => {
          console.error("Video play failed:", error);
        });
      }
    }
  }, [playingFeatureIdx]);

  return (
    <Box
      id="featureShowcase"
      ref={sectionRef}
      sx={{
        width: "100%",
        bgcolor: "#030712",
        py: { xs: 6, md: 10 },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Box sx={{
          mb: { xs: '50px', md: '50px', lg: '80px', xl: "100px" },
        }}>
          <Typography
            variant="body2"
            sx={{
              color: "#A0A4B8",
              mb: {
                xs: 2,
                md: 2,
              },
              fontSize: 18,
              letterSpacing: 1,
              textAlign: { xs: "center", md: "center" },
            }}
          >
            Navigate your site remotely with virtual tours, AI insights, progress tracking, and real-time collaboration—only with SitePace.ai.
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: "#fff",
              fontWeight: 400,
              fontSize: { xs: '2rem', md: '2.4rem', lg: '2.8rem', xl: '3.2rem' },
              mb: 1,
              textTransform: "uppercase",
              textAlign: { xs: "center", md: "center" },
            }}
          >
            360° Walkthroughs That Do More Than Just View
          </Typography>
        </Box>
        {/* main content box */}
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          gap: {
            xs: "30px",
            sm: "30px",
            md: "40px",
            lg: "80px",
            xl: "80px",
          },
          position: "relative",
          px: {
            xs: "0px",
            sm: "20px",
            md: "20px",
            lg: "20px",
            xl: "20px",
          },
        }}>
          {/* dotted line */}
          <Box sx={{
            display: {
              xs: "none",
              sm: "block",
              md: "block",
              lg: "block",
              xl: "block",
            },
            position: "absolute",
            top: "0px",
            right: "0rem",
            zIndex: 0,
            width: "100%",
            height: "100%",
          }}>
            <Image
              src={LINKLINEBIG}
              alt="Feature Showcase Logo"
              width={500}
              height={500}
              className={styles.linkLineBig}
            />
          </Box>
          <Box sx={{
            display: {
              xs: "block",
              sm: "none",
              md: "none",
              lg: "none",
              xl: "none",
            },
            position: "absolute",
            top: {
              xs: "35rem",
              sm: "42rem",
            },
            right: {
              xs: "1rem",
              sm: "1rem",
              md: "3rem",
            },
            zIndex: 0,
            width: "auto",
            height: "82%",
          }}>
            <Image
              src={LINKLINEMOB}
              alt="Feature Showcase Logo"
              width={500}
              height={500}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Box>
          {/* top box  */}
          <Box sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row",
              md: "row",
              lg: "row",
              xl: "row",
            },
            justifyContent: "space-between",
            gap: {
              xs: "20px",
              sm: "30px",
              md: "40px",
              lg: "50px",
              xl: "60px",
            },
          }}>
            {/* left video box */}
            <Box
              className={styles.TopVideoBox}
              sx={{
                width: "100%",
                position: "relative",
                zIndex: 1,
                height: {
                  xs: "22rem",
                  sm: "22rem",
                  md: "35rem",
                  lg: "30rem",
                  xl: "31rem",
                },
                maxWidth: {
                  xs: "100%",
                  sm: "50%",
                  md: "50%",
                  lg: "50%",
                  xl: "50%",
                },
                borderRadius: "25px",
                overflow: "hidden",
              }}>
              <video
                src={videos[0].src}
                // controls
                autoPlay={true}
                muted
                loop
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Box>
            {/* right content box */}
            <Box
              className={styles.TopVideoBox}
              sx={{
                width: "100%",
                position: "relative",
                zIndex: 1,
                height: {
                  xs: "22rem",
                  sm: "22rem",
                  md: "35rem",
                  lg: "30rem",
                  xl: "31rem",
                },
                maxWidth: {
                  xs: "100%",
                  sm: "50%",
                  md: "50%",
                  lg: "50%",
                  xl: "50%",
                },
                borderRadius: "25px",
                overflow: "hidden",
              }}>
              <video
                src={videos[1].src}
                // controls
                autoPlay
                muted
                loop
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              
            </Box>
          </Box>
          {/* logobox */}
          <Box
            className={styles.LogoBox}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
              backgroundColor: "#030712",
              // border: "1px solid #1F2937",
              height: {
                xs: "150px",
                sm: "250px",
                md: "350px",
                lg: "250px",
                xl: "280px",
              },

              borderRadius: {
                xs: "18px",
                sm: "20px",
                md: "25px",
                lg: "30px",
                xl: "32px",
              },
              position: "relative",
              zIndex: 1,
              // py: {
              //   xs: "20px",
              //   sm: "30px",
              //   md: "50px",
              //   lg: "40px",
              //   xl: "40px",
              // }
            }}>
            {/* <Box
              
              sx={{
                width: {
                  xs: "40%",
                  sm: "30%",
                  md: "40%",
                  lg: "40%",
                  xl: "30%",
                },
                height: "auto",
              }}> */}
            <video
              src={videos[2].src}
              autoPlay
              muted
              loop
              // controls
              style={{
                width: "100%",
                height: "100%",
                objectFit: "fill",
                border: "none",
                maxHeight: "280px",
              }}

            />
            {/* </Box> */}
          </Box>

          {/* grid Box */}
          <Box sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(3, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(3, 1fr)",
            },
            gap: {
              xs: "30px",
              sm: "30px",
              md: "30px",
              lg: "60px",
              xl: "60px",
            },
            width: "100%",
            alignItems: "baseline",
          }}>
            {/* Map through featureThumbnails to create multiple card items */}
            {featureThumbnails.map((feature, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                  position: "relative",
                  zIndex: 1,
                }}
                className={styles.featureCard}
              >
                {/* video box */}
                <Box sx={{
                  width: "100%",
                  height: {
                    xs: "170px",
                    sm: "170px",
                    md: "270px",
                    lg: "250px",
                    xl: "220px",
                  },
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
                  className={styles.featureCardVideoBox}
                >
                  <video
                    ref={el => videoRefs.current[index] = el}
                    src={feature.video}
                    // controls
                    // controlsList="nodownload"
                    autoPlay={true}
                    muted
                    loop={true}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    
                  />
                </Box>
                {/* text box */}
                <Box sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: {
                    xs: "6px",
                    sm: "8px",
                    md: "10px",
                    lg: "12px",
                  },
                  paddingRight: {
                    xs: "30px",
                    sm: "30px",
                    md: "0px",
                    lg: "0px",
                    xl: "0px",
                  }
                }}>
                  <Typography variant="h6" sx={{
                    fontSize: {
                      xs: '1.8rem',
                      md: '2.2rem',
                      lg: '2.4rem',
                      xl: '3rem',
                    },
                    fontWeight: 500,
                    color: "#C9F625",
                  }}>
                    {feature.label}
                  </Typography>
                  <Typography variant="body2" sx={{
                    fontSize: {
                      xs: '1.4rem',
                      md: '1.6rem',
                      lg: '1.8rem',
                      xl: '2rem',
                    },
                    fontWeight: 500,
                    color: "#fff",
                  }}>
                    {feature.subLabel}
                  </Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>



      </Container>
    </Box>
  );
}
