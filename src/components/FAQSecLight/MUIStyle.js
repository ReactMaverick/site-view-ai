import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";
import { BANNER } from "@/values/Constants/ImageConstants";
import zIndex from "@mui/material/styles/zIndex";

export const MUIStyle = {
  FAQSecMain: {
    width: "100%",
    padding: {
      xs: "50px 0",
      sm: "50px 0",
      md: "50px 0",
      lg: "50px 0",
      xl: "100px 0",
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: commonColor.white,
  },
  FAQSecBoxOuter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  FAQSecBoxInner: {
    maxWidth: {
      xs: "100%",
      sm: "100%",
      md: "45%",
      lg: "45%",
      xl: "45%",
    },
    marginBottom: {
      xs: "20px",
      sm: "20px",
      md: "20px",
      lg: "20px",
      xl: "40px",
    },
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
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    color: commonColor.black,
    textTransform: "uppercase",
    textAlign: "center",
    transition: "all 0.5s ease-in-out",
  },
  FAQSecOuter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
  },
  FAQSecAccrodin: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
      md: "70%",
      lg: "70%",
      xl: "60%",
    },
  },
  FAQSecAccrodinBox: {
    "&.MuiAccordion-root": {
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      borderRadius: "50px",
      backgroundColor: commonColor.grey4,
      boxShadow: "none",
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
      md: FONT_SIZE.text20,
      lg: FONT_SIZE.text20,
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
  BtnRow: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginTop: {
      xs: "20px",
      sm: "20px",
      md: "30px",
      lg: "30px",
      xl: "40px",
    },
  },
  CustomBtn: {
    background: commonColor.green,
    border: "2px solid",
    borderColor: commonColor.green,
    boxShadow: "none",
    padding: {
      xs: "8px 28px",
      sm: "8px 28px",
      md: "12px 42px",
      lg: "12px 42px",
      xl: "12px 42px",
    },
    borderRadius: "100px",
    textTransform: "capitalize",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    transition: "all 0.3s ease-in-out",
    fontSize: {
      xs: FONT_SIZE.text14,
      sm: FONT_SIZE.text14,
      md: FONT_SIZE.text16,
      lg: FONT_SIZE.text16,
      xl: FONT_SIZE.text20,
    },
    lineHeight: "1.5em",
    fontWeight: FONT_WEIGHT.MEDIUM,
    color: commonColor.black,
    "&:hover": {
      background: commonColor.trans,
      boxShadow: "none",
      color: commonColor.green,
    },
    "& span": {
      fontSize: FONT_SIZE.heading24,
      lineHeight: FONT_SIZE.heading24,
      transition: "all 0.3s ease-in-out",
    },
    "&:hover span": {
      color: commonColor.green,
    },
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
