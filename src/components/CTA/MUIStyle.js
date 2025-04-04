import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";
import { CTABG } from "@/values/Constants/ImageConstants";

export const MUIStyle = {
  CTAMain: {
    width: "100%",
    padding: {
      xs: "50px 0",
      sm: "50px 0",
      md: "50px 0 50px",
      lg: "50px 0 50px",
      xl: "130px 0 60px",
    },
    // background: `url(${CTABG}) no-repeat center center`,
    backgroundSize: "cover",
    position: "relative",
    height: "100vh",
    overflow: "hidden",
  },
  CTAInner: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    // marginBottom: "220px",
  },
  CTAHeading: {
    fontSize: {
      xs: FONT_SIZE.text22,
      sm: FONT_SIZE.heading24,
      md: FONT_SIZE.heading24,
      lg: FONT_SIZE.heading24,
      xl: FONT_SIZE.heading28,
    },
    lineHeight: {
      xs: FONT_SIZE.heading28,
      sm: FONT_SIZE.heading32,
      md: FONT_SIZE.heading32,
      lg: FONT_SIZE.heading32,
      xl: FONT_SIZE.heading36,
    },
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    color: commonColor.green,
    textAlign: "center",
  },
  CTAImgInner: {
    display: "flex",
    justifyContent: {
      xs: "center",
      sm: "center",
      md: "flex-end",
      lg: "flex-end",
      xl: "flex-end",
    },
    alignItems: "center",
    // margin: "100px 0",
    paddingRight: {
      xs: "0px",
      sm: "0px",
      md: "100px",
      lg: "100px",
      xl: "100px",
    },
    "& img": {
      width: {
        xs: "90%",
        sm: "80%",
        lg: "70vh",
        md: "70vh",
        xl: "60vh",
      },
      height: {
        xs: "auto",
        sm: "auto",
        md: "60vh",
        lg: "60vh",
        xl: "60vh",
      },
      objectFit: "contain",
    },
  },
  CTAList: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: {
      xs: "0px",
      sm: "0px",
      md: "20px",
      lg: "20px",
      xl: "20px",
    },
    position: "relative",
    marginLeft: {
      xs: "0px",
      sm: "0px",
      md: "50px",
      lg: "50px",
      xl: "50px",
    },
    marginRight: {
      xs: "0px",
      sm: "0px",
      md: "50px",
      lg: "50px",
      xl: "50px",
    },
    // marginTop: {
    //   xs: "0px",
    //   sm: "0px",
    //   md: "180px",
    //   lg: "180px",
    //   xl: "180px",

    // },
    flexDirection: {
      xs: "column",
      sm: "column",
      md: "row",
      lg: "row",
      xl: "row",
    },
  },
  CTAListDivider: {
    width: {
      xs: "5px",
      sm: "5px",
      md: "120px",
      lg: "120px",
      xl: "120px",
    },
    height: {
      xs: "120px",
      sm: "120px",
      md: "5px",
      lg: "5px",
      xl: "5px",
    },
    borderRadius: "20px",
    background: commonColor.green,
  },
  CTAListItemHeading: {
    fontSize: {
      xs: FONT_SIZE.text18,
      sm: FONT_SIZE.text18,
      md: FONT_SIZE.text22,
      lg: FONT_SIZE.text22,
      xl: FONT_SIZE.heading24,
    },
    lineHeight: "1.5em",
    fontWeight: FONT_WEIGHT.MEDIUM,
    color: commonColor.white,
    marginBottom: {
      xs: "10px",
      sm: "10px",
      md: "0px",
      lg: "0px",
      xl: "0px",
    }
  },
  CTAListImg: {
    width: {
      xs: "100px",
      sm: "100px",
      md: "120px",
      lg: "120px",
      xl: "120px",
    },
    height: {
      xs: "25px",
      sm: "25px",
      md: "32px",
      lg: "32px",
      xl: "32px",
    },
    objectFit: "contain",
    rotate: {
      xs: "90deg",
      sm: "90deg",
      md: "0deg",
      lg: "0deg",
      xl: "0deg",
    },

  },


  BannerBtn: {
    background: commonColor.trans,
    color: {
      xs: commonColor.black,
      sm: commonColor.black,
      md: commonColor.green,
      lg: commonColor.green,
      xl: commonColor.green,
    },
    borderRadius: "99px",
    padding: "0px 35px 0px 0px",
    boxShadow: "none",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "1",
    position: "relative",
    gap: "10px",
    fontSize: {
      xs: FONT_SIZE.text16,
      sm: FONT_SIZE.text16,
      md: FONT_SIZE.heading24,
      lg: FONT_SIZE.heading24,
      xl: FONT_SIZE.heading24,
    },
    textTransform: "capitalize",
    fontWeight: FONT_WEIGHT.SEMI_BOLD,
    lineHeight: "1.5em",
    transition: "all 0.8s ease",
    "&:hover": {
      boxShadow: "none",
      color: commonColor.black + " !important",
    },
    "&:hover .BannerBtnIcon": {
      transform: "translateX(10px)",
    },
    "&:hover .BannerBtnBG": {
      width: "100%",

    },
    marginTop: {
      xs: "15px",
      sm: "20px",
      md: "0px",
      lg: "0px",
      xl: "0px",
    }
  },
  BannerBtnBG: {
    position: "absolute",
    top: "0",
    left: "0",
    height: "100%",
    width: {
      xs: "100%",
      sm: "100%",
      md: "0%",
      lg: "0%",
      xl: "0%",
    },
    background: commonColor.green,
    transition: "all 0.8s ease",
    zIndex: "-1",
    borderRadius: "99px",
  },
  BannerBtnIcon: {
    fontSize: FONT_SIZE.heading28,
    height: {
      xs: "40px",
      sm: "40px",
      md: "60px",
      lg: "60px",
      xl: "60px",
    },
    width: {
      xs: "40px",
      sm: "40px",
      md: "60px",
      lg: "60px",
      xl: "60px",
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    background: commonColor.green,
    color: commonColor.black,
    transition: "all 0.8s ease",
  },
  CTAImgFlex: {
    display: 'flex',
    position: 'absolute',
    top: '0',
    height: '100%',
    backgroundColor: commonColor.black,
  },
  CTAImg: {
    width: '100vw',
    objectFit: 'contain',
  },
  CTAContainer: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  }

};
