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
      end: `+=${featureThumbnails.length * 1500}`, // Increase scroll length per feature for smoother transitions
      scrub: true,
      pin: true,
      markers: true, // Set to true for debugging
      pinSpacing: true, // Ensures proper spacing for pinned elements
      onUpdate: (self) => {
        const progress = self.progress;
        const scaledProgress = progress * 0.9; // Scale down the progress to slow down index changes
        const easedProgress = gsap.parseEase("power1.inOut")(scaledProgress); // Apply easing to scaled progress
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
        bgcolor: "#0B0E17",
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
              textAlign: { xs: "center", md: "left" },
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
              textAlign: { xs: "center", md: "left" },
            }}
          >
            YOUR PROJECT, ANYWHERE, ANYTIME
          </Typography>
        </Box>

        {/* Constant Right Video */}
        <Box
          sx={{
            position: "absolute",
            height: "800px",
            width: "600px",
            top: 150,
            right: 50,
            zIndex: -4,
            display: { xs: "none", md: "block" },
          }}
        >
          <video
            src={videos[1].src}
            autoPlay
            muted
            loop
            playsInline
            style={{ height: "100%", objectFit: "cover" }}
          />
        </Box>

        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box>
            <video
              src={videos[0].src}
              autoPlay
              muted
              loop
              playsInline
              style={{ width: "400px", height: "300px", objectFit: "inherit" }}
            />
          </Box>

          <Box>
            <CardMedia
              component={"video"}
              src={featureThumbnails[selectedFeatureIdx].video}
              autoPlay
              muted
              loop
              playsInline
              sx={{
                width: "400px",
                objectFit: "cover",
                opacity: 1,
                transition: "opacity 0.3s ease-in-out",
              }}
            />
          </Box>
        </Box>

        <Box sx={{ mt: 4 }}>
          <Grid container gap={2} spacing={2} sx={{ flexWrap: "nowrap" }}>
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
          </Grid>
        </Box>

        {/* Constant Right Text */}
        <Box
          sx={{
            color: "#fff",
            px: 2,
            width: "400px",
            position: "absolute",
            right: 400,
            bottom: 400,
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
            borderRadius: 4,
            overflow: "hidden",
            bgcolor: "#23263A",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: 120,
            position: "absolute",
            zIndex: 1,
            width: "250px",
            right: 300,
            bottom: 150,
          }}
        >
          <Image
            src={FSLOGO}
            alt="Sitepace Logo"
            style={{ width: "80%", objectFit: "contain" }}
            width={500}
            height={500}
          />
        </Card>
      </Container>
    </Box>
  );
}
