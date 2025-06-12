import React, { useState, useEffect, useRef } from "react";
import { Box, Container, Typography, Grid, Card, CardMedia } from "@mui/material";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const featureThumbnails = [
  { label: "360° Navigation", img: "/images/feature-360.jpg", video: "/videos/360_video_navigation.mp4" },
  { label: "Sticky Notes", img: "/images/feature-sticky.jpg", video: "/videos/Sticky_Notes.mp4" },
  { label: "Camera Dates", img: "/images/feature-camera.jpg", video: "/videos/Compare_Dates.mp4" },
  { label: "Secure QR Code Access", img: "/images/feature-qr.jpg", video: "/videos/Secure_QR_code.mp4" },
  { label: "Calendar Timeline", img: "/images/feature-calendar.jpg", video: "/videos/Calendar_Timeline.mp4" },
  { label: "Virtual Site Meet", img: "/images/feature-virtual.jpg", video: "/videos/Virtual_Site_Meet.mp4" },
  { label: "Live 360° Stream", img: "/images/feature-live.jpg", video: "/videos/360_Live_stream.mp4" },
  { label: "Floor Plan", img: "/images/feature-floorplan.jpg", video: "/videos/Floor_plan.mp4" },
  { label: "Coming Soon: Color Changing", img: "/images/feature-coming.jpg", video: "" },
];

const videos = [
  { src: "/videos/PersonWalking_fast_speed.mp4", alt: "Worker Demo" },
  { src: "/videos/Floor_map_animation.mp4", alt: "Floorplan Demo" },
];

const logo = "/images/sitepace-logo.png";

export default function FeatureShowcase() {
  const [selectedFeatureIdx, setSelectedFeatureIdx] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    let ctx = gsap.context(() => {
      let st = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 10%",
        end: `+=${featureThumbnails.length * 300 }`, // Adjust 300 for scroll length per feature
        scrub: true,
        pin: true,
        markers: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const idx = Math.floor(progress * (featureThumbnails.length - 1));
          setSelectedFeatureIdx(idx);
        },
      });
      return () => st.kill();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box
      ref={sectionRef}
      sx={{
        width: "100%",
        bgcolor: "#0B0E17",
        py: { xs: 6, md: 10 },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Container maxWidth="xl">
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

        <Grid container spacing={4} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 4, overflow: "hidden", bgcolor: "#23263A" }}>
              <CardMedia
                component="video"
                src={videos[0].src}
                autoPlay
                muted
                loop
                playsInline
                sx={{ height: { xs: 320, md: 460 }, objectFit: "cover" }}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 4, overflow: "hidden", bgcolor: "#23263A" }}>
              <CardMedia
                component="video"
                src={videos[1].src}
                autoPlay
                muted
                loop
                playsInline
                sx={{ height: { xs: 180, md: 280 }, objectFit: "cover" }}
              />
            </Card>
          </Grid>
        </Grid>

        <Grid container spacing={4} sx={{ mt: 2 }} alignItems="flex-start">
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 4, overflow: "hidden", bgcolor: "#23263A" }}>
              <CardMedia
                component="video"
                src={featureThumbnails[selectedFeatureIdx].video}
                autoPlay
                muted
                loop
                playsInline
                sx={{ height: { xs: 'auto', md: 'auto' }, width: 'full', objectFit: "cover" }}
                key={featureThumbnails[selectedFeatureIdx].video}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={3} sx={{ marginTop: { xs: 2, md: 10 } }}>
            <Box sx={{ color: "#fff", px: 2 }}>
              <Typography variant="h3" sx={{ fontWeight: 400, mb: 1 }}>
                {featureThumbnails[selectedFeatureIdx].label}
              </Typography>
              <Typography variant="h4" sx={{ fontWeight: 200, color: "#A0A4B8" }}>
                Click and Walk. Explore any room in 360°—right from your mobile or laptop.
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Card
              sx={{
                borderRadius: 4,
                overflow: "hidden",
                bgcolor: "#23263A",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: 120,
              }}
            >
              <CardMedia
                component="img"
                image={logo}
                alt="Sitepace Logo"
                sx={{ width: "80%", objectFit: "contain" }}
              />
            </Card>
          </Grid>
        </Grid>

        <Box sx={{ mt: 4, overflowX: "auto" }}>
          <Grid container spacing={2} sx={{ flexWrap: "nowrap" }}>
            {featureThumbnails.map((feature, idx) => (
              <Grid
                item
                xs={6}
                sm={4}
                md={2}
                key={idx}
                sx={{
                  minWidth: 140,
                  cursor: feature.video ? "pointer" : "not-allowed",
                  opacity: feature.video ? 1 : 0.5,
                  border: idx === selectedFeatureIdx ? "2px solid #C6FF00" : "2px solid transparent",
                  borderRadius: 2,
                  transition: "border 0.2s",
                }}
                onClick={() => feature.video && setSelectedFeatureIdx(idx)}
              >
                <Card
                  sx={{
                    borderRadius: 2,
                    bgcolor: "#23263A",
                    overflow: "hidden",
                    mb: 1,
                  }}
                >
                  <CardMedia
                    component="img"
                    image={feature.img}
                    alt={feature.label}
                    sx={{ height: 70, objectFit: "cover" }}
                  />
                </Card>
                <Typography
                  variant="caption"
                  sx={{
                    color: "#fff",
                    textAlign: "center",
                    display: "block",
                    fontSize: 13,
                    mt: 1,
                  }}
                >
                  {feature.label}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}