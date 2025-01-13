"use client";
import React, { useLayoutEffect, useRef, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import gsap from "gsap";
import { VIDEOINNER } from "@/values/Constants/ImageConstants";
import SiteViewSVG from "../SiteViewSVG/SiteViewSVG";
import { tabBarSecContentImages, tabBarSecContentWhySiteView } from "./TabBarSecContent";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { commonColor } from "@/values/Colors/CommonColor";
import ImageSlider from "../ImageSliderNew/ImageSliderNew";

export default function TabBarSec({
  theme = "light",
  caption = "The Full Picture, Every Time",
  title = "Complete site visibility means fewer surprises and better decisions, every single day",
  tabBarContents = tabBarSecContentWhySiteView,
  page = "WhySiteView"
}) {
  const buttonRefs = useRef([]);
  const bodyRefs = useRef([]);
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiper, setSwiper] = useState(null);

  const container = useRef(null);
  const imagesRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useGSAP(
    (context, contextSafe) => {

      const buttonElements = buttonRefs.current;

      const handleClick = contextSafe((index) => {
        const element = bodyRefs.current[index];
        const isCollapsed = gsap.getProperty(element, "height") === 0;

        const expandedElements = bodyRefs.current.filter((el, i) => i !== index && gsap.getProperty(el, "height") !== 0);

        // Collapse all other elements
        expandedElements.forEach((el, i) => {
          gsap.to(el, {
            marginTop: 0,
            height: 0,
            padding: 0,
            minHeight: 0,
            opacity: 0,
            duration: 0.2
          });
        });

        if (isCollapsed) {

          setActiveIndex(index);

          // Expand the element
          gsap.to(element, {
            marginTop: window.innerHeight * 0.02,
            height: "auto",
            padding: window.innerHeight * 0.02,
            minHeight: window.innerHeight * 0.15, // Adjust minHeight as needed
            opacity: 1,
            duration: 0.2
          });

          swiper?.slideTo(index);

          // gsap.fromTo(imagesRef.current, {
          //   opacity: 0,
          //   scale: 0.5
          // }, {
          //   opacity: 1,
          //   scale: 1,
          //   duration: 0.5,
          // }
          // );
        } else {
          // Collapse the element
          gsap.to(element, {
            marginTop: 0,
            height: 0,
            padding: 0,
            minHeight: 0,
            opacity: 0,
            duration: 0.2
          });

          // gsap.fromTo(imagesRef.current, {
          //   opacity: 1,
          //   scale: 1
          // }, {
          //   opacity: 0,
          //   scale: 0.5,
          //   duration: 0.5,
          //   onComplete: () => {
          //     setActiveIndex(null);
          //   }
          // });
        }
      });

      buttonElements.forEach((button, index) => {
        button.addEventListener("click", () => handleClick(index));
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=" + buttonElements.length * 1500 + "px",
          // end: "bottom bottom",
          scrub: 1,
          // markers: true,
          pin: true,
          id: "tabBarSec",
          snap: {
            snapTo: 1 / ((tabBarContents.length) * 2),
            duration: 0.1,
            delay: 0,  // No delay in snapping
            ease: "power3.inOut",
          }
        }
      });

      // Expand and collapse all elements one by one in sequence on scroll
      buttonElements.forEach((button, index) => {

        tl.to(bodyRefs.current[index], {
          marginTop: window.innerHeight * 0.02,
          height: "auto",
          padding: window.innerHeight * 0.02,
          minHeight: window.innerHeight * 0.15, // Adjust minHeight as needed
          opacity: 1,
          onComplete: () => {
            swiper?.slideTo(index);
          },
        });

        tl.to(bodyRefs.current[index], {
          marginTop: 0,
          height: 0,
          padding: 0,
          minHeight: 0,
          opacity: 0,
          onReverseComplete: () => {
            swiper?.slideTo(index);
          },
        });
      });

      // return () => {
      //   buttonElements.forEach((button, index) => {
      //     button.removeEventListener("click", () => handleClick(index));
      //   });
      // }

    },
    { dependencies: [swiper, buttonRefs, bodyRefs], scope: container }
  );

  // console.log("Swiper", swiper);


  return (
    <Box sx={[MUIStyle.TabBarSec,
    { background: theme === "light" ? commonColor.white : commonColor.black }
    ]}
      ref={sectionRef}
    >
      <Box sx={MUIStyle.BannerSVGContainer}>
        <SiteViewSVG
          fillOpacity={theme === "light" ? 0.5 : 0.05}
        />
      </Box>
      <Container maxWidth="xl" sx={{ position: "relative", zIndex: 1 }}>
        <Box sx={MUIStyle.AboutSecOuterBox}>
          <Box sx={MUIStyle.AboutSecHeadingBox}>
            <Typography variant="body1" sx={MUIStyle.AboutSecText}>
              {caption}
            </Typography>
            <Typography variant="h2" sx={[MUIStyle.AboutSecHeading, {
              color: theme === "light" ? commonColor.black : commonColor.white
            }]}>
              {title}
            </Typography>
          </Box>
        </Box>
        <Box sx={MUIStyle.TabBarSecMyRow}>
          <Box sx={MUIStyle.TabBarSecMyColLeft}>
            <Box sx={MUIStyle.TabBarSecImageBox} ref={imagesRef}>
              {/* {activeIndex !== null && tabBarContents[activeIndex].images && ( */}
              <ImageSlider
                // key={index}
                slideComponents={tabBarSecContentImages[page].map((image, index) => (
                  <Box
                    key={index}
                    component={"img"}
                    src={image}
                    alt="TabBarSec"
                    sx={MUIStyle.TestImage}
                  />
                ))
                }
                swiper={swiper}
                setSwiper={setSwiper}
              />
              {/* )} */}
              {/* <Box
                component={"img"}
                src={tabBarSecContent[0].images[0]}
                alt="TabBarSec"
                sx={MUIStyle.TestImage}
              /> */}
            </Box>
          </Box>
          <Box sx={MUIStyle.TabBarSecMyColRight}>
            <Box sx={MUIStyle.TabBarSecInnerBox} ref={container}>
              {tabBarContents.map((tabBar, index) => (
                <Box
                  key={index}
                  sx={MUIStyle.TabBarSecButton}
                >
                  <Box
                    sx={[MUIStyle.TabBarSecButtonHead, {
                      background: theme === "light" ? commonColor.black5 : commonColor.white10,
                      color: theme === "light" ? commonColor.black : commonColor.white
                    }]}
                    ref={(el) => (buttonRefs.current[index] = el)}
                  >
                    {tabBar.title}
                  </Box>
                  <Box
                    sx={MUIStyle.TabBarSecButtonBody}
                    ref={(el) => (bodyRefs.current[index] = el)}
                  >
                    <Box sx={MUIStyle.TabBarSecButtonBodyTop}>
                      <Typography
                        variant="h4"
                        sx={MUIStyle.TabBarSecButtonBodyTopHeading}
                      >
                        {tabBar.title}
                      </Typography>
                      <Typography
                        component={"span"}
                        sx={MUIStyle.TabBarSecButtonBodyTopText}
                      >
                        {tabBar.subtitle}
                      </Typography>
                    </Box>
                    <Typography
                      variant="body1"
                      sx={MUIStyle.TabBarSecButtonBodyText}
                    >
                      {tabBar.content}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
