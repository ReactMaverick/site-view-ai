"use client";
import { Box, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import { DOWN, UP } from "@/values/Constants/ImageConstants";

export default function Solution() {
  return (
    <Box sx={MUIStyle.SolutionMain} className="solution-main">
      <Box sx={MUIStyle.SolutionOuterBox}>
        <Box sx={MUIStyle.Solutionicon} component={"img"} src={UP} />
        <Typography variant="h4" sx={MUIStyle.SolutionHeading}>
          Solution
        </Typography>
      </Box>
      <Typography variant="body1" sx={MUIStyle.SolutionText}>
        2D photos cover less than 1% of the project, are scattered across teams ,and highlight limited data for resolving disputes or tracking progress.
      </Typography>
    </Box>
  );
}
