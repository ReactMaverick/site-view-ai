"use client";
import { Box, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import { PROJECTIMG } from "@/values/Constants/ImageConstants";

export default function ProjectBox() {
  return (
    <Box sx={MUIStyle.ProjectBoxOuter} className="card__inner">
      <Box sx={MUIStyle.ProjectBoxImgBox}>
        <Box component={"img"} src={PROJECTIMG} sx={MUIStyle.ProjectImg} />
        <Typography variant="h3" sx={MUIStyle.ProjectTitle}>
          Compare Process
        </Typography>
      </Box>
      <Box sx={MUIStyle.ProjectBoxContent}>
        <Typography variant="body1" sx={MUIStyle.ProjectContent}>
          Monitor progress effortlessly by comparing site views from two
          different dates. Uncover hidden details, create as-built drawings, and
          ensure nothing is left unnoticed beneath finishes like plaster or
          paint.
        </Typography>
      </Box>
    </Box>
  );
}
