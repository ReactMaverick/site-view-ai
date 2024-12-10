import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";

export const MUIStyle = {
  BlogItemMain : {
    // maxWidth: "480px",
    minHeight:"550px",
    padding: {
      xs: "16px",
      sm: "16px",
      md: "16px",
      lg: "16px",
      xl: "16px",
    },
    background: commonColor.white10 ,
    borderRadius: "16px",
    backdropFilter: "blur(20px)",
  },
  BlogImgItem: {
    width: "100%",
    height: "230px",
    borderRadius: "24px",
    overflow: "hidden",
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },
  BlogContent: {
   marginTop: "40px",
  },
  BlogTitle : {
    fontSize: FONT_SIZE.heading32,
    lineHeight: "40px",
    fontWeight: FONT_WEIGHT.MEDIUM,
    color: commonColor.white,
  },
  BlogDesc : {
    fontSize: FONT_SIZE.text22,
    lineHeight: "32px",
    fontWeight: FONT_WEIGHT.REGULAR,
    color: commonColor.grey3,
    margin: "20px 0 30px",
  },
  CustomBtn: {
    width:"fit-content",
    background: commonColor.green,
    border: "2px solid",
    borderColor: commonColor.green,
    boxShadow: "none",
    padding: "12px 24px",
    borderRadius: "100px",
    textTransform: "capitalize",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    transition: "all 0.3s ease-in-out",
    fontSize: {
      xs: FONT_SIZE.text18,
      sm: FONT_SIZE.text18,
      md: FONT_SIZE.text18,
      lg: FONT_SIZE.text20,
    },
    lineHeight: "1.8",
    fontWeight: FONT_WEIGHT.MEDIUM,
    color: commonColor.black,
    "&:hover": {
      background: commonColor.trans,
      boxShadow: "none",
      color: commonColor.green,
    },
    "& span": {
      fontSize: FONT_SIZE.heading24,
      lineHeight: FONT_SIZE.heading24,
      transition: "all 0.3s ease-in-out",
    },
    "&:hover span": {
      color: commonColor.green,
    },
  },
 
};
