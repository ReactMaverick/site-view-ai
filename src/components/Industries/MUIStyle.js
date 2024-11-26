import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";
import { BANNER } from "@/values/Constants/ImageConstants";
import zIndex from "@mui/material/styles/zIndex";

export const MUIStyle = {
  IndustriesMain: {
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
    fontSize: FONT_SIZE.heading32,
    lineHeight: "40px",
    fontWeight: FONT_WEIGHT.REGULAR,
    color: commonColor.black,
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
  IndustriesSec: {
    padding: {
      xs: "30px 0",
      sm: "30px 0",
      md: "300px 0",
      lg: "300px 0",
      xl: "300px 0",
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
        xs: FONT_SIZE.heading24,
        sm: FONT_SIZE.heading24,
        md: FONT_SIZE.heading32,
        lg: FONT_SIZE.heading32,
        xl: FONT_SIZE.heading32,
    },
    lineHeight: "40px",
    fontWeight: FONT_WEIGHT.REGULAR,
    border: `1px solid ${commonColor.boderColor}`,
    textTransform: "capitalize",
    borderRadius: "99px",
    padding: "16px 24px",
    "&:hover": {
      backgroundColor: commonColor.green,
      border: `1px solid ${commonColor.green}`,
    },
  },
  CustomTooltip: {
    position: "absolute",
    bottom: "115%",
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 2,
  },
};
