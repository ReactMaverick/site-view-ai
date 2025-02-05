import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";

export const MUIStyle = {
  ConstructionProjectMain: {
    width: "100%",
    padding: {
      xs: "50px 0",
      sm: "50px 0",
      md: "50px 0",
      lg: "50px 0",
      xl: "80px 0",
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: commonColor.black,
    minHeight: '100vh',
  },

  workflowHeadingBoxOuter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  workflowHeadingBoxInner: {
    maxWidth: {
      xs: "100%",
      sm: "100%",
      md: "50%",
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
  SubHeading: {
    fontSize: {
      xs: FONT_SIZE.text12,
      sm: FONT_SIZE.text12,
      md: FONT_SIZE.text14,
      lg: FONT_SIZE.text14,
      xl: FONT_SIZE.text16,
    },
    lineHeight: "1.5em",
    fontWeight: FONT_WEIGHT.REGULAR,
    color: commonColor.grey,
    textAlign: "center",
    transition: "all 0.5s ease-in-out",
    marginBottom: {
      xs: "10px",
      sm: "10px",
      md: "16px",
      lg: "16px",
      xl: "20px",
    },
  },
  Heading: {
    fontSize: {
      xs: FONT_SIZE.text16,
      sm: FONT_SIZE.text18,
      md: FONT_SIZE.text20,
      lg: FONT_SIZE.text20,
      xl: FONT_SIZE.heading24,
    },
    lineHeight: "1.5em",
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    color: commonColor.white,
    textTransform: "uppercase",
    textAlign: "center",
    transition: "all 0.5s ease-in-out",
  },
  ProjectText: {
    fontSize: {
      xs: FONT_SIZE.text12,
      sm: FONT_SIZE.text12,
      md: FONT_SIZE.text14,
      lg: FONT_SIZE.text14,
      xl: FONT_SIZE.text16,
    },
    lineHeight: "1.5em",
    fontWeight: FONT_WEIGHT.REGULAR,
    color: commonColor.grey,
    textAlign: "center",
    transition: "all 0.5s ease-in-out",
  },
  ConstructionProjectGrid: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "1fr",
      md: "1fr 1fr",
      lg: "1fr 1fr",
      xl: "1fr 1fr",
    },
    gap: {
      xs: "20px 20px",
      sm: "20px 20px",
      md: "70px 60px",
      lg: "70px 60px",
      xl: "200px 180px",
    },
    position: "relative",
    justifyItems: {
      xs: "center",
      sm: "center",
    }
  },
  DividerBox: {
    width: "100%",
    height: "200px",
    margin: "0 auto",
    display: {
      xs: "block",
      sm: "block",
      md: "none",
      lg: "none",
      xl: "none",
    }
  },

  ConstructionProjectImg: {
    display: {
      xs: "none",
      sm: "none",
      md: "block",
      lg: "block",
      xl: "block",
    },
    maxWidth: {
      xs: "100%",
      sm: "100%",
      md: "180px",
      lg: "200px",
      xl: "200px",
    },
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  ConstructionProjectBox: {
    width: {
      xs: "100%",
      sm: "80%",
      md: "80%",
      lg: "80%",
      xl: "100%",
    },
    backgroundColor: commonColor.white5,
    padding: {
      xs: "12px",
      sm: "12px",
      md: "15px",
      lg: "15px",
      xl: "24px",
    },
    borderRadius: "32px",
    boxShadow: "0px 0px 32px rgba(0, 0, 0, 1.2)",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: {
      xs: "5px",
      sm: "5px",
      md: "10px",
      lg: "24px",
      xl: "24px",
    },
    transition: "all 0.5s ease-in-out",
    "&:hover": {
      backgroundColor: commonColor.green,
    },
    "&:hover h2": {
      color: commonColor.black,
    },

  },
};
