import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";

export const MUIStyle = {
  IndustriesMain: {
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
    height: '100vh',
  },

  IndustriesHeadingBoxOuter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  IndustriesHeadingBoxInner: {
    maxWidth: {
      xs: "100%",
      sm: "100%",
      md: "45%",
      lg: "45%",
      xl: "45%",
    },

  },
  Heading: {
    fontSize: {
      xs: FONT_SIZE.heading24,
      sm: FONT_SIZE.heading24,
      md: FONT_SIZE.heading24,
      lg: FONT_SIZE.heading24,
      xl: FONT_SIZE.heading28,
    },
    lineHeight: "1.5em",
    fontWeight: FONT_WEIGHT.REGULAR,
    color: commonColor.black,
    textTransform: "uppercase",
    textAlign: "center",
    margin: "0",
  },
  SubHeading: {
    fontSize: {
      xs: FONT_SIZE.text14,
      sm: FONT_SIZE.text14,
      md: FONT_SIZE.text16,
      lg: FONT_SIZE.text16,
      xl: FONT_SIZE.text20,
    },
    lineHeight: "26px",
    fontWeight: FONT_WEIGHT.MEDIUM,
    color: commonColor.grey,
    textAlign: "center",
    marginBottom: {
      xs: "16px",
      sm: "16px",
      md: "16px",
      lg: "16px",
      xl: "24px",
    },
  },
  IndustriesSec: {
    padding: {
      xs: "30px 0",
      sm: "30px 0",
      md: "30px 0",
      lg: "30px 0",
      xl: "50px 0",
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "24px 50px",
    flexWrap: "wrap",
  },
  IndustriesButton: {
    position: "relative",
    zIndex: 1,
    backgroundColor: commonColor.trans,
    color: commonColor.black,
    fontSize: {
      xs: FONT_SIZE.text18,
      sm: FONT_SIZE.text18,
      md: FONT_SIZE.text20,
      lg: FONT_SIZE.text20,
      xl: FONT_SIZE.heading24,
    },
    lineHeight: "normal",
    fontWeight: FONT_WEIGHT.REGULAR,
    border: `1px solid ${commonColor.boderColor}`,
    textTransform: "capitalize",
    borderRadius: "99px",
    padding: {
      xs: "10px 20px",
      sm: "10px 20px",
      md: "10px 20px",
      lg: "12px 24px",
      xl: "20px 40px",
    },
    "&:hover": {
      backgroundColor: commonColor.green,
      border: `1px solid ${commonColor.green}`,
    },
  },
  CustomTooltip: {
    position: "absolute",
    // bottom: "115%",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 2,
  },
};
