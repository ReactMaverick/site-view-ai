import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";

export const MUIStyle = {
  VideoSecMain: {
    overflow: "hidden",
    backgroundColor: commonColor.black,
    position: "relative",
    width: "100vw",
    height: "100vh",
  },
  VideoSecImages: {
    transform: "scale(0.5)",
    width: "100%",
    height: "100%",
  },
  VideoSecImageOuter: {
    width: "100%",
    height: "100%",
    borderRadius: "40px",
    overflow: "hidden",
  },
  VideoSecImage: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  VideoSecVideo: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    position: "absolute",
    top: "0",
    left: "0",
    zIndex: "1",
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
    display: "flex",
    flexDirection: "column",
    "& img": {
      width: "150px",
      height: "150px",
      objectFit: "cover",
      borderRadius: "50%",
    },
  },
  CustomButtonText: {
    fontSize: {
      xs: FONT_SIZE.text16,
      sm: FONT_SIZE.text16,
      md: FONT_SIZE.heading36,
      lg: FONT_SIZE.heading36,
      xl: FONT_SIZE.heading36,
    },
    color: commonColor.white,
    fontWeight: FONT_WEIGHT.MEDIUM,
  }
};
