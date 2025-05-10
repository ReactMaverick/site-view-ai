import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";

export const MUIStyle = {
  PricingSec: {
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
    overflow: "hidden",
  },
  PricingSecGrid: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "1fr 1fr",
      md: "1fr 1fr 1fr",
      lg: "1fr 1fr 1fr",
    },
    gap: "24px",
    paddingTop: "50px",
  },
  PricingSecHeadingBoxOuter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  PricingSecHeadingBoxInner: {
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
      md: "48px",
      lg: "48px",
      xl: "48px",
    },
  },
  SubHeading: {
    fontSize: {
      xs: FONT_SIZE.text12,
      sm: FONT_SIZE.text12,
      md: FONT_SIZE.text14,
      lg: FONT_SIZE.text14,
      xl: FONT_SIZE.text16,
    },
    lineHeight: "1.5em",
    fontWeight: FONT_WEIGHT.REGULAR,
    color: commonColor.grey,
    textAlign: "center",
    transition: "all 0.5s ease-in-out",
    marginBottom: {
      xs: "10px",
      sm: "10px",
      md: "24px",
      lg: "15px",
      xl: "24px",
    },
  },
  Heading: {
    fontSize: {
      xs: FONT_SIZE.text20,
      sm: FONT_SIZE.text22,
      md: FONT_SIZE.heading24,
      lg: FONT_SIZE.text20,
      xl: FONT_SIZE.heading28,
    },
    lineHeight: "1.5em",
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    color: commonColor.black,
    textTransform: "uppercase",
    textAlign: "center",
    transition: "all 0.5s ease-in-out",
  },

  // pricing box style 

  SinglePricingBox: {
    width: "100%",
    padding: "24px",
    // backgroundColor: commonColor.white,
    border: `1px solid ${commonColor.grey600}`,
    borderRadius: "24px",
    display: "flex",
    justifyContent: "flex-start",
    gap: "24px",
    alignItems: "flex-start",
    flexDirection: "column",
    transition: "all 0.5s ease-in-out",
  },
  SinglePricingIconBox: {
    width: "52px",
    height: "52px",
    backgroundColor: commonColor.green,
    borderRadius: "12px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& img": {
      width: "32px",
      height: "32px",
      ObjectFit: "contain",
      transition: "all 0.5s ease-in-out",
    },
  },
  SinglePricingHeading: {
    fontSize: {
      xs: FONT_SIZE.heading26,
      sm: FONT_SIZE.heading26,
      md: FONT_SIZE.heading28,
      lg: FONT_SIZE.heading32,
      xl: FONT_SIZE.heading32,
    },
    lineHeight: "1.3em",
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    color: commonColor.black,
    textAlign: "left",
    transition: "all 0.5s ease-in-out",
    maxWidth: "300px", // Adjust this value as needed
    whiteSpace: "normal", // Ensures text wraps
    overflow: "hidden", // Prevents overflow
    wordWrap: "break-word",
  },
  SinglePricingSubHeading: {
    fontSize: {
      xs: FONT_SIZE.text14,
      sm: FONT_SIZE.text14,
      md: FONT_SIZE.text14,
      lg: FONT_SIZE.text16,
      xl: FONT_SIZE.text16,
    },
    lineHeight: "1.5em",
    fontWeight: FONT_WEIGHT.REGULAR,
    color: commonColor.grey,
    textAlign: "left",
    transition: "all 0.5s ease-in-out",
    paddingRight: {
      xs: "0px",
      sm: "0px",
      md: "20px",
      lg: "30px",
      xl: "30px",
    }
  },

};
