import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";

export const MUIStyle = {

  WorkflowBoxOuter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "0px 25px",
    maxWidth: {
      xs: "300px",
      sm: "300px",
      md: "320px",
      lg: "320px",
      xl: "400px",
    },
    minHeight: {
      xs: "350px",
      sm: "350px",
      md: "350px",
      lg: "350px",
      xl: "450px",
    },
    boxShadow: `0px 0px 32px ${commonColor.boxShadowColor}`,
    borderRadius: "32px",
    overflow: "hidden",
  },
  WorkflowBoxContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "40px",
  },
  WorkflowBoxTitle: {
    fontSize: {
      xs: FONT_SIZE.heading28,
      sm: FONT_SIZE.heading28,
      md: FONT_SIZE.heading28,
      lg: FONT_SIZE.heading28,
      xl: FONT_SIZE.heading32,
    },
    lineHeight: "1.5em",
    fontWeight: FONT_WEIGHT.MEDIUM,
    color: commonColor.black,
    textAlign: "center",
  },
  WorkflowContent: {
    fontSize: {
      xs: FONT_SIZE.text14,
      sm: FONT_SIZE.text14,
      md: FONT_SIZE.text16,
      lg: FONT_SIZE.text16,
      xl: FONT_SIZE.text20,
    },
    lineHeight: "1.5em",
    fontWeight: FONT_WEIGHT.REGULAR,
    color: commonColor.grey,
    textAlign: "center",
  },

};
