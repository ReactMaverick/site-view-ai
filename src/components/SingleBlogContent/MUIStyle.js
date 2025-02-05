import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";

export const MUIStyle = {
  SingleBlogMain: {
    width: "100%",
    padding: {
      xs: "60px 0",
      sm: "60px 0",
      md: "60px 0",
      lg: "60px 0",
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
    gap: {
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
      lg: "0 0px",
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
    marginBottom: "20px",
    paddingRight: {
      xs: "0",
      sm: "0",
      md: "40px",
      lg: "40px",
      xl: "40px",
    }
  },
  SubHeading: {
    fontSize: {
      xs: FONT_SIZE.text12,
      sm: FONT_SIZE.text14,
      md: FONT_SIZE.text14,
      lg: FONT_SIZE.text14,
      xl: FONT_SIZE.text16,
    },
    lineHeight: "1.5em",
    fontWeight: FONT_WEIGHT.MEDIUM,
    color: commonColor.grey,
    marginBottom: "16px",
  },
  SingleBlogColRight: {
    maxWidth: {
      xs: "100%",
      sm: "100%",
      md: "35%",
      lg: "35%",
      xl: "55%",
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    "& img": {
      width: {
        xs: "100%",
        sm: "80%",
        md: "100%",
        lg: "100%",
        xl: "100%",
      },
      height: "100%",
      objectFit: "cover",
    },
  },
  SingleBlogContent: {
    marginBottom: "30px",
  },
  CustomBtn: {
    background: commonColor.green,
    border: "2px solid",
    borderColor: commonColor.green,
    boxShadow: "none",
    padding: {
      xs: "8px 16px",
      sm: "8px 16px",
      md: "12px 24px",
      lg: "12px 24px",
      xl: "12px 24px",
    },
    borderRadius: "100px",
    textTransform: "capitalize",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    transition: "all 0.3s ease-in-out",
    fontSize: {
      xs: FONT_SIZE.text16,
      sm: FONT_SIZE.text18,
      md: FONT_SIZE.text18,
      lg: FONT_SIZE.text20,
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
};
