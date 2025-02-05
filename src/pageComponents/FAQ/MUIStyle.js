import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";

export const MUIStyle = {
  BlogDetailsSec: {
    padding: "0",
    minHeight: "100vh",
  },
  Heading: {
    fontSize: {
      xs: FONT_SIZE.text20,
      sm: FONT_SIZE.text22,
      md: FONT_SIZE.heading24,
      lg: FONT_SIZE.heading24,
      xl: FONT_SIZE.heading28,
    },
    lineHeight: "1.5em",
    fontWeight: FONT_WEIGHT.REGULAR,
    color: commonColor.black,
    textTransform: "uppercase",
    textAlign: "center",
    transition: "all 0.5s ease-in-out",
    paddingLeft: "20px",
  },
  FAQSecOuter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    padding: "30px 0",
  },
  FAQSecAccrodin: {
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    flexDirection: "column",
    width: "100%",
    gap: {
      xs: "15px",
      sm: "15px",
      md: "15px",
      lg: "15px",
      xl: "20px",
    },
    width: {
      xs: "100%",
      sm: "100%",
      md: "80%",
      lg: "60%",
      xl: "60%",
    },
  },
  FAQSecAccrodinBox: {
    "&.MuiAccordion-root": {
      boxShadow: "none",
      borderRadius: "50px",
      transition: "all 0.5s ease-in-out",
      padding: {
        xs: "2px 15px",
        sm: "2px 15px",
        md: "5px 15px",
        lg: "5px 15px",
        xl: "15px 20px",
      },
      "&.Mui-expanded": {
        margin: "0px",
      },
    },
    "&.MuiAccordion-root:before": {
      display: "none",
    },
    width: "100%",

  },

  FAQSecAccrodinHeading: {
    fontSize: {
      xs: FONT_SIZE.text16,
      sm: FONT_SIZE.text18,
      md: FONT_SIZE.heading24,
      lg: FONT_SIZE.heading24,
      xl: FONT_SIZE.heading24,
    },
    lineHeight: "1.5em",
    fontWeight: FONT_WEIGHT.MEDIUM,
    color: commonColor.black,
    textAlign: "left",
    transition: "all 0.5s ease-in-out",
  },
  FAQSecAccrodiontext: {
    fontSize: {
      xs: FONT_SIZE.text14,
      sm: FONT_SIZE.text16,
      md: FONT_SIZE.text16,
      lg: FONT_SIZE.text16,
      xl: FONT_SIZE.text20,
    },
    lineHeight: "1.5em",
    fontWeight: FONT_WEIGHT.REGULAR,
    color: commonColor.grey,
    textAlign: "left",
    transition: "all 0.5s ease-in-out",
  },
  FAQAccordionIcon: {
    width: {
      xs: "24px",
      sm: "24px",
      md: "32px",
      lg: "32px",
      xl: "32px",
    },
  }

};