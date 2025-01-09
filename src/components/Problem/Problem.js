"use client";
import { Box, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import { DOWN, UP } from "@/values/Constants/ImageConstants";
import { commonColor } from "@/values/Colors/CommonColor";
import Grid from "@mui/material/Grid2";

export default function ProblemSolutionBox({
  type = "problem",
  heading = "Problem",
  text = "2D photos cover less than 1% of the project, are scattered across teams ,and highlight limited data for resolving disputes or tracking progress.",
}) {
  return (
    <Grid size={{ xs: 12, sm: 6, md: 6, lg: 6, xl: 6 }}>
      <Box
        sx={[MUIStyle.ProblemMain, {
          background: type === "problem" ? commonColor.white10 : commonColor.greenFade3,
          zIndex: type === "solution" ? 1 : 0,
        }]}
        className={type === "problem" ? "problem-main" : "solution-main"}
      >
        <Box sx={MUIStyle.ProblemOuterBox}>
          <Box
            sx={MUIStyle.Problemicon}
            component={"img"}
            src={type === "problem" ? DOWN : UP}
          />
          <Typography variant="h4" sx={[MUIStyle.ProblemHeading, {
            color: type === "problem" ? commonColor.white : commonColor.black
          }]}>
            {heading}
          </Typography>
        </Box>
        <Typography variant="body1" sx={[MUIStyle.ProblemText, {
          color: type === "problem" ? commonColor.white : commonColor.black
        }]}>
          {text}
        </Typography>
      </Box>
    </Grid>
  );
}
