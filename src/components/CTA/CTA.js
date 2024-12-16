"use client";
import { Box, Button, Container, LinearProgress, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import React, { Fragment, useLayoutEffect, useState } from "react";
import { CTABG, EXECUTION, HELMATE, helmetCamera, LINEARROW, PLANNING } from "@/values/Constants/ImageConstants";
import { Icon } from "@iconify/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import CustomProgress from "../CustomProgress/CustomProgress";
import $ from "jquery";
import { commonColor } from "@/values/Colors/CommonColor";
import CustomProgressArrow from "../CustomProgress/CustomProgressArrow";

export default function CTA() {

  const [progress, setProgress] = useState([
    {
      value: 0,
      title: "Planning",
      color: commonColor.green,
      titleColor: commonColor.white,
    },
    {
      value: 0,
      title: "Execution",
      color: commonColor.green,
      titleColor: commonColor.white,
    },
    {
      value: 0,
      title: "Close Out",
      color: commonColor.green,
      titleColor: commonColor.white,
    },
    {
      value: 0,
      title: "Try Now",
      color: commonColor.green,
      titleColor: commonColor.white,
      arrowColor: commonColor.lightGrey,
    }
  ]);

  useLayoutEffect(() => {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
  }, []);

  useGSAP(() => {

    const ctaImages = gsap.utils.toArray(".ctaImage");

    // For each ctaImage, create a progress bar that fills as the image scrolls into view
    ctaImages.forEach((ctaImage, index) => {
      const progress = document.querySelectorAll('progress-' + index);

      gsap.to(progress, {
        value: 100,
        ease: 'none',
        scrollTrigger: {
          trigger: ctaImage,
          start: `${index * ctaImage.offsetWidth} left`, // Start when the left of the trigger hits the left of the viewport
          end: () => "+=" + ctaImage.offsetWidth,
          scrub: 0.3,
          id: 'progress' + index,
          onUpdate: self => {
            const progress = self.progress * 100;
            // console.log("progress", progress);

            // Update the progress bar width
            // $('.progress-' + index).css('width', progress + '%');
            setProgress((prev) => {
              const newProgress = [...prev];
              // Update the progress bar width
              newProgress[index].value = progress;
              // Update the color of the progress bar with arrow (Only arrow portion)
              if (index === 3) {
                newProgress[index].arrowColor = progress >= 90 ? commonColor.green : commonColor.lightGrey;
              }

              // Update the color of the progress bar without arrow portions
              if (progress === 100) {
                index === 3 ? newProgress[index].titleColor = commonColor.green : newProgress[index].titleColor = commonColor.green;
              } else {
                index === 3 ? newProgress[index].titleColor = commonColor.lightGrey : newProgress[index].titleColor = commonColor.lightGrey;
              }

              return newProgress;
            });
          },
        },

      });
    });

    // Create a horizontal slider for the ctaImages
    gsap.to(ctaImages, {
      xPercent: -100 * (ctaImages.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".CTASection",
        start: "top -300px",
        // markers: true,  // Set to true to see the trigger area
        pin: true,
        scrub: 1,
        // snap: 1 / 3,
        id: 'ctaImages',
        end: () => "+=" + $('.ctaImageFlex').width(),
      },

    });

  });

  return (
    <Box sx={MUIStyle.CTAMain} className="CTASection">
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={MUIStyle.CTAInner}>
          <Typography variant="h2" sx={MUIStyle.CTAHeading}>
            “SiteView.ai for every stage of construction”
          </Typography>
        </Box>
        <Box sx={MUIStyle.CTAImgInner}>
          <Box component={"img"} src={helmetCamera} alt="CTA" sx={MUIStyle.CTAImg} />
        </Box>
        <Box component={"ul"} sx={MUIStyle.CTAList}>
          {progress.map((item, index) => (
            <Fragment key={index}>
              {index !== progress.length - 1 ?
                <>
                  <CustomProgress
                    progressValue={item.value}
                    progressClass={"progress-" + index}
                    progressColor={item.color}
                    opacity={item.value === 0 ? 0 : 1}
                  />
                  <Typography
                    variant="h4"
                    sx={[MUIStyle.CTAListItemHeading,
                    {
                      color: item.titleColor,
                      opacity: item.value === 0 ? 0 : 1,
                      animation: item.value === 0 ? 'fadeOut .5s ease' : 'fadeIn 1.5s ease',
                    }
                    ]}
                  >
                    {item.title}
                  </Typography>
                </> :
                <>
                  <CustomProgressArrow
                    progressValue={item.value}
                    progressClass={"progress-" + index}
                    progressColor={item.color}
                    arrowColor={item.arrowColor}
                    opacity={item.value === 0 ? 0 : 1}
                  />
                  <Button
                    sx={[MUIStyle.BannerBtn,
                    {
                      color: item.titleColor,
                      opacity: item.value === 0 ? 0 : 1,
                      animation: item.value === 0 ? 'fadeOut .5s ease' : 'fadeIn 1.5s ease',
                    }
                    ]}
                    variant="contained" size="large"
                  >
                    <Box component={"span"} className="BannerBtnIcon" sx={MUIStyle.BannerBtnIcon}>
                      <Icon icon="flowbite:arrow-right-outline" />
                    </Box>
                    {item.title}
                    <Box className="BannerBtnBG" sx={MUIStyle.BannerBtnBG} />
                  </Button>
                </>
              }
            </Fragment>
          ))}

        </Box>
      </Container>
      <Box sx={MUIStyle.CTAImgFlex} className="ctaImageFlex">
        {[PLANNING, EXECUTION, CTABG, CTABG].map((image, index) => (
          <Box component={"img"} src={image} alt="CTA" sx={MUIStyle.CTAImg} className="ctaImage" key={index} />
        ))}
      </Box>
    </Box>
  );
}
