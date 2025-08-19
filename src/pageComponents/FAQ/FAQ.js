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
import { FAQContent } from "./FAQContent";

export default function FAQ() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const getUniqueKey = (index, faqIndex) => {
    return index.toString() + faqIndex.toString();
  }

  return (
    <Box sx={MUIStyle.BlogDetailsSec}>
      <BannerNew
        headerButtonText="FAQs Simplified"
        title="Your Questions, Answered Clearly"
        subtitle="Find quick, straightforward answers to everything about SitePace.ai’s features and benefits"
        button={false}
      />
      <Box className="container-op" sx={MUIStyle.FAQSec}>
        <Container maxWidth="xl">
          <Box sx={MUIStyle.FAQSecOuter}>
            <Box sx={MUIStyle.FAQSecAccrodin}>
              {FAQContent.map((item, index) => (
                <React.Fragment key={index}>
                <Typography variant="h2" sx={MUIStyle.Heading}>
                  {item.heading}
                </Typography>
                {item.faqItems.map((item, faqIndex) => (
                  <Accordion
                    key={faqIndex}
                    sx={[MUIStyle.FAQSecAccrodinBox,
                    { backgroundColor: expanded === getUniqueKey(index, faqIndex) ? commonColor.green : commonColor.grey4 },
                    ]}
                    expanded={expanded === getUniqueKey(index, faqIndex)}
                    onChange={handleChange(getUniqueKey(index, faqIndex))}
                  >
                    <AccordionSummary
                      sx={MUIStyle.FAQAccordionSummary}
                      expandIcon={
                        <Box 
                        component={"img"} 
                        src={BUTTONDOWN} 
                        alt="plus" 
                        sx={MUIStyle.FAQAccordionIcon}
                        />
                      }
                      aria-controls={`${getUniqueKey(index, faqIndex)}-content`}
                      id={`${getUniqueKey(index, faqIndex)}-header`}
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
                </React.Fragment>
                ))}
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
