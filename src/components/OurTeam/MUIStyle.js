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
      xs: "10px",
      sm: "10px",
      md: "10px",
      lg: "10px",
      xl: "20px",
    },
  },
  Heading: {
    fontSize: {
      xs: FONT_SIZE.heading24,
      sm: FONT_SIZE.heading24,
      md: FONT_SIZE.heading24,
      lg: FONT_SIZE.heading24,
      xl: FONT_SIZE.heading28,
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
      xs: FONT_SIZE.text14,
      sm: FONT_SIZE.text14,
      md: FONT_SIZE.text14,
      lg: FONT_SIZE.text14,
      xl: FONT_SIZE.text16,
    },
    lineHeight: "26px",
    fontWeight: FONT_WEIGHT.MEDIUM,
    color: commonColor.grey,
    textAlign: "center",
    marginBottom: {
      xs: "5px",
      sm: "5px",
      md: "5px",
      lg: "5px",
      xl: "10px",
    },
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
      xs: "8px",
      sm: "8px",
      md: "8px",
      lg: "8px",
      xl: "15px",
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
      md: "0",
      lg: "0",
      xl: "5px",
    },
    gap: "16px",
  },
  OurTeamIcon: {
    width: {
      xs: "24px",
      sm: "24px",
      md: "24px",
      lg: "24px",
      xl: "30px",
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
      xs: "120px",
      sm: "120px",
      md: "100px",
      lg: "64px",
      xl: "100px",
    },
    objectFit: "cover",
    borderRadius: "20px",
  },
  OurTeamGridsOuter: {
    margin: {
      xs: "0",
      sm: "0",
      md: "0 15%",
      lg: "0 15%",
      xl: "0 15%",
    }
  }

};
