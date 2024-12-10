import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";

export const MUIStyle = {
  SingleBlogMain: {
    width: "100%",
    padding: {
      xs: "100px 0",
      sm: "100px 0",
      md: "100px 0",
      lg: "100px 0",
      xl: "100px 0",
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  SingleBlogRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: {
      xs: "column",
      sm: "column",
      md: "row",
      lg: "row",
      xl: "row",
    },
    gap:{
      xs: "30px",
      sm: "30px",
      md: "30px",
      lg: "0",
      xl: "0",
    },
    padding: {
      xs: "0 0",
      sm: "0 0",
      md: "0 0px",
      lg: "0 130px",
      xl: "0 130px",
    },
  },
  SingleBlogColLeft: {
    maxWidth: {
        xs: "100%",
        sm: "100%",
        md: "50%",
        lg: "45%",
        xl: "45%",
    },
  
  },
  Heading: {
    fontSize: FONT_SIZE.heading32,
    lineHeight: "40px",
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    color: commonColor.black,
    marginBottom: "20px",
    paddingRight:{
      xs: "0",
      sm: "0",
      md: "40px",
      lg: "40px",
      xl: "40px", 
    }
  },
  SubHeading: {
    fontSize: FONT_SIZE.heading24,
    lineHeight: "32px",
    fontWeight: FONT_WEIGHT.MEDIUM,
    color: commonColor.grey,
    marginBottom: "16px",
  },
  SingleBlogColRight: {
    maxWidth: {
        xs: "100%",
        sm: "100%",
        md: "50%",
        lg: "55%",
        xl: "55%",
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
  SingleBlogContent   : {
    marginBottom: "30px",
  },
  CustomBtn: {
    background: commonColor.green,
    border: "2px solid",
    borderColor: commonColor.green,
    boxShadow: "none",
    padding: "12px 24px",
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
