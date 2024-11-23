"use client";
import { Box, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import { PROJECTIMG } from "@/values/Constants/ImageConstants";

export default function WorkflowBox() {
  return (
    <Box sx={MUIStyle.WorkflowBoxOuter}>
      <Box sx={MUIStyle.WorkflowBoxContent}>
        <Typography variant="h4" sx={MUIStyle.WorkflowBoxTitle}>
        48% Reduction in Time for Site Inspection
        </Typography>
        <Typography variant="body1" sx={MUIStyle.WorkflowContent}>
        Save 48% on inspection times, enabling your team to prioritize critical tasks. Faster inspections mean fewer delays, helping each project phase stay on track and move efficiently.
        </Typography>
      </Box>
    </Box>
  );
}
