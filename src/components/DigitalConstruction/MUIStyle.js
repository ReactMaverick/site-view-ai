import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";

export const MUIStyle = {
  DigitalConstructionMain: {
    width: "100%",
    padding: {
      xs: "100px 0",
      sm: "100px 0",
      md: "100px 130px",
      lg: "284px 130px",
      xl: "284px 130px",
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: commonColor.black,
  },

  DigitalConstructionHeadingBoxOuter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  DigitalConstructionHeadingBoxInner: {
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
  SubHeading: {
    fontSize: FONT_SIZE.text18,
    lineHeight: "32px",
    fontWeight: FONT_WEIGHT.REGULAR,
    color: commonColor.grey,
    textAlign: "center",
    transition: "all 0.5s ease-in-out",
    marginBottom: "24px",
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
  ProjectText: {
    fontSize: FONT_SIZE.text18,
    lineHeight: "32px",
    fontWeight: FONT_WEIGHT.REGULAR,
    color: commonColor.grey,
    textAlign: "center",
    transition: "all 0.5s ease-in-out",
  },

};
