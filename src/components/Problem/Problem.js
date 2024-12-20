"use client";
import { Box, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import { DOWN } from "@/values/Constants/ImageConstants";

export default function Problem() {
  return (
    <Box sx={MUIStyle.ProblemMain} className="problem-main">
      <Box sx={MUIStyle.ProblemOuterBox}>
        <Box sx={MUIStyle.Problemicon} component={"img"} src={DOWN} />
        <Typography variant="h4" sx={MUIStyle.ProblemHeading}>
          Problem
        </Typography>
      </Box>
      <Typography variant="body1" sx={MUIStyle.ProblemText}>
        2D photos cover less than 1% of the project, are scattered across teams ,and highlight limited data for resolving disputes or tracking progress.
      </Typography>
    </Box>
  );
}
