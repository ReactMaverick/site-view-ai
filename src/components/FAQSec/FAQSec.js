"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { BUTTONDOWN } from "@/values/Constants/ImageConstants";
import { Icon } from "@iconify/react";

const faqItems = [
  {
    id: "panel1",
    question: "What types of 360° cameras are compatible with SiteView.ai?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    id: "panel2",
    question: "Can I use my smartphone to capture 360° images for SiteView.ai?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    id: "panel3",
    question: "How does SiteView.ai handle large files (360° videos)?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    id: "panel4",
    question: "Does SiteView.ai comply with data privacy regulations?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    id: "panel5",
    question: "How accurate are the AI features in SiteView.ai?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
];

export default function FAQSec() {
  return (
    <Box sx={MUIStyle.FAQSecMain}>
      <Container maxWidth="xl">
        <Box sx={MUIStyle.FAQSecBoxOuter}>
          <Box sx={MUIStyle.FAQSecBoxInner}>
            <Typography variant="h2" sx={MUIStyle.Heading}>
              frequently asked questions
            </Typography>
          </Box>
        </Box>
        <Box sx={MUIStyle.FAQSecOuter}>
          <Box sx={MUIStyle.FAQSecAccrodin}>
            {faqItems.map((item) => (
              <Accordion key={item.id} sx={MUIStyle.FAQSecAccrodinBox}>
                <AccordionSummary
                  sx={MUIStyle.FAQAccordionSummary}
                  expandIcon={
                    <Box component={"img"} src={BUTTONDOWN} alt="plus" />
                  }
                  aria-controls={`${item.id}-content`}
                  id={`${item.id}-header`}
                >
                  <Typography sx={MUIStyle.FAQSecAccrodinHeading}>
                    {item.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={MUIStyle.FAQSecAccrodiontext}>
                    {item.answer}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))}
            <Box sx={MUIStyle.BtnRow}>
              <Button sx={MUIStyle.CustomBtn}>
                View All FAQ
                <Box component={"span"} sx={MUIStyle.BtnIcon}>
                  <Icon icon="radix-icons:arrow-right" />
                </Box>
              </Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
