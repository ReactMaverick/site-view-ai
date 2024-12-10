import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";
import { BANNER } from "@/values/Constants/ImageConstants";
import zIndex from "@mui/material/styles/zIndex";

export const MUIStyle = {
  VisionMain: {
    width: "100%",
    padding: {
      xs: "100px 0",
      sm: "100px 0",
      md: "100px 0",
      lg: "284px 0 0px",
      xl: "284px 0 0px",
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
backgroundColor: commonColor.black,
  },

  VisionRow: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: {
      xs: "column",
      sm: "column",
      md: "row",
      lg: "row",
      xl: "row",
    },
    gap:{
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
    fontSize: FONT_SIZE.heading32,
    lineHeight: "40px",
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    color: commonColor.white,
    marginBottom: "20px",
    paddingRight:{
      xs: "0",
      sm: "0",
      md: "40px",
      lg: "40px",
      xl: "40px", 
    }
  },
  smallTitle  : {
    fontSize: FONT_SIZE.text16,
    lineHeight: "24px",
    fontWeight: FONT_WEIGHT.REGULAR,
    color: commonColor.grey,
    display: "block",
    marginBottom: "16px",
  },
  SubHeading: {
    fontSize: FONT_SIZE.text18,
    lineHeight: "26px",
    fontWeight: FONT_WEIGHT.MEDIUM,
    color: commonColor.white,
    marginBottom: "16px",
  },
  VisionColRight: {
    maxWidth: {
        xs: "100%",
        sm: "100%",
        md: "50%",
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
};
