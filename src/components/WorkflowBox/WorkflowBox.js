"use client";
import { Box, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import { PROJECTIMG } from "@/values/Constants/ImageConstants";
import { commonColor } from "@/values/Colors/CommonColor";

export default function WorkflowBox({
  backgroundColor = commonColor.white,
  title = "48% Reduction in Time for Site Inspection",
  content = "Save 48% on inspection times, enabling your team to prioritize critical tasks. Faster inspections mean fewer delays, helping each project phase stay on track and move efficiently."
}) {
  return (
    <Box
      sx={[MUIStyle.WorkflowBoxOuter, {
        backgroundColor: backgroundColor,
      }]}
    >
      <Box sx={MUIStyle.WorkflowBoxContent}>
        <Typography variant="h4" sx={MUIStyle.WorkflowBoxTitle}>
          {title}
        </Typography>
        <Typography variant="body1" sx={MUIStyle.WorkflowContent}>
          {content}
        </Typography>
      </Box>
    </Box>
  );
}
