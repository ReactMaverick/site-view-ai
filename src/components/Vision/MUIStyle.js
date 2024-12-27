import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";
import { BANNER } from "@/values/Constants/ImageConstants";
import zIndex from "@mui/material/styles/zIndex";

export const MUIStyle = {
  VisionMain: {
    width: "100%",
    padding: {
      xs: "6  0px 0",
      sm: "60px 0",
      md: "60px 0",
      lg: "284px 0",
      xl: "284px 0",
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: commonColor.black,
    position: "relative",
    overflow: "hidden",
  },

  VisionRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: {
      xs: "column-reverse",
      sm: "column-reverse",
      md: "row",
      lg: "row",
      xl: "row",
    },
    gap: {
      xs: "30px",
      sm: "30px",
      md: "30px",
      lg: "0",
      xl: "0",
    },
    padding: {
      xs: "0 0",
      sm: "0 0",
      md: "0 0px",
      lg: "0 130px",
      xl: "0 130px",
    },
  },
  VisionColLeft: {
    maxWidth: {
      xs: "100%",
      sm: "100%",
      md: "50%",
      lg: "45%",
      xl: "45%",
    },

  },
  Heading: {
    fontSize: {
      xs: FONT_SIZE.text20,
      sm: FONT_SIZE.text20,
      md: FONT_SIZE.text22,
      lg: FONT_SIZE.heading24,
      xl: FONT_SIZE.heading28,
    },
    lineHeight: "1.5em",
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    color: commonColor.white,
    marginBottom: "20px",
    paddingRight: {
      xs: "0",
      sm: "0",
      md: "40px",
      lg: "40px",
      xl: "40px",
    }
  },
  smallTitle: {
    fontSize: FONT_SIZE.text16,
    lineHeight: "1.5em",
    fontWeight: FONT_WEIGHT.REGULAR,
    color: commonColor.grey,
    display: "block",
    marginBottom: "16px",
  },
  SubHeading: {
    fontSize: {
      xs: FONT_SIZE.text14,
      sm: FONT_SIZE.text14,
      md: FONT_SIZE.text14,
      lg: FONT_SIZE.text14,
      xl: FONT_SIZE.text16,
    },
    lineHeight: "1.5em",
    fontWeight: FONT_WEIGHT.MEDIUM,
    color: commonColor.white,
    marginBottom: "16px",
  },
  VisionColRight: {
    maxWidth: {
      xs: "100%",
      sm: "100%",
      md: "40%",
      lg: "55%",
      xl: "55%",
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
  VisionSVGContainer: {
    position: "absolute",
    top: "0",
    left: "5%",
    width: "100%",
    height: "100%",
  }
};
