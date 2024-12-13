"use client";
import { Box, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import { PROJECTIMG } from "@/values/Constants/ImageConstants";
import { commonColor } from "@/values/Colors/CommonColor";

export default function ProjectBox({
  title = "Compare Process",
  content = "Monitor progress effortlessly by comparing site views from two different dates. Uncover hidden details, create as-built drawings, and ensure nothing is left unnoticed beneath finishes like plaster or paint.",
  image = PROJECTIMG,
  backgroundColor = commonColor.white,
}) {
  return (
    <Box
      sx={[MUIStyle.ProjectBoxOuter,
      { background: backgroundColor }
      ]}
      className="card__inner"
    >
      <Box sx={MUIStyle.ProjectBoxImgBox}>
        <Box component={"img"} src={image} sx={MUIStyle.ProjectImg} />
        <Typography variant="h3" sx={MUIStyle.ProjectTitle}>
          {title}
        </Typography>
      </Box>
      <Box sx={MUIStyle.ProjectBoxContent}>
        <Typography variant="body1" sx={MUIStyle.ProjectContent}>
          {content}
        </Typography>
      </Box>
    </Box>
  );
}
