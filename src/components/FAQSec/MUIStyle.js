import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";
import { BANNER } from "@/values/Constants/ImageConstants";
import zIndex from "@mui/material/styles/zIndex";

export const MUIStyle = {
  FAQSecMain: {
    width: "100%",
    padding: {
      xs: "100px 0",
      sm: "100px 0",
      md: "100px 0",
      lg: "280px 0",
      xl: "280px 0 100px",
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
backgroundColor: commonColor.black,
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
      xs: "30px",
      sm: "30px",
      md: "96px",
      lg: "96px",
      xl: "96px",
    },
  },
  Heading: {
    fontSize: FONT_SIZE.heading32,
    lineHeight: "40px",
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    color: commonColor.white,
    textTransform: "uppercase",
    textAlign: "center",
    transition: "all 0.5s ease-in-out",
  },
  FAQSecOuter:{
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
    gap: "30px",
    width: {
      xs: "100%",
      sm: "100%",
      md: "60%",
      lg: "60%",
      xl: "60%",
    },
  },
  FAQSecAccrodinBox : {
    "&.MuiAccordion-root": {
      boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
      borderRadius: "50px",
      backgroundColor: commonColor.white,
      padding: "15px 20px",
      "&.Mui-expanded": {
        margin: "0px",
      },
    },
    "&.MuiAccordion-root:before": {
      display: "none",
    },
 

  },

  FAQSecAccrodinHeading: {
    fontSize: FONT_SIZE.heading24,
    lineHeight: "32px",
    fontWeight: FONT_WEIGHT.MEDIUM,
    color: commonColor.black,
    textAlign: "left",
    transition: "all 0.5s ease-in-out",
  },
  FAQSecAccrodiontext: {
    fontSize: FONT_SIZE.text20,
    lineHeight: "28px",
    fontWeight: FONT_WEIGHT.REGULAR,
    color: commonColor.grey,
    textAlign: "left",
    transition: "all 0.5s ease-in-out",
  },
  BtnRow:{
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    marginTop : "80px",
  },
  CustomBtn: {
    background: commonColor.green,
    border: "2px solid",
    borderColor: commonColor.green,
    boxShadow: "none",
    padding: "12px 42px",
    borderRadius: "100px",
    textTransform: "capitalize",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    transition: "all 0.3s ease-in-out",
    fontSize: {
      xs: FONT_SIZE.text18,
      sm: FONT_SIZE.text18,
      md: FONT_SIZE.text18,
      lg: FONT_SIZE.text20,
    },
    lineHeight: "1.8",
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
};
