"use client";
import { Box, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import WorkflowBox from "../WorkflowBox/WorkflowBox";


export default function Workflow() {
 
  return (
    <Box sx={MUIStyle.workflowMain}>
      <Container maxWidth="xl">
        <Box sx={MUIStyle.workflowHeadingBoxOuter}>
          <Box sx={MUIStyle.workflowHeadingBoxInner}>
            <Typography variant="h4" sx={MUIStyle.SubHeading}>
            Transfer your workflow
            </Typography>
            <Typography variant="h2" sx={MUIStyle.Heading}>
            Speed, Precision, and Savings at Every Step
            </Typography>
          </Box>
        </Box>
<Box sx={MUIStyle.workflowSec}>
<WorkflowBox/>
  </Box>
      </Container>
    </Box>
  );
}
