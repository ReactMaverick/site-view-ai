import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";
import { FOOTERBG } from "@/values/Constants/ImageConstants";
import { commonStyle } from "@/values/Styles/CommonStyle";

export const MUIStyle = {
    HeaderMain: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: commonColor.trans,
        width: "100%",
        position: "absolute",
        top: "0",
        left: "0",
        padding: "10px 0",
        borderBottom: "1px solid",
        borderColor: "#D6D6D6",
    },

    HeaderInner: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: "10px 0",
        gap: {
            xs: "10px",
            sm: "20px",
        }
    },
    HeaderNavBox: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "20px",
        flexDirection: {
            xs: "column",
            sm: "row",
        },
    },
    HeaderLogoBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    },
    logoImage: {
        width: {
            xs: "96px",
            sm: "96px",
            md: "120px",
            lg: "150px",
            xl: "150px",
        },
    },


    HeaderBtn: {
        background: commonColor.green,
        border: "2px solid",
        borderColor: commonColor.green,
        boxShadow: "none",
        padding: "7px 42px",
        borderRadius: "100px",
        textTransform: "capitalize",
        fontSize: {
            xs: FONT_SIZE.text14,
            sm: FONT_SIZE.text16,
            md: FONT_SIZE.text18,
            lg: FONT_SIZE.text20
        },
        fontWeight: FONT_WEIGHT.REGULAR,
        color: commonColor.black,
        "&:hover": {
            background: commonColor.trans,
            boxShadow: "none",
            color: commonColor.black,
        },
    },

    MAinMenuBox: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: {
            xs: 'stretch',
            sm: 'stretch',
            md: 'stretch',
            lg: 'center',
            xl: 'center',
        },
        gap: {
            xs: '10px',
            sm: '20px',
            md: '50px',
            lg: '50px',
            xl: '80px',
        },
        flexDirection: {
            xs: 'column',
            sm: 'row',
        },
    },

    HeaderMenuBox: {
        position: {
            xs: "fixed",
            sm: "fixed",
            lg: "relative",
        },
        transition: "all 0.5s",
        background: commonColor.Trans,
        top: "0",
        width: "100%",
        height: {
            xs: "100vh",
            sm: "100vh",
            lg: "auto",
        },
        padding: {
            xs: "0px",
            sm: "0px",
        },
        zIndex: "999",
        "&:after": {
            content: '""',
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            background: "rgb(0 0 0 / 86%)",
            zIndex: "-1",
            display: {
                xs: "block",
                sm: "block",
                lg: "none",
            },

        }

    },
    HeadermobInner: {
        width: {
            xs: "87%",
            sm: "60%",
            lg: "auto",
        },
        backgroundImage: {
            xs: `url(${FOOTERBG})`,
            sm: `url(${FOOTERBG})`,
            lg: "none",
        },
        backgroundSize: {
            xs: "cover",
            sm: "cover",
            lg: "cover",
        },
        backgroundPosition: {
            xs: "center",
            sm: "center",
            lg: "center",
        },
        backgroundRepeat: {
            xs: "no-repeat",
            sm: "no-repeat",
            lg: "no-repeat",
        },
        height: "100%",
        marginLeft: {
            xs: "auto",
            sm: "auto",
            lg: "20px",
        },
    },

    menuCloseBtn: {
        height: "40px",
        width: "40px",
        display: {
            xs: "flex",
            sm: "flex",
            lg: "none",
        },
        justifyContent: "center",
        alignItems: "center",
        fontSize: "30px",
        color: commonColor.yellow,
        background: commonColor.white,
        position: "absolute",
        top: "10px",
        left: {
            xs: "10px",
            sm: "34%",
            lg: "auto",
        },
        borderRadius: "50% 50% 0% 50%",
    },
    HeaderMobLogoBox: {
        padding: "20px",
        display: {
            xs: "flex",
            sm: "flex",
            lg: "none",
        },
    },
    menuBtn: {
        display: {
            xs: "flex",
            sm: "flex",
            lg: "none",
        },
        justifyContent: "flex-end",
        alignItems: "center",
        fontSize: "30px",
        color: commonColor.talkDarkblue1,
    },
    LogoImgMob: {
        width: {
            xs: "130px",

        },
    },
    HEaderMenu: {
        display: "flex",
        justifyContent: "center",
        flexDirection: {
            xs: "column",
            sm: "column",
            lg: "row",
        },
        alignItems: {
            xs: "start",
            sm: "start",
            lg: "center",

        },
        gap: {
            xs: "10px",
            sm: "20px",
            lg: "20px",
        },
        listStyle: "none",
        padding: 0,
        margin: 0,
        background: commonColor.trans,
    },
    HEaderMenuLi: {
        display: {
            xs: "block",
            sm: "block",
            lg: "inline-block",
        },
        padding: "0",
        width: {
            xs: "100%",
            sm: "auto",
        },
    },
    HeaderMenuBtn: {
        color: {
            xs: commonColor.white,
            sm: commonColor.white,
            lg: commonColor.black,
        },
        fontSize: FONT_SIZE.text18,
        fontWeight: FONT_WEIGHT.REGULAR,
        cursor: "pointer",
        padding: "10px 18px",
        transition: "all 0.3s",
        "&:hover": {
            color: commonColor.green,
            boxShadow: "none",
        }
    },
};