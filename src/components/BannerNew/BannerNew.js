import { Box, Button, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import { Icon } from "@iconify/react";
import { commonColor } from "@/values/Colors/CommonColor";
import SiteViewSVG from "../SiteViewSVG/SiteViewSVG";

export default function BannerNew({ theme = "light" }) {
  return (
    <Box sx={[MUIStyle.BannerMain, {
      background: theme === "light" ? commonColor.white : commonColor.black,
    }]}>
      <Box sx={MUIStyle.BannerSVGContainer}>
        <SiteViewSVG />
      </Box>
      <Container maxWidth="xl">
        <Box sx={MUIStyle.BannerRow}>
          <Box sx={MUIStyle.BannerContent}>
            <Box sx={MUIStyle.BannerContentInner}>
              <Typography variant="span" sx={MUIStyle.BannerTopHeading}>
                Simplify Construction
              </Typography>
              <Typography variant="h1" sx={[MUIStyle.BannerHeading, {
                color: theme === "light" ? commonColor.black : commonColor.white,
              }]}>
                Fixing the Gaps in Construction Monitoring
              </Typography>
              <Typography variant="body1" sx={MUIStyle.BannerText}>
                From missed inspections to rework costs, SiteView.ai bridges the
                gaps with visual clarity and actionable insights.
              </Typography>
              <Button sx={[MUIStyle.BannerBtn, {
                color: theme === "light" ? commonColor.black : commonColor.white,
              }]} variant="contained" size="large">
                <Box
                  component={"span"}
                  className="BannerBtnIcon"
                  sx={MUIStyle.BannerBtnIcon}
                >
                  <Icon icon="flowbite:arrow-right-outline" />
                </Box>
                Try Now
                <Box className="BannerBtnBG" sx={MUIStyle.BannerBtnBG} />
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
