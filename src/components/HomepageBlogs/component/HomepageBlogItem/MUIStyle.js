import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";

export const MUIStyle = {
  BlogBox: {
    width: "100%",
    padding: "8px",
    background: commonColor.white,
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch",
    flexDirection: "column",
    border: `1px solid ${commonColor.boderColor}`,
    borderRadius: "24px",
    transition: "all 0.3s ease",
    "&:hover": {
      background: commonColor.green,
      borderColor: commonColor.trans,
    },
  },
  BlogImageBox: {
    width: "100%",
    height: "100%",
    minHeight: {
      xs: "190px",
      sm: "200px",
      md: "220px",
      lg: "230px",
      xl: "250px",
    },
    maxHeight: {
      xs: "190px",
      sm: "200px",
      md: "220px",
      lg: "230px",
      xl: "250px",
    },
    position: "relative",
    borderRadius: "24px 24px 0 0",
    overflow: "hidden",
    "& img": {
      objectFit: "cover",
      width: "100%",
      height: "100%",
    },
  },

  BlogContent: {
    padding: {
      xs: "16px",
      sm: "16px",
      md: "20px",
      lg: "20px",
      xl: "24px",
    },
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "flex-start",
    gap: "24px",
    height: "100%",
    width: "100%",
  },
  BlogDescription: {
    fontSize: FONT_SIZE.text18,
    lineHeight: "1.5",
    color: commonColor.textColor,
    fontWeight: FONT_WEIGHT.REGULAR,
    margin: "0",
  },
  BlogBtn: {
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
  },
  BlogBtnText: {
    color: commonColor.black,
    fontSize: {
      xs: FONT_SIZE.text16,
      sm: FONT_SIZE.text16,
      md: FONT_SIZE.text18,
      lg: FONT_SIZE.text18,
      xl: FONT_SIZE.text20,
    },
    lineHeight: "1.5",
  },
  BlogBtnIcon: {
    fontSize: {
      xs: FONT_SIZE.text22,
      sm: FONT_SIZE.text22,
      md: FONT_SIZE.heading24,
      lg: FONT_SIZE.heading24,
      xl: FONT_SIZE.heading24,
    },
    height: "auto",
    display: "flex",
    alignItems: "center",
    marginBottom: "-5px",
  },

};
