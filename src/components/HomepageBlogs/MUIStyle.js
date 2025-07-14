import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";

export const MUIStyle = {
  BlogsSectionMain: {
    width: "100%",
    padding: {
      xs: "50px 0",
      sm: "50px 0",
      md: "50px 0",
      lg: "50px 0",
      xl: "80px 0",
    },
    background: commonColor.white,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  BuildForHeadingBoxOuter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  BuildForHeadingBoxInner: {
    maxWidth: {
      xs: "100%",
      sm: "100%",
      md: "50%",
      lg: "40%",
      xl: "40%",
    },
    marginBottom: {
      xs: "10px",
      sm: "10px",
      md: "10px",
      lg: "10px",
      xl: "16px",
    },
  },
  Heading: {
    fontSize: {
      xs: FONT_SIZE.text20,
      sm: FONT_SIZE.text22,
      md: FONT_SIZE.heading24,
      lg: FONT_SIZE.heading24,
      xl: FONT_SIZE.heading28,
    },
    lineHeight: "1.5em",
    fontWeight: FONT_WEIGHT.REGULAR,
    color: commonColor.black,
    textTransform: "uppercase",
    textAlign: "center",
    margin: "0",
  },
  SubHeading: {
    fontSize: {
      xs: FONT_SIZE.text12,
      sm: FONT_SIZE.text12,
      md: FONT_SIZE.text16,
      lg: FONT_SIZE.text16,
      xl: FONT_SIZE.text20,
    },
    lineHeight: "26px",
    fontWeight: FONT_WEIGHT.MEDIUM,
    color: commonColor.grey,
    textAlign: "center",
    marginBottom: {
      xs: "5px",
      sm: "5px",
      md: "16px",
      lg: "16px",
      xl: "24px",
    },
  },
  // blog Items grid box
  BlogsSectionContent: {
    paddingTop: "30px",
    display: "grid",
    gridTemplateColumns: {
      xs: "repeat(1, 1fr)",
      sm: "repeat(2, 1fr)",
      md: "repeat(2, 1fr)",
      lg: "repeat(3, 1fr)",
      xl: "repeat(3, 1fr)",
    },
    gap: {
      xs: "16px",
      sm: "16px",
      md: "24px",
      lg: "24px",
      xl: "32px",
    },
  },
  SeeAllBtnBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "20px",
  },
  HeaderBtn: {
    background: commonColor.green,
    border: "2px solid",
    borderColor: commonColor.green,
    boxShadow: "none",
    padding: {
      xs: "6px 20px",
      sm: "6px 20px",
      md: "6px 20px",
      lg: "6px 20px",
      xl: "10px 42px",
    },
    borderRadius: "100px",
    textTransform: "capitalize",
    fontSize: {
      xs: FONT_SIZE.text16,
      sm: FONT_SIZE.text16,
      md: FONT_SIZE.text16,
      lg: FONT_SIZE.text16,
    },
    lineHeight: "1.5em",
    fontWeight: FONT_WEIGHT.MEDIUM,
    color: commonColor.black,
  },


};
