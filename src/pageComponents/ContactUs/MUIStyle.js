import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";
import { EXTRABG } from "@/values/Constants/ImageConstants";

export const MUIStyle = {
  ContactSec: {
    width: "100%",
    // padding: {
    //   xs: "100px 0",
    //   sm: "100px 0",
    //   md: "100px 0 100px",
    //   lg: "284px 0 100px",
    //   xl: "284px 0 130px",
    // },
    minHeight: '100vh',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    // background: `url(${EXTRABG})`,
    background: commonColor.black,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    // backgroundColor: commonColor.black,
    position: "relative",
  },
  ContactSecOuter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  ContactSecInner: {
    maxWidth: {
      xs: "100%",
      sm: "100%",
      md: "80%",
      lg: "70%",
      xl: "70%",
    },
    marginBottom: {
      xs: "80px",
      sm: "80px",
      md: "96px",
      lg: "96px",
      xl: "96px",
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
    lineHeight: "1.5em",
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
    lineHeight: "1.5em",
    fontWeight: FONT_WEIGHT.REGULAR,
    color: commonColor.white,
    textTransform: "uppercase",
    textAlign: "center",
    transition: "all 0.5s ease-in-out",
  },
  ContactSecGrid: {
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",
      sm: "1fr 1fr",
      md: "1fr 1fr 1fr",
      lg: "1fr 1fr 1fr",
      xl: "1fr 1fr 1fr",
    },
    gap: {
      xs: "30px",
      sm: "30px",
      md: "30px",
      lg: "80px",
      xl: "150px",
    },
  },
  ContactBox: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: {
      xs: "center",
      sm: "center",
      md: "start",
      lg: "start",
      xl: "start",
    },
    flexDirection: "column",
    backgroundColor: commonColor.white10,
    padding: "30px",
    borderRadius: "20px",
    transition: "all 0.5s ease-in-out",
    minHeight: {
      xs: "250px",
      sm: "250px",
      md: "250px",
      lg: "360px",
      xl: "360px",
    },
    backdropFilter: "blur(10px)",
  },
  ContactBoxIcon: {
    fontSize: "30px",
    color: commonColor.black,
    height: "50px",
    width: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    backgroundColor: commonColor.green,
  },
  ContactBoxContent: {
    display: "flex",
    justifyContent: "center",
    alignItems: {
      xs: "center",
      sm: "center",
      md: "start",
      lg: "start",
      xl: "start",
    },
    flexDirection: "column",
    gap: {
      xs: "20px",
      sm: "20px",
      md: "20px",
      lg: "26px",
      xl: "26px",
    },
  },
  ContactBoxHeading: {
    fontSize: {
      xs: FONT_SIZE.heading28,
      sm: FONT_SIZE.heading26,
      md: FONT_SIZE.heading28,
      lg: FONT_SIZE.heading36,
      xl: FONT_SIZE.heading36,
    },
    lineHeight: {
      xs: "30px",
      sm: "28px",
      md: "30px",
      lg: "40px",
      xl: "40px",
    },
    fontWeight: FONT_WEIGHT.MEDIUM,
    color: commonColor.white,
    textAlign: {
      xs: "center",
      sm: "center",
      md: "Left",
      lg: "Left",
      xl: "Left",
    },
    transition: "all 0.5s ease-in-out",
  },

  ContactBoxText: {
    fontSize: FONT_SIZE.heading24,
    lineHeight: "1.5em",
    fontWeight: FONT_WEIGHT.REGULAR,
    color: commonColor.grey3,
    textAlign: {
      xs: "center",
      sm: "center",
      md: "Left",
      lg: "Left",
      xl: "Left",
    },
    transition: "all 0.5s ease-in-out",
  },
  ContactSecMap: {
    width: "100%",
    minHeight: {
      xs: "100%",
      sm: "100%",
      md: "600px",
      lg: "1024px",
      xl: "1024px",
    },
    "& img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },

  FAQSec: {
    width: "100%",
    padding: {
      xs: "100px 0",
      sm: "100px 0",
      md: "100px 0",
      lg: "132px 0",
      xl: "132px 0",
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  FAQSecOuter: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    padding: "30px 0",
  },
  FAQSecAccrodin: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: "100%",
    gap: "30px",
    width: {
      xs: "100%",
      sm: "100%",
      md: "80%",
      lg: "60%",
      xl: "60%",
    },
  },
  FAQSecAccrodinBox: {
    "&.MuiAccordion-root": {
      boxShadow: "none",
      borderRadius: "50px",
      transition: "all 0.5s ease-in-out",
      padding: "15px 20px",
      "&.Mui-expanded": {
        margin: "0px",
      },
    },
    "&.MuiAccordion-root:before": {
      display: "none",
    },

    width: "100%",
  },

  FAQSecAccrodinHeading: {
    fontSize: FONT_SIZE.heading24,
    lineHeight: "1.5em",
    fontWeight: FONT_WEIGHT.MEDIUM,
    color: commonColor.black,
    textAlign: "left",
    transition: "all 0.5s ease-in-out",
  },
  FAQSecAccrodiontext: {
    fontSize: FONT_SIZE.text20,
    lineHeight: "1.5em",
    fontWeight: FONT_WEIGHT.REGULAR,
    color: commonColor.grey,
    textAlign: "left",
    transition: "all 0.5s ease-in-out",
  },
  FaqHeading: {
    fontSize: FONT_SIZE.heading32,
    lineHeight: "1.5em",
    fontWeight: FONT_WEIGHT.REGULAR,
    color: commonColor.black,
    textTransform: "uppercase",
    textAlign: "center",
    transition: "all 0.5s ease-in-out",
    paddingBottom: "80px",
  },
  BtnRow: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    marginTop: "80px",
  },
  CustomBtn: {
    background: commonColor.green,
    border: "2px solid",
    borderColor: commonColor.green,
    boxShadow: "none",
    padding: "12px 42px",
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
    lineHeight: "1.5em",
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
  ContactSecSVGContainer: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
  }
};
