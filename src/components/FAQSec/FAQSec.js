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

const faqItems = [
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
  {
    id: "panel6",
    question: "What types of 360° cameras are compatible with SitePace.ai?",
    answer:
      "SitePace.ai supports a range of industry-standard 360° cameras. Visit our Help Center for the recommended devices.",
  },
  {
    id: "panel7",
    question: "Can I collaborate with others in real-time on SitePace.ai?",
    answer:
      "Absolutely! Our platform supports real-time collaboration, annotations, and sharing within virtual tours for seamless teamwork.",
  },
  {
    id: "panel8",
    question: "Does the mobile app require an internet connection?",
    answer:
      "The mobile app works offline for capturing images and syncs data to the cloud when reconnected to the internet.",
  },
  {
    id: "panel9",
    question: "What AI features does SitePace.ai offer?",
    answer:
      "Currently, SitePace.ai is an AI-based virtual tour creator. We are working on updates for AI-powered defect detection, progress tracking, and location-based data organization.",
  },
  {
    id: "panel10",
    question: "How secure is my project data on SitePace.ai?",
    answer:
      "SitePace.ai employs advanced encryption, secure cloud storage, and access controls to ensure your data is always protected.",
  },
  {
    id: "panel11",
    question: "How long does SitePace.ai store my data?",
    answer:
      "SitePace.ai stores all project data, including visuals and reports, from Day 1 to five years post-project completion.",
  },
  {
    id: "panel12",
    question: "How many cameras are required for a multistory building?",
    answer:
      "Typically, one or two cameras are sufficient to capture the entire site, even for large multistory buildings.",
  },
];

export default function FAQSec() {

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
            {faqItems.map((item) => (
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
