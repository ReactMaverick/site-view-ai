import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";
import { VIDEOBG } from "@/values/Constants/ImageConstants";

export const MUIStyle = {
  VideoSecMain: {
    background: `url(${VIDEOBG})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    width: "100%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    minHeight: {
      xs: "100vh",
      sm: "100vh",
      md: "1024px",
      lg: "1024px",
      xl: "1024px",
    },
  },
  VideoBox: {
    width: "55%",
    height: "55%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "20px",
    overflow: "hidden",
  },
  VideoOverlay: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    borderRadius: "20px",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
  CustomButton: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "50%",
    "& img": {
      width: "100px",
      height: "100px",
      objectFit: "cover",
      borderRadius: "50%",
    },
  },




};
