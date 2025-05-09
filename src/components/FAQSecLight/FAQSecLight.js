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
    question: "What is SitePace.ai?",
    answer:
      "SitePace.ai is a construction management platform that uses 360° imaging and computer vision to streamline site monitoring and collaboration.",
  },
  {
    id: "panel2",
    question: "How does SitePace.ai capture 360° visuals?",
    answer:
      "SitePace.ai works with industry-standard 360° cameras to capture high-quality images, ensuring every detail of your site is recorded.",
  },
  {
    id: "panel3",
    question: "How does SitePace.ai handle indoor positioning without GPS?",
    answer:
      "SitePace.ai uses a Visual Indoor Positioning System (VIPS) to map locations accurately indoors without relying on GPS, Wi-Fi, or beacons.",
  },
  {
    id: "panel4",
    question: "What is an automated virtual tour in SitePace.ai?",
    answer:
      "Our system stitches 360° images into immersive virtual tours, allowing users to navigate projects remotely and monitor progress effortlessly.",
  },
  {
    id: "panel5",
    question: "Does SitePace.ai recognize the location of 360° captures automatically?",
    answer:
      "Yes, SitePace.ai uses advanced computer vision to automatically determine and organize the location of each capture for precise documentation.",
  },

];

export default function FAQSecLight() {

  const router = useRouter();

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
