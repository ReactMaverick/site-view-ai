import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";
import { BANNER } from "@/values/Constants/ImageConstants";

export const MUIStyle = {
  workflowMain: {
    width: "100%",
    height: {
      xs: "100vh",
      sm: "100vh",
      md: "100vh",
      lg: "100vh",
      xl: "100vh",
    },
    padding: {
      xs: "100px 0",
      sm: "100px 0",
      md: "0",
      lg: "0",
      xl: "0",
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    background: commonColor.black,
  },

  workflowHeadingBoxOuter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  workflowHeadingBoxInner: {
    maxWidth: {
      xs: "100%",
      sm: "100%",
      md: "60%",
      lg: "60%",
      xl: "60%",
    },
    marginBottom: {
      xs: "0",
      sm: "0",
      md: "0",
      lg: "0",
      xl: "48px",
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
    color: commonColor.white,
    textTransform: "uppercase",
    textAlign: "center",
    margin: "0",
  },
  SubHeading: {
    fontSize: {
      xs: FONT_SIZE.text14,
      sm: FONT_SIZE.text14,
      md: FONT_SIZE.text14,
      lg: FONT_SIZE.text14,
      xl: FONT_SIZE.text16,
    },
    lineHeight: "26px",
    fontWeight: FONT_WEIGHT.MEDIUM,
    color: commonColor.grey,
    textAlign: "center",
    marginBottom: {
      xs: "12px",
      sm: "12px",
      md: "10px",
      lg: "10px",
      xl: "24px",
    },
  },
  workflowSec: {
    margin: {
      xs: "30px 0",
      sm: "30px 0",
      md: "48px 0",
      lg: "48px 0",
      xl: "48px 0",
    },
  },
  SliderOuter: {
    display: "flex",
    overflowX: "hidden",
    width: "100%",
    // scrollSnapType: "x mandatory",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  },
  SliderInner: {
    minWidth: {
      xs: "300px",
      sm: "300px",
      md: "400px",
      lg: "400px",
      xl: "400px",
    },
    margin: '80px 10px',
    scrollSnapAlign: 'center'
  }
};
