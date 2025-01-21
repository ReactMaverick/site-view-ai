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
import SiteViewSVG from "@/components/SiteViewSVG/SiteViewSVG";
import Link from "next/link";

const faqItems = [
  {
    id: "panel1",
    question: "Is there a free trial available?",
    answer: "Yes, SitePace.ai offers a free trial to explore its features firsthand.",
  },
  {
    id: "panel2",
    question: "How do I request a demo?",
    answer: "Schedule a demo through our website to learn how SitePace.ai can transform your project management.",
  },
  {
    id: "panel3",
    question: "What kind of support does SitePace.ai offer?",
    answer: "We provide support through email, live chat, and phone. Contact us at connect@sitepace.ai for assistance.",
  },
  {
    id: "panel4",
    question: "What onboarding resources are available?",
    answer: "SitePace.ai offers video tutorials, detailed user guides, and live webinars to ensure an easy onboarding process.",
  },
  {
    id: "panel5",
    question: "How do I contact SitePace.ai for help?",
    answer: "You can reach us via the connect@sitepace.ai email or our website's support page.",
  },
  {
    id: "panel6",
    question: "What are the pricing plans for SitePace.ai?",
    answer: "SitePace.ai offers flexible subscription plans with monthly and annual billing options. Visit our website for detailed pricing.",
  },
  {
    id: "panel7",
    question: "How does SitePace.ai monetize its services?",
    answer: "We operate on a subscription-based SaaS model, offering tiered plans tailored to meet different needs.",
  },
  {
    id: "panel8",
    question: "Are there any additional costs for using SitePace.ai?",
    answer: "No hidden fees. Pricing is transparent and based on the selected subscription plan.",
  }
];

export default function ContactUs() {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };



  return (
    <Box sx={MUIStyle.BlogDetailsSec}>
      <BannerNew
        headerButtonText="Talk to Us"
        title="Let’s Connect Anytime"
        subtitle="For queries, support, or feedback, connect with us anytime. Let’s build smarter together"
      // button={false}
      // contactButtons={true}
      />
      <Box sx={MUIStyle.ContactSec}>
        <Box sx={MUIStyle.ContactSecSVGContainer}>
          <SiteViewSVG
            fillOpacity={0.05}
          />
        </Box>
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
                  connect@SitePace.ai
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
                  <Link href={"/faq"}>
                    View All FAQ
                    <Box component={"span"} sx={MUIStyle.BtnIcon}>
                      <Icon icon="radix-icons:arrow-right" />
                    </Box>
                  </Link>
                </Button>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
