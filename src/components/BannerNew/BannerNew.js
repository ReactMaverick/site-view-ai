import { Box, Button, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import { Icon } from "@iconify/react";
import { commonColor } from "@/values/Colors/CommonColor";
import SiteViewSVG from "../SiteViewSVG/SiteViewSVG";
import { useState } from "react";
import ContactFormModal from "../ContactFormModal/ContactFormModal";

export default function BannerNew({
  theme = "light",
  headerButtonText = "Simplify Construction",
  title = "Fixing the Gaps in Construction Monitoring",
  subtitle = "From missed inspections to rework costs, SitePace.ai bridges the gaps with visual clarity and actionable insights.",
  button = true,
  buttonText = "Try Now",
  contactButtons = false
}) {

  const [isButtonHovered, setIsButtonHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Box sx={[MUIStyle.BannerMain, {
        background: theme === "light" ? commonColor.white : commonColor.black,
      }]}>
        <Box sx={MUIStyle.BannerSVGContainer}>
          <SiteViewSVG
            fillOpacity={theme === "light" ? 1 : 0.05}
          />
        </Box>
        <Container maxWidth="xl">
          <Box sx={MUIStyle.BannerRow}>
            <Box sx={MUIStyle.BannerContent}>
              <Box sx={MUIStyle.BannerContentInner}>
                <Typography variant="span" sx={MUIStyle.BannerTopHeading}>
                  {headerButtonText}
                </Typography>
                <Typography variant="h1" sx={[MUIStyle.BannerHeading, {
                  color: theme === "light" ? commonColor.black : commonColor.white,
                }]}>
                  {title}
                </Typography>
                <Typography variant="body1" sx={MUIStyle.BannerText}>
                  {subtitle}
                </Typography>
                {button && (
                  <Button sx={[MUIStyle.BannerBtn, {
                    color: theme === "light" ? commonColor.black : isButtonHovered ? commonColor.black : commonColor.white,
                  }]} variant="contained" size="large"
                    onMouseEnter={() => setTimeout(() => {
                      setIsButtonHovered(true)
                    }, 200)}
                    onMouseLeave={() => setTimeout(() => {
                      setIsButtonHovered(false)
                    }, 200)}
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
                {contactButtons && (
                  <Box
                    sx={MUIStyle.BannerContactBtns}
                  >
                    <Button
                      sx={[
                        MUIStyle.ContactBtn,
                        {
                          backgroundColor: commonColor.grey4,
                          borderColor: commonColor.grey4,
                        }
                      ]}
                    >
                      Contact Us
                    </Button>
                    <Button
                      sx={[
                        MUIStyle.ContactBtn
                      ]}
                    >
                      Book A Demo
                    </Button>
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
