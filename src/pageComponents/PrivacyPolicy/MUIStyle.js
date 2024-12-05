import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";

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
      lg: "56px",
      xl: "56px",
    },
    fontWeight: FONT_WEIGHT.MEDIUM,
    color: commonColor.black,
    textAlign: "center",
    transition: "all 0.5s ease-in-out",
    marginBottom: "24px",
  },
  ContactContentBox: {
    padding: "40px 0",
  },
  SubHeading: {
    fontSize: FONT_SIZE.heading32,
    lineHeight: "40px",
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    color: commonColor.black,
    transition: "all 0.5s ease-in-out",
    marginBottom: "24px",
  },
  ContactContentText: {
    fontSize: FONT_SIZE.heading24,
    lineHeight: "32px",
    fontWeight: FONT_WEIGHT.REGULAR,
    color: commonColor.black,
    transition: "all 0.5s ease-in-out",
  },

  ContactContentList: {
    paddingLeft: "0px",
    listStyle: "none",
  },
  ContactContentListItem: {
    padding: "24px 0",
  },
  pointBox: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    paddingBottom: "24px",
    paddingLeft: "15px",
  },
  ContactContenttitle: {
    fontSize: FONT_SIZE.heading24,
    lineHeight: "32px",
    fontWeight: FONT_WEIGHT.REGULAR,
    color: commonColor.black,
    transition: "all 0.5s ease-in-out",
  },
  Dot: {
    width: "7px",
    height: "7px",
    borderRadius: "50%",
    backgroundColor: commonColor.black,
  },
  Text: {
    fontSize: FONT_SIZE.text20,
    lineHeight: "28px",
    fontWeight: FONT_WEIGHT.REGULAR,
    color: commonColor.black,
    transition: "all 0.5s ease-in-out",
  },
  SubTitle:{
    fontSize: FONT_SIZE.text20,
    lineHeight: "26px",
    fontWeight: FONT_WEIGHT.MEDIUM,
    color: commonColor.black,
    transition: "all 0.5s ease-in-out",
  },
  SubUL: {
    paddingLeft: "15px",
    listStyle: "none",
    paddingTop: "24px",
  },
  SubLi: {
display: "flex",
alignItems: "center",
gap: "10px",
padding: "5px 0",
  },
  Textgrey: {
    fontSize: FONT_SIZE.text20,
    lineHeight: "28px",
    fontWeight: FONT_WEIGHT.REGULAR,
    color: commonColor.grey,
    transition: "all 0.5s ease-in-out",
    "& strong": {
      fontWeight: FONT_WEIGHT.MEDIUM,
      color: commonColor.black,
    },
  },
  DotGrey: {
    width: "7px",
    height: "7px",
    borderRadius: "50%",
    backgroundColor: commonColor.grey,
  },

};
