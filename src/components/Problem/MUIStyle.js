import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";

export const MUIStyle = {
  ProblemMain: {
    padding: {
      xs: "10px 12px",
      sm: "10px 12px",
      md: "10px 12px",
      lg: "10px 12px",
      xl: "16px",
    },
    // background: commonColor.white10,
    maxWidth: {
      xs: "100%",
      sm: "100%",
      md: "600px",
      lg: "600px",
      xl: "600px",
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    gap: {
      xs: "0",
      sm: "0",
      md: "0",
      lg: "0",
      xl: "10px",
    },
    borderRadius: "32px",
  },
  ProblemOuterBox: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    gap: {
      xs: "10px",
      sm: "10px",
      md: "10px",
      lg: "10px",
      xl: "24px",
    },
  },
  Problemicon: {
    width: {
      xs: "15px",
      sm: "15px",
      md: "15px",
      lg: "15px",
      xl: "20px",
    },
    height: {
      xs: "15px",
      sm: "15px",
      md: "15px",
      lg: "15px",
      xl: "20px",
    },
  },
  ProblemHeading: {
    // color: commonColor.white,
    fontSize: {
      xs: FONT_SIZE.text12,
      sm: FONT_SIZE.text12,
      md: FONT_SIZE.text12,
      lg: FONT_SIZE.text12,
      xl: FONT_SIZE.text14,
    },
    lineHeight: FONT_SIZE.text20,
    fontWeight: FONT_WEIGHT.MEDIUM,
    textAlign: "center",
  },
  ProblemText: {
    // color: commonColor.white,
    fontSize: {
      xs: FONT_SIZE.text12,
      sm: FONT_SIZE.text12,
      md: FONT_SIZE.text12,
      lg: FONT_SIZE.text12,
      xl: FONT_SIZE.text14,
    },
    lineHeight: FONT_SIZE.heading28,
    fontWeight: FONT_WEIGHT.MEDIUM,
  },
};
