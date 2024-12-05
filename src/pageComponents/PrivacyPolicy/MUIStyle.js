import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";
import { EXTRABG } from "@/values/Constants/ImageConstants";

export const MUIStyle = {
  ContactSec: {
    width: "100%",
    padding: {
      xs: "100px 0",
      sm: "100px 0",
      md: "100px 0 100px",
      lg: "284px 0 100px",
      xl: "284px 0 130px",
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: commonColor.white,
  },
  ContactHeadingBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    paddingBottom: "150px",
  },
  Heading: {
    fontSize:{
      xs: FONT_SIZE.heading32,
      sm: FONT_SIZE.heading32,
      md: FONT_SIZE.heading48,
      lg: FONT_SIZE.heading48,
      xl: FONT_SIZE.heading48,
    },
    lineHeight: {
      xs: "40px",
      sm: "40px",
      md: "56px",
      lg: "48px",
      xl: "48px",
    },
    fontWeight: FONT_WEIGHT.REGULAR,
    color: commonColor.grey,
    textAlign: "center",
    transition: "all 0.5s ease-in-out",
    marginBottom: "24px",
  },

};
