"use client";
import { Box, Button, Container, LinearProgress, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import React, { Fragment, useLayoutEffect, useState } from "react";
import { CTABG, EXECUTION, HELMETCAMERA, LINEARROW, PLANNING, TRYNOW } from "@/values/Constants/ImageConstants";
import { Icon } from "@iconify/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import CustomProgress from "../CustomProgress/CustomProgress";
import $ from "jquery";
import { commonColor } from "@/values/Colors/CommonColor";
import CustomProgressArrow from "../CustomProgress/CustomProgressArrow";
import { isSmallScreen } from "@/values/Constants/ResponsiveCheck";

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

  const resetProgress = () => {

    setProgress([
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
  }

  const updateProgress = (index) => {
    setProgress((prev) => {
      const newProgress = [...prev];
      newProgress[index].value = 100;
      newProgress[index].titleColor = commonColor.green;
      newProgress[index].arrowColor = commonColor.green;
      return newProgress;
    });
  };

  useLayoutEffect(() => {
    gsap.registerPlugin(useGSAP, ScrollTrigger);
  }, []);

  useGSAP(() => {

    const ctaImages = gsap.utils.toArray(".ctaImage");

    const numScrolls = ctaImages.length;

    if (isSmallScreen()) {

      ctaImages.forEach((element, index) => {
        updateProgress(index);
      });

      return;
    };

    // For each ctaImage, create a progress bar that fills as the image scrolls into view
    // ctaImages.forEach((ctaImage, index) => {
    //   const progressBar = $('.progress-' + index);

    //   // console.log("progressBar", progressBar);

    //   gsap.to(progressBar, {
    //     ease: 'none',
    //     scrollTrigger: {
    //       trigger: ctaImage,
    //       start: `${index * ctaImage.offsetWidth} left`, // Start when the left of the trigger hits the left of the viewport
    //       end: () => "+=" + ctaImage.offsetWidth,
    //       scrub: 0.3,
    //       id: 'progress' + index,
    //       onUpdate: self => {
    //         const progress = self.progress * 100;
    //         // console.log("progress", progress);

    //         // Update the progress bar width
    //         // $('.progress-' + index).css('width', progress + '%');
    //         setProgress((prev) => {
    //           const newProgress = [...prev];
    //           // Update the progress bar width
    //           newProgress[index].value = progress;
    //           // Update the color of the progress bar with arrow (Only arrow portion)
    //           // if (index === 3) {
    //           newProgress[index].arrowColor = progress >= 90 ? commonColor.green : commonColor.lightGrey;
    //           // }

    //           // Update the color of the progress bar without arrow portions
    //           if (progress === 100) {
    //             index === 3 ? newProgress[index].titleColor = commonColor.green : newProgress[index].titleColor = commonColor.green;
    //           } else {
    //             index === 3 ? newProgress[index].titleColor = commonColor.lightGrey : newProgress[index].titleColor = commonColor.lightGrey;
    //           }

    //           return newProgress;
    //         });
    //       },
    //     },

    //   });
    // });

    // Create a horizontal slider for the ctaImages
    // gsap.to(ctaImages, {
    //   xPercent: -100 * (ctaImages.length - 1),
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: ".CTASection",
    //     start: "top top",
    //     // markers: true,  // Set to true to see the trigger area
    //     pin: true,
    //     scrub: 0.5,
    //     onEnter: () => {
    //       // console.log("Enter");

    //       gsap.to('.headerInner', {
    //         yPercent: -100,
    //       })
    //     },
    //     onEnterBack: () => {
    //       // console.log("Enter");

    //       gsap.to('.headerInner', {
    //         yPercent: -100,
    //       })
    //     },
    //     onLeave: () => {
    //       // console.log("Leave");

    //       setTimeout(() => {

    //         gsap.to('.headerInner', {
    //           yPercent: 0,
    //         })
    //       }, 2000);
    //     },
    //     onLeaveBack: () => {
    //       // console.log("Leave");

    //       setTimeout(() => {

    //         gsap.to('.headerInner', {
    //           yPercent: 0,
    //         })
    //       }, 2000);
    //     },
    //     snap: {
    //       snapTo: 1 / (numScrolls - 1),
    //       duration: 0.3,
    //       delay: 0,  // No delay in snapping
    //       ease: "power2.inOut",
    //       inertia: false  // Disable inertia-based scrolling
    //     },
    //     id: 'ctaImages',
    //     end: () => "+=" + $('.ctaImageFlex').width(),
    //   },

    // });

    const tl = gsap.timeline({
      repeat: -1, // Loop infinitely
      repeatDelay: 0.5, // No delay between loops
      // yoyo: true, // Reverse the animation at the end of each loop
    });

    // Initial position
    tl.to('.ctaImageFlex', {
      x: 0,
      duration: 0.1,
      onStart: () => updateProgress(0),
    });

    // Loop through each scroll step
    for (let i = 1; i < numScrolls; i++) {
      tl.to('.ctaImageFlex', {
        xPercent: -(100 / numScrolls) * i,
        onStart: () => updateProgress(i),
      }, '+=1');
    }

    // Reset position
    tl.to('.ctaImageFlex', {
      xPercent: 0,
      onStart: () => resetProgress(),
    }, '+=1');


    // Pin the CTASection (up to 2000px)
    gsap.to('.CTASection', {
      scrollTrigger: {
        trigger: ".CTASection",
        start: "top top",
        // end: isSmallScreen() ? "+=5000" : "+=2000",
        end: "+=2000",
        // markers: true,  // Set to true to see the trigger area
        pin: true,
        scrub: 1,
      }
    });



  });

  return (
    <Box sx={MUIStyle.CTAMain} className="CTASection">
      <Container maxWidth="xl" sx={MUIStyle.CTAContainer}>
        <Box sx={MUIStyle.CTAInner}>
          <Typography variant="h2" sx={MUIStyle.CTAHeading}>
            “SitePace.ai for every stage of construction”
          </Typography>
        </Box>
        <Box sx={MUIStyle.CTAImgInner}>
          <Box
            component={"img"}
            src={HELMETCAMERA}
            alt="CTA"
          />
        </Box>
        <Box component={"ul"} sx={MUIStyle.CTAList}>
          {progress.map((item, index) => (
            <Fragment key={index}>
              <CustomProgressArrow
                progressValue={item.value}
                progressClass={"progress-" + index}
                progressColor={item.color}
                arrowColor={item.arrowColor}
                opacity={item.value === 0 ? 0 : 1}
              />
              {index !== progress.length - 1 ?
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
                :
                <Button
                  sx={[MUIStyle.BannerBtn,
                  {
                    // color: item.titleColor,
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
              }
            </Fragment>
          ))}

        </Box>
      </Container>
      <Box sx={MUIStyle.CTAImgFlex} className="ctaImageFlex">
        {[PLANNING, EXECUTION, CTABG, TRYNOW].map((image, index) => (
          <Box component={"img"} src={image} alt="CTA" sx={MUIStyle.CTAImg} className="ctaImage" key={index} />
        ))}
      </Box>
    </Box>
  );
}
