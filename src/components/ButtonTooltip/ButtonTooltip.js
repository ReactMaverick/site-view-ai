"use client";
import { Box, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import {
  MENUFACTURINGIMG,
  PROJECTIMG,
} from "@/values/Constants/ImageConstants";

export default function ButtonTooltip({
  title = "Manufacturing & Industrial",
  content = "Production, efficiency, quality, innovation, automation, sustainability, safety, compliance, transformation, data-driven.",
  image = MENUFACTURINGIMG,
}) {
  return (
    <Box sx={MUIStyle.ButtonTooltipMain}>
      <Box sx={MUIStyle.ButtonTooltipBoxOuter}>
        <Box
          sx={MUIStyle.ButtonTooltipImg}
          component={"img"}
          src={image}
        />
        <Box sx={MUIStyle.ButtonTooltipBoxInner}>
          <Typography variant="h2" sx={MUIStyle.Heading}>
            {title}
          </Typography>
          <Typography variant="body1" sx={MUIStyle.ToolTipText}>
            {content}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
