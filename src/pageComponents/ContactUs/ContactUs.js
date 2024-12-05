"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import React, { useState } from "react";
import BannerNew from "@/components/BannerNew/BannerNew";
import { Icon } from "@iconify/react";
import { BUTTONDOWN, MAP } from "@/values/Constants/ImageConstants";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { commonColor } from "@/values/Colors/CommonColor";

const faqItems = [
  {
    id: "panel1",
    question: "What are your pricing plans?",
    answer:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: "panel2",
    question: "What payment methods do you accept?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    id: "panel3",
    question: "Are AI features available on all SiteView.ai plans?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  }
];

export default function ContactUs() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };



  return (
    <Box sx={MUIStyle.BlogDetailsSec}>
      <BannerNew />
      <Box sx={MUIStyle.ContactSec}>
        <Container maxWidth="xl">
          <Box sx={MUIStyle.ContactSecOuter}>
            <Box sx={MUIStyle.ContactSecInner}>
              <Typography variant="h4" sx={MUIStyle.SubHeading}>
                Your Project, Our Priority
              </Typography>
              <Typography variant="h2" sx={MUIStyle.Heading}>
                Our commitment goes beyond technology. We’re here to partner
                with you for successful project outcomes
              </Typography>
            </Box>
          </Box>
          <Box sx={MUIStyle.ContactSecGrid}>
            <Box sx={MUIStyle.ContactBox}>
              <Box sx={MUIStyle.ContactBoxIcon}>
                <Icon icon="fluent:call-28-regular" />
              </Box>
              <Box sx={MUIStyle.ContactBoxContent}>
                <Typography variant="h2" sx={MUIStyle.ContactBoxHeading}>
                  Contact Number
                </Typography>
                <Typography variant="body1" sx={MUIStyle.ContactBoxText}>
                  +91 9819242828
                </Typography>
              </Box>
            </Box>
            <Box sx={MUIStyle.ContactBox}>
              <Box sx={MUIStyle.ContactBoxIcon}>
                <Icon icon="fluent:mail-28-regular" />
              </Box>
              <Box sx={MUIStyle.ContactBoxContent}>
                <Typography variant="h2" sx={MUIStyle.ContactBoxHeading}>
                  Email
                </Typography>
                <Typography variant="body1" sx={MUIStyle.ContactBoxText}>
                  sales@siteview.ai
                </Typography>
              </Box>
            </Box>
            <Box sx={MUIStyle.ContactBox}>
              <Box sx={MUIStyle.ContactBoxIcon}>
                <Icon icon="fluent:location-20-regular" />
              </Box>
              <Box sx={MUIStyle.ContactBoxContent}>
                <Typography variant="h2" sx={MUIStyle.ContactBoxHeading}>
                  Visit Us
                </Typography>
                <Typography variant="body1" sx={MUIStyle.ContactBoxText}>
                  At locations below
                </Typography>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box sx={MUIStyle.ContactSecMap}>
        <Box component={"img"} src={MAP} alt="map" />
      </Box>
      <Box sx={MUIStyle.FAQSec}>
        <Container maxWidth="xl">
          <Box sx={MUIStyle.FAQSecOuter}>
            <Box sx={MUIStyle.FAQSecAccrodin}>
              <Typography variant="h2" sx={MUIStyle.FaqHeading}>
              frequently asked questions
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
    </Box>
  );
}
