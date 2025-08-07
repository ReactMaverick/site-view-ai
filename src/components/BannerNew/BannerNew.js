import { Box, Button, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import { Icon } from "@iconify/react";
import { commonColor } from "@/values/Colors/CommonColor";
import SiteViewSVG from "../SiteViewSVG/SiteViewSVG";
import { useLayoutEffect, useRef, useState } from "react";
import ContactFormModal from "../ContactFormModal/ContactFormModal";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export default function BannerNew({
  theme = "light",
  headerButtonText = "Simplify Construction",
  title = "Fixing the Gaps in Construction Monitoring",
  subtitle = "From missed inspections to rework costs, SitePace.ai bridges the gaps with visual clarity and actionable insights.",
  button = true,
  buttonText = "Try Now",
  pricingButton = false,
  pricingButtonText = "Get Custom Pricing",
  contactButtons = false,
  talkToSalesButton = false,
  talkToSalesButtonText = "Talk to Sales",
}) {

  const container = useRef(null);
  const pricingButtonRef = useRef(null);

  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
  }, []);

  useGSAP(
    (context, contextSafe) => {

      const customPricingButton = pricingButtonRef.current;

      if (!customPricingButton) return;

      const handleClick = contextSafe(() => {
        gsap.to(window, {
          scrollTo: {
            y: ".quoteFormInput", // target class name
            autoKill: false, // allow scrolling to the target
            offsetY: 80, // offset from the top of the viewport
          },
          duration: 3,
          ease: "power2.inOut",
        });
        
      });

      customPricingButton.addEventListener("click", () => handleClick());

    },
    { dependencies: [pricingButtonRef], scope: container }
  );

  return (
    <>
      <Box
        sx={[
          MUIStyle.BannerMain,
          {
            background:
              theme === "light" ? commonColor.white : commonColor.black,
          },
        ]}
      >
        <Box sx={MUIStyle.BannerSVGContainer}>
          <SiteViewSVG fillOpacity={theme === "light" ? 1 : 0.05} />
        </Box>
        <Container maxWidth="xl">
          <Box sx={MUIStyle.BannerRow}>
            <Box sx={MUIStyle.BannerContent}>
              <Box sx={MUIStyle.BannerContentInner}>
                {headerButtonText && (
                  <Typography variant="span" sx={MUIStyle.BannerTopHeading}>
                    {headerButtonText}
                  </Typography>
                )}
                <Typography
                  variant="h1"
                  sx={[
                    MUIStyle.BannerHeading,
                    {
                      color:
                        theme === "light"
                          ? commonColor.black
                          : commonColor.white,
                    },
                  ]}
                >
                  {title}
                </Typography>
                <Typography variant="body1" sx={MUIStyle.BannerText}>
                  {subtitle}
                </Typography>
                {button && (
                  <Button
                    sx={[
                      MUIStyle.BannerBtn,
                      {
                        color: {
                          xs: commonColor.black,
                          sm: commonColor.black,
                          md:
                            theme === "light"
                              ? commonColor.black
                              : isButtonHovered
                              ? commonColor.black
                              : commonColor.white,
                          lg:
                            theme === "light"
                              ? commonColor.black
                              : isButtonHovered
                              ? commonColor.black
                              : commonColor.white,
                          xl:
                            theme === "light"
                              ? commonColor.black
                              : isButtonHovered
                              ? commonColor.black
                              : commonColor.white,
                        },
                      },
                    ]}
                    variant="contained"
                    size="large"
                    onMouseEnter={() =>
                      setTimeout(() => {
                        setIsButtonHovered(true);
                      }, 200)
                    }
                    onMouseLeave={() =>
                      setTimeout(() => {
                        setIsButtonHovered(false);
                      }, 200)
                    }
                    onClick={() => setIsModalOpen(true)}
                  >
                    <Box
                      component={"span"}
                      className="BannerBtnIcon"
                      sx={MUIStyle.BannerBtnIcon}
                    >
                      <Icon icon="flowbite:arrow-right-outline" />
                    </Box>
                    {buttonText}
                    <Box className="BannerBtnBG" sx={MUIStyle.BannerBtnBG} />
                  </Button>
                )}
                {/* {pricingButton && (
                  <Box sx={MUIStyle.BtnRow} ref={container}>
                    <Button sx={MUIStyle.CustomBtn} 
                    id="custom-pricing-btn"
                      ref={pricingButtonRef}
                    >
                      {pricingButtonText}
                      <Box component={"span"} sx={MUIStyle.BtnIcon}>
                        <Icon icon="heroicons:arrow-up" />
                      </Box>
                    </Button>
                  </Box>
                )} */}
                {pricingButton && (
                  <Button
                    sx={MUIStyle.BannerBtn}

                    variant="contained"
                    size="large"
                    id="custom-pricing-btn"
                    ref={pricingButtonRef}
                  >
                    <Box
                      component={"span"}
                      className="BannerBtnIcon"
                      sx={MUIStyle.BannerBtnIcon}
                    >
                      <Icon icon="flowbite:arrow-right-outline" />
                    </Box>
                    {pricingButtonText}
                    <Box className="BannerBtnBG" sx={MUIStyle.BannerBtnBG} />
                  </Button>
                )}
                {talkToSalesButton && (
                  <Box sx={MUIStyle.BtnRow}>
                    <Button
                      sx={MUIStyle.CustomBtn}
                      onClick={() => setIsModalOpen(true)}
                    >
                      {talkToSalesButtonText}
                    </Button>
                  </Box>
                )}
                {contactButtons && (
                  <Box sx={MUIStyle.BannerContactBtns}>
                    <Button
                      sx={[
                        MUIStyle.ContactBtn,
                        {
                          backgroundColor: commonColor.grey4,
                          borderColor: commonColor.grey4,
                        },
                      ]}
                    >
                      Contact Us
                    </Button>
                    <Button sx={[MUIStyle.ContactBtn]}>Book A Demo</Button>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>

      <ContactFormModal
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        theme={theme}
      />
    </>
  );
}
