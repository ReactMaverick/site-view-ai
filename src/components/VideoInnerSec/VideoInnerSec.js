"use client";
import { Box, Container } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import { VIDEOINNER } from "@/values/Constants/ImageConstants";

export default function VideoInnerSec() {
  return (
    <Box sx={MUIStyle.VideoInnerSecMain}>
      <Container maxWidth="xl">
        <Box sx={MUIStyle.VideoInnerSecInner}>
          <Box component={"img"} src={VIDEOINNER} />
        </Box>
      </Container>
    </Box>
  );
}
