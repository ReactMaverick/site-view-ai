"use client";
import { Box, Container, Typography } from "@mui/material";
import styles from "./FAQ.module.css";
import { MUIStyle } from "./MUIStyle";
import React, { useState } from "react";
import BannerNew from "@/components/BannerNew/BannerNew";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { BUTTONDOWN } from "@/values/Constants/ImageConstants";
import { Icon } from "@iconify/react";
import { commonColor } from "@/values/Colors/CommonColor";

const faqItems = [
  {
    id: "panel1",
    question: "What is SiteView.ai?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: "panel2",
    question: "How does SiteView.ai work?",
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
    question: "How does SiteView.ai work?",
    answer:
      "SiteView.ai allows you to capture your construction site using 360° cameras, our mobile app, or even drone integration (subject to permits). You can upload these images and videos to our secure cloud platform, where you can navigate the site remotely, analyze progress, collaborate with your team, and gain valuable insights.",
  },
  {
    id: "panel5",
    question: "What are the benefits of using SiteView.ai?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    id: "panel6",
    question: "Who can benefit from using SiteView.ai?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    id: "panel7",
    question: "Is there a free trial available?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
];

export default function FAQ() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Box sx={MUIStyle.BlogDetailsSec}>
      <BannerNew />
      <Box sx={MUIStyle.FAQSec}>
        <Container maxWidth="xl">
          <Box sx={MUIStyle.FAQSecOuter}>
            <Box sx={MUIStyle.FAQSecAccrodin}>
              <Typography variant="h2" sx={MUIStyle.Heading}>
                About SiteView.ai
              </Typography>
              {faqItems.map((item) => (
                <Accordion
                  key={item.id}
                  sx={[MUIStyle.FAQSecAccrodinBox,
                    { backgroundColor: expanded === item.id ? commonColor.green : commonColor.grey4 },
                  ]}
                  expanded={expanded === item.id}
                  onChange={handleChange(item.id)}
                >
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
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
