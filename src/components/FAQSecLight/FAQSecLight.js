"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { BUTTONDOWN } from "@/values/Constants/ImageConstants";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const FAQSecLightItems = [
  {
    id: "panel1",
    question: "How is pricing calculated?",
    answer:
      "Based on your project’s area, number of floors, and duration.",
  },
  {
    id: "panel2",
    question: "Is there a free trial?",
    answer:
      "We offer pilot access for select partners. Mention it in the form.",
  },
  {
    id: "panel3",
    question: "Can I upgrade storage later?",
    answer:
      "Yes. You can extend storage from 6 months to 5 years.",
  },
  {
    id: "panel4",
    question: "Do I need a special device?",
    answer:
      "We’ll share details in your quote email. No technical expertise needed.",
  },
  {
    id: "panel5",
    question: "How do I pay?",
    answer:
      "You’ll receive a secure payment link in your quote email.",
  },

];

export default function FAQSecLight() {

  const router = useRouter();

  return (
    <Box sx={MUIStyle.FAQSecMain} className="container-op">
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
            {FAQSecLightItems.map((item) => (
              <Accordion key={item.id} sx={MUIStyle.FAQSecAccrodinBox}>
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
              <Button sx={MUIStyle.CustomBtn}
                onClick={() => router.push("/faq")}
              >
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
