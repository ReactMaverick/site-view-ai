import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";

export const MUIStyle = {
    
  WorkflowBoxOuter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "0px 25px",
    maxWidth: "400px",
    minHeight: "474px",
    background: commonColor.white,
    boxShadow: "0px 0px 32px rgba(0, 0, 0, 0.12)",
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
    fontSize: FONT_SIZE.heading32,
    lineHeight: "40px",
    fontWeight: FONT_WEIGHT.MEDIUM,
    color: commonColor.black,
    textAlign: "center",
  },
  WorkflowContent: {
    fontSize: FONT_SIZE.text20,
    lineHeight: "28px",
    fontWeight: FONT_WEIGHT.REGULAR,
    color: commonColor.grey,
    textAlign: "center",
  },

};
