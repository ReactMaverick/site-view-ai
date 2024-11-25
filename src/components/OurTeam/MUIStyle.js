import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";
import { BANNER } from "@/values/Constants/ImageConstants";

export const MUIStyle = {
  BuildForMain: {
    width: "100%",
    padding: {
      xs: "100px 0",
      sm: "100px 0",
      md: "100px 0",
      lg: "132px 0",
      xl: "132px 0",
    },
    background:commonColor.black,
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
        md: "45%",
        lg: "45%",
        xl: "45%",
    },
    marginBottom: {
      xs: "30px",
      sm: "30px",
      md: "80px",
      lg: "80px",
      xl: "80px",
    },
  },
  Heading: {
    fontSize: FONT_SIZE.heading32,
    lineHeight: "40px",
    fontWeight: FONT_WEIGHT.REGULAR,
    color: commonColor.white,
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


  OurTeamBox: {
    width: "100%",
    height: "100%",
    minHeight: "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    flexDirection: "column",
    padding: "20px",
    borderRadius: "20px",
    overflow: "hidden",
  },
  OurTeamBoxHeader: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    marginBottom: "20px",
    gap: "16px",
  },
  OurTeamIcon: {
    width: "37px",
    height: "37px",
    objectFit: "contain",
  },
  TeamRole: {
    fontSize: FONT_SIZE.heading24,
    lineHeight: "34px",
    fontWeight: FONT_WEIGHT.MEDIUM,
    color: commonColor.lime,
  },
  OurTeamImg: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "20px",
  },

};
