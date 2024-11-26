import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";

export const MUIStyle = {
  ProblemMain: {
    padding: {
      xs: "16px",
      sm: "16px",
      md: "16px",
      lg: "16px",
      xl: "16px",
    },
    background: commonColor.white10,
    maxWidth: "600px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "start",
    gap: "24px",
    borderRadius: "32px",
  },
  ProblemOuterBox: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    gap: "20px",
  },
  Problemicon: {
    width: "20px",
    height: "20px",
  },
  ProblemHeading: {
    color: commonColor.white,
    fontSize: FONT_SIZE.text14,
    lineHeight: FONT_SIZE.text20,
    fontWeight: FONT_WEIGHT.MEDIUM,
    textAlign: "center",
  },
  ProblemText: {
    color: commonColor.white,
    fontSize: FONT_SIZE.text20,
    lineHeight: FONT_SIZE.heading28,
    fontWeight: FONT_WEIGHT.MEDIUM,
  },
};
