import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";
import { BANNER } from "@/values/Constants/ImageConstants";

export const MUIStyle = {
  workflowMain: {
    width: "100%",
    padding: {
      xs: "100px 0",
      sm: "100px 0",
      md: "100px 0",
      lg: "132px 0",
      xl: "132px 0",
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
    maxWidth: "50%",
    marginBottom: {
      xs: "30px",
      sm: "30px",
      md: "48px",
      lg: "48px",
      xl: "48px",
    },
  },
  Heading: {
    fontSize: FONT_SIZE.heading32,
    lineHeight: "40px",
    fontWeight: FONT_WEIGHT.REGULAR,
    color: commonColor.white,
    textTransform: "uppercase",
    textAlign: "center",
    margin: "0",
  },
  SubHeading: {
    fontSize: FONT_SIZE.text18,
    lineHeight: "26px",
    fontWeight: FONT_WEIGHT.MEDIUM,
    color: commonColor.grey,
    textAlign: "center",
    marginBottom: "24px",
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
    scrollSnapType: "x mandatory",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
  },
};
