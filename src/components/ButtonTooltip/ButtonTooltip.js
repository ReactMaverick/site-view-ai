"use client";
import { Box, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import {
  MENUFACTURINGIMG,
  PROJECTIMG,
} from "@/values/Constants/ImageConstants";

export default function ButtonTooltip() {
  return (
    <Box sx={MUIStyle.ButtonTooltipMain}>
      <Box sx={MUIStyle.ButtonTooltipBoxOuter}>
        <Box
          sx={MUIStyle.ButtonTooltipImg}
          component={"img"}
          src={MENUFACTURINGIMG}
        />
        <Box sx={MUIStyle.ButtonTooltipBoxInner}>
          <Typography variant="h2" sx={MUIStyle.Heading}>
          Manufacturing & Industrial
          </Typography>
          <Typography variant="body1" sx={MUIStyle.ToolTipText}>
          Production, efficiency, quality, innovation, automation, sustainability, safety, compliance, transformation, data-driven.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
