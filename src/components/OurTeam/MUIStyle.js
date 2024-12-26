import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";
import { BANNER } from "@/values/Constants/ImageConstants";

export const MUIStyle = {
  BuildForMain: {
    width: "100%",
    padding: {
      xs: "50px 0",
      sm: "50px 0",
      md: "50px 0",
      lg: "50px 0",
      xl: "100px 0",
    },
    background: commonColor.black,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    height: '100vh',
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
      xs: "20px",
      sm: "20px",
      md: "20px",
      lg: "20px",
      xl: "30px",
    },
  },
  Heading: {
    fontSize: {
      xs: FONT_SIZE.heading28,
      sm: FONT_SIZE.heading28,
      md: FONT_SIZE.heading28,
      lg: FONT_SIZE.heading28,
      xl: FONT_SIZE.heading32,
    },
    lineHeight: "40px",
    fontWeight: FONT_WEIGHT.REGULAR,
    color: commonColor.white,
    textTransform: "uppercase",
    textAlign: "center",
    margin: "0",
  },
  SubHeading: {
    fontSize: {
      xs: FONT_SIZE.text16,
      sm: FONT_SIZE.text16,
      md: FONT_SIZE.text16,
      lg: FONT_SIZE.text16,
      xl: FONT_SIZE.text18,
    },
    lineHeight: "26px",
    fontWeight: FONT_WEIGHT.MEDIUM,
    color: commonColor.grey,
    textAlign: "center",
    marginBottom: "24px",
  },


  OurTeamBox: {
    width: "100%",
    height: "100%",
    minHeight: {
      xs: "300px",
      sm: "300px",
      md: "120px",
      lg: "120px",
      xl: "150px",
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "start",
    flexDirection: "column",
    padding: {
      xs: "12px",
      sm: "12px",
      md: "12px",
      lg: "12px",
      xl: "20px",
    },
    borderRadius: "20px",
    overflow: "hidden",
  },
  OurTeamBoxHeader: {
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    marginBottom: {
      xs: "5px",
      sm: "5px",
      md: "5px",
      lg: "5px",
      xl: "10px",
    },
    gap: "16px",
  },
  OurTeamIcon: {
    width: {
      xs: "24px",
      sm: "24px",
      md: "30px",
      lg: "30px",
      xl: "32px",
    },
    height: {
      xs: "24px",
      sm: "24px",
      md: "24px",
      lg: "24px",
      xl: "32px",
    },
    objectFit: "contain",
  },
  TeamRole: {
    fontSize: {
      xs: FONT_SIZE.text16,
      sm: FONT_SIZE.text16,
      md: FONT_SIZE.text16,
      lg: FONT_SIZE.text16,
      xl: FONT_SIZE.text20,
    },
    lineHeight: "34px",
    fontWeight: FONT_WEIGHT.MEDIUM,
    color: commonColor.lime,
  },
  OurTeamImg: {
    width: "100%",
    height: {
      xs: "150px",
      sm: "150px",
      md: "100px",
      lg: "80px",
      xl: "120px",
    },
    objectFit: "cover",
    borderRadius: "20px",
  },
  OurTeamGridsOuter: {
    margin: {
      xs: "0",
      sm: "0",
      md: "0 150px",
      lg: "0 150px",
      xl: "0 150px",
    }
  }

};
