import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";

export const MUIStyle = {
  ConstructionProjectMain: {
    width: "100%",
    padding: {
      xs: "100px 0",
      sm: "100px 0",
      md: "100px 130px",
      lg: "284px 130px",
      xl: "284px 130px",
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    backgroundColor: commonColor.black,
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
      md: "45%",
      lg: "45%",
      xl: "45%",
    },
    marginBottom: {
      xs: "80px",
      sm: "80px",
      md: "48px",
      lg: "48px",
      xl: "48px",
    },
  },
  SubHeading: {
    fontSize: {
      xs: FONT_SIZE.text14,
      sm: FONT_SIZE.text14,
      md: FONT_SIZE.text14,
      lg: FONT_SIZE.text14,
      xl: FONT_SIZE.text16,
    },
    lineHeight: "32px",
    fontWeight: FONT_WEIGHT.REGULAR,
    color: commonColor.grey,
    textAlign: "center",
    transition: "all 0.5s ease-in-out",
    marginBottom: "24px",
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
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    color: commonColor.white,
    textTransform: "uppercase",
    textAlign: "center",
    transition: "all 0.5s ease-in-out",
  },
  ProjectText: {
    fontSize: FONT_SIZE.text18,
    lineHeight: "32px",
    fontWeight: FONT_WEIGHT.REGULAR,
    color: commonColor.grey,
    textAlign: "center",
    transition: "all 0.5s ease-in-out",
  },
  ConstructionProjectGrid: {
    padding: {
      xs: "0",
      sm: "0",
      md: "148px 0",
      lg: "148px 100px",
      xl: "148px 100px",
    },
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "1fr",
      md: "1fr 1fr",
      lg: "1fr 1fr",
      xl: "1fr 1fr",
    },
    gap: {
      xs: "100px 40px",
      sm: "100px 40px",
      md: "250px 200px",
      lg: "250px 200px",
      xl: "250px 200px",
    },
    position: "relative",
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
    maxWidth: {
      xs: "100%",
      sm: "100%",
      md: "280px",
      lg: "280px",
      xl: "280px",
    },
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  ConstructionProjectBox: {
    width: "100%",
    backgroundColor: commonColor.white5,
    padding: "24px",
    borderRadius: "32px",
    boxShadow: "0px 0px 32px rgba(0, 0, 0, 1.2)",
    textAlign: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: "24px",
    transition: "all 0.5s ease-in-out",
    "&:hover": {
      backgroundColor: commonColor.green,
    },
    "&:hover h2": {
      color: commonColor.black,
    },

  },
};
