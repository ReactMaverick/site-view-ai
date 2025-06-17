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
      start: "top+=200px top",
      end: `+=${featureThumbnails.length * 300}`, // Reduce scroll length for faster transitions
      scrub: true,
      pin: true,
      markers: true,
      pinSpacing: true,
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
        height: "150vh",
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
              xs: "60%",
              md: "40%",
              lg: "68%",
              xl: "68%",
            },
            width: "43%",
            top: "45%",
            transform: "translateY(-50%)",
            right: 0,
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
                md: "58%",
                lg: "58%",
                xl: "58%"
              },
              height: {
                xs: "150px",
                md: "150px",
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
              style={{ width: "400px",borderRadius: 17, height: "300px", objectFit: "inherit" }}
            />
          </Box>
          <Box sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "stretch",
            height: {
              xs: "200px",
              md: "360px",
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
                  md: "58%",
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
                height: "300px", // Set a fixed height
                borderRadius: 4,
                objectFit: "cover",
                opacity: 1,
                transition: "opacity 0.3s ease-in-out",
              }}
            />
            <Box sx={{
              width: "40%",
              height: "100%",
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              flexDirection: "column",
            }}>
              <Box
                sx={{
                  color: "#fff",
                  padding: '40px 80px 0px 20px',
                }}
              >
                <Typography variant="h3" sx={{ fontWeight: 400, mb: 1 }}>
                  {featureThumbnails[selectedFeatureIdx].label}
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 200, color: "#A0A4B8" }}>
                  Click and Walk. Explore any room in 360°—right from your mobile or
                  laptop.
                </Typography>
              </Box>
              <Card
                sx={{
                  borderRadius: '32px',
                  overflow: "hidden",
                  bgcolor: "#030712",
                  border: "2px solid #1F2937",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: '250px',
                  position: "relative",
                  zIndex: 1,
                  width: "85%",
                  marginLeft: "auto",
                  padding: '50px',
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
            dots={true}
            infinite={false}
            speed={500}
            slidesToShow={3} // Number of slides visible at once
            slidesToScroll={1} // Number of slides to scroll at a time
            responsive={[
              {
                breakpoint: 768, // Adjust for smaller screens
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ]}
          >
            {featureThumbnails.map((feature, idx) => (
              <Card
                key={idx}
                sx={{
                  height: "122px",
                  width: "82px",
                  position: "relative",
                  border:
                    idx === selectedFeatureIdx
                      ? "2px solid #C6FF00"
                      : "2px solid transparent",
                  borderRadius: 2,
                  transition: "border 0.2s",
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
