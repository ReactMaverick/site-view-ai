import React, { useState, useRef, useLayoutEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardMedia,
} from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { FSLOGO } from "@/values/Constants/ImageConstants";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styles from "./FeatureShowcase.module.css";
import { isMobileScreen, isSmallScreen } from "@/values/Constants/ResponsiveCheck";

gsap.registerPlugin(ScrollTrigger);

const featureThumbnails = [
  {
    label: "360° Navigation",
    img: "/images/feature-360.jpg",
    video: "/videos/360_video_navigation.mp4",
  },
  {
    label: "Sticky Notes",
    img: "/images/feature-sticky.jpg",
    video: "/videos/Sticky_Notes.mp4",
  },
  {
    label: "Camera Dates",
    img: "/images/feature-camera.jpg",
    video: "/videos/Compare_Dates.mp4",
  },
  {
    label: "Secure QR Code Access",
    img: "/images/feature-qr.jpg",
    video: "/videos/Secure_QR_code.mp4",
  },
  {
    label: "Calendar Timeline",
    img: "/images/feature-calendar.jpg",
    video: "/videos/Calendar_Timeline.mp4",
  },
  {
    label: "Virtual Site Meet",
    img: "/images/feature-virtual.jpg",
    video: "/videos/Virtual_Site_Meet.mp4",
  },
  {
    label: "Live 360° Stream",
    img: "/images/feature-live.jpg",
    video: "/videos/360_Live_stream.mp4",
  },
  {
    label: "Floor Plan",
    img: "/images/feature-floorplan.jpg",
    video: "/videos/Floor_plan.mp4",
  },
];

const videos = [
  { src: "/videos/PersonWalking_fast_speed.mp4", alt: "Worker Demo" },
  { src: "/videos/Floor_map_animation.mp4", alt: "Floorplan Demo" },
];

export default function FeatureShowcase() {
  const [selectedFeatureIdx, setSelectedFeatureIdx] = useState(0);
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useGSAP(() => {
    const sectionElement = sectionRef.current;

    if (!sectionElement) return;

    const scrollTriggerConfig = {
      trigger: sectionElement,
      start: `top+=${isMobileScreen()? "100px" : isSmallScreen() ? "300px" : "600px"} top`,
      end: `+=${isMobileScreen() ? featureThumbnails.length * 200 : featureThumbnails.length * 300}`, // Adjust scroll length dynamically
      scrub: true,
      pin: true,
      pinSpacing: true, // Ensures proper spacing for pinned elements
      // markers: true, // Enable markers for debugging
      onUpdate: (self) => {
        const progress = self.progress;
        const scaledProgress = progress * 1; // Scale up the progress
        const easedProgress = gsap.parseEase("power1.inOut")(scaledProgress);
        const interpolatedIdx = gsap.utils.interpolate(0, featureThumbnails.length - 1, easedProgress);
        const idx = Math.round(interpolatedIdx);
        setSelectedFeatureIdx(idx);
      },
    };

    ScrollTrigger.create(scrollTriggerConfig);
  });

  return (
    <Box
      id="featureShowcase"
      ref={sectionRef}
      sx={{
        width: "100%",
        bgcolor: "#030712",
        py: { xs: 6, md: 10 },
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative" }}>
        <Box sx={{ mb: { xs: 3, md: 5 } }}>
          <Typography
            variant="body2"
            sx={{
              color: "#A0A4B8",
              mb: 1,
              fontSize: 14,
              textAlign: { xs: "center", md: "center" },
            }}
          >
            Take that important decision in minutes, Not Hours
          </Typography>
          <Typography
            variant="h4"
            sx={{
              color: "#fff",
              mb: 4,
              fontWeight: 600,
              letterSpacing: 1,
              textAlign: { xs: "center", md: "center" },
            }}
          >
            YOUR PROJECT, ANYWHERE, ANYTIME
          </Typography>
        </Box>

        {/* Constant Right Video */}
        <Box
          sx={{
            position: "absolute",
            height: {
              xs: "45%",
              sm: "60%",
              md: "70%",
              lg: "68%",
              xl: "68%",
            },
            width: {
              xs: "50%",
              sm: "45%",
              md: "45%",
              lg: "68%",
              xl: "68%",
            },
            top: {
              xs: "42%",
              md: "45%",
              lg: "45%",
              xl: "45%",
            },
            transform: "translateY(-50%)",
            right: {
              xs: "5%",
              md: "5%",
              lg: "0",
              xl: "0",
            },
            zIndex: -4,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <video
            src={videos[1].src}
            autoPlay
            muted
            loop
            playsInline
            style={{ height: "100%", width: "100%", objectFit: "contain", objectPosition: "right" }}
          />
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: '30px' }}>
          <Box
            sx={{
              position: "relative",
              width: {
                xs: "45%",
                sm: "50%",
                md: "50%",
                lg: "58%",
                xl: "58%"
              },
              height: {
                xs: "120px",
                sm: "250px",
                md: "300px",
                lg: "400px",
                xl: "400px"
              },
              overflow: "hidden",
              borderRadius: {
                xs: "20px",
                md: "32px",
                lg: "32px",
                xl: "32px"
              },
            }}
          >
            <video
              src={videos[0].src}
              autoPlay
              muted
              loop
              playsInline
              style={{ width: "100%", borderRadius: 17, height: "100%", objectFit: "inherit" }}
            />
          </Box>
          <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "stretch",
            position: "relative",
            flexDirection: {
              xs: "column-reverse",
              sm: "column-reverse",
              md: "row",
              lg: "row",
              xl: "row"
            },
            height: {
              xs: "270px",
              sm: "400px",
              md: "450px",
              lg: "400px",
              xl: "480px"
            },
          }}>
            <CardMedia
              component={"video"}
              src={featureThumbnails[selectedFeatureIdx].video}
              autoPlay
              muted
              loop
              playsInline
              sx={{
                width: {
                  xs: "45%",
                  sm: "50%",
                  md: "50%",
                  lg: "58%",
                  xl: "58%"
                },
                overflow: "hidden",
                height: "100%",
                borderRadius: {
                  xs: "20px",
                  md: "32px",
                  lg: "32px",
                  xl: "32px"
                },
                position: "relative",
                height: {
                  xs: "100%",
                  sm: "100%",
                  md: "100%",
                  lg: "100%",
                  xl: "100%"
                }, // Set a fixed height
                borderRadius: 4,
                objectFit: "cover",
                opacity: 1,
                transition: "opacity 0.3s ease-in-out",
              }}
            />
            <Box sx={{
              width: {
                xs: "100%",
                md: "45%",
                lg: "40%",
                xl: "40%"
              },
              height: {
                xs: "auto",
                sm: "auto",
                md: "100%",
                lg: "100%",
                xl: "100%"
              },
              display: "flex",
              alignItems: "flex-start",
              justifyContent: {
                xs: "flex-end",
                md: "space-between",
                lg: "space-between",
                xl: "space-between"
              },
              flexDirection: "column",
            }}>
              <Box
                sx={{
                  color: "#fff",
                  padding: {
                    xs: "30px 50px 30px 0",
                    md: "40px 80px 0px 20px",
                    lg: "40px 80px 0px 20px",
                    xl: "40px 80px 0px 20px"
                  },
                }}
              >
                <Typography variant="h3" sx={{
                  fontWeight: 400,
                  mb: 1,
                  fontSize: {
                    xs: '1.6rem',
                    md: '2.2rem',
                    lg: '2.6rem',
                    xl: '3rem'
                  },

                }}>
                  {featureThumbnails[selectedFeatureIdx].label}
                </Typography>
                <Typography variant="h4" sx={{
                  fontWeight: 200,
                  fontSize: { xs: '1.4rem', md: '1.8rem', lg: '2rem', xl: '2.2rem' },
                  color: "#A0A4B8"
                }}>
                  Click and Walk. Explore any room in 360°—right from your mobile or
                  laptop.
                </Typography>
              </Box>
              <Card
                sx={{
                  borderRadius: {
                    xs: "20px",
                    md: "32px",
                    lg: "32px",
                    xl: "32px"
                  },
                  overflow: "hidden",
                  bgcolor: "#030712",
                  border: "2px solid #1F2937",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: {
                    xs: "115px",
                    sm: "150px",
                    md: "200px",
                    lg: "250px",
                    xl: "250px"
                  },
                  position: {
                    xs: "absolute",
                    md: "relative",
                    lg: "relative",
                    xl: "relative"
                  },
                  zIndex: 1,
                  width: {
                    xs: "40%",
                    sm: "30%",
                    md: "50%",
                    lg: "85%",
                    xl: "85%"
                  },
                  marginLeft: "auto",
                  padding: {
                    xs: "10px",
                    sm: "30px",
                    md: "30px",
                    lg: "50px",
                    xl: "50px"
                  },
                  right: {
                    xs: "0",
                    md: "0",
                    lg: "0",
                    xl: "0"
                  },
                  bottom: {
                    xs: "5%",
                    md: "0",
                    lg: "0",
                    xl: "0"
                  }
                }}
              >
                <Image
                  src={FSLOGO}
                  alt="Sitepace Logo"
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                  width={500}
                  height={500}
                />
              </Card>

            </Box>
          </Box>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Slider
            className="featureSlider"
            dots={false}
            arrows={false}
            infinite={false}
            speed={500}
            slidesToShow={8} // Number of slides visible at once
            slidesToScroll={1} // Number of slides to scroll at a time
            responsive={[
              {
                breakpoint: 1024, // Adjust for smaller screens
                settings: {
                  slidesToShow: 4.5,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 600, // Adjust for smaller screens
                settings: {
                  slidesToShow: 4.2,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 480, // Adjust for smaller screens
                settings: {
                  slidesToShow: 3.2,
                  slidesToScroll: 1,
                },
              },
            ]}
          >
            {featureThumbnails.map((feature, idx) => (
              <Card
                key={idx}
                sx={{
                  height: {
                    xs: "150px",
                    md: "150px",
                    lg: "170px",
                    xl: "170px"
                  },
                  width: "100%",
                  position: "relative",
                  border:
                    idx === selectedFeatureIdx
                      ? "3px solid #C6FF00"
                      : "3px solid transparent",
                  borderRadius: 3,
                  transition: "all 0.3s ease-in-out",
                }}
                onClick={() => feature.video && setSelectedFeatureIdx(idx)}
              >
                <CardMedia
                  component="video"
                  src={feature.video}
                  sx={{
                    height: "100%",
                    width: "100%",
                    objectFit: "cover",
                  }}
                />
              </Card>
            ))}
          </Slider>
        </Box>

        {/* Constant Right Text */}


      </Container>
    </Box>
  );
}
