import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_FAMILY, FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";

export const MUIStyle = {
    FooterSec: {
        background: commonColor.black,
        width: "100%",
        paddingTop: {
            xs: "40px",
            sm: "40px",
            md: "100px",
            lg: "132px",
            xl: "132px",
        },
        position: "relative",
    },
    ftrwaternark: {
        position: "absolute",
        bottom: "0",
        left: "50%",
        transform: "translateX(-50%)",
        width: "93%",
        zIndex: "1",
    },
    SocialMediaBox: {
        display: "flex",
        gap: "10px",
        alignItems: "center",
    },
    FooterSocialButton:{
        minWidth: {
            xs: "35px",
            sm: "35px",
            md: "42px",
            lg: "42px",
            xl: "42px",
        },
        padding: "0",
    },
    FooterSocialBox: {
        display: "flex",
        gap: "20px",
        alignItems: "center",
        justifyContent: "start",
    },
    SocialMediaIcon: {
        fontSize: {
            xs: FONT_SIZE.text16,
            sm: FONT_SIZE.text16,
            md: FONT_SIZE.text20,
            lg: FONT_SIZE.text20,
            xl: FONT_SIZE.text20,
        },
        color: commonColor.white,
    },
    FooterRow: {
        display: "flex",
        justifyContent: "space-between",
        flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
        },
        alignItems: "Flex-start",
        gap: "50px",
        paddingBottom: "122px",
    },
    FooterLogoBox: {
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        width: {
            xs: "100%",
            sm: "100%",
            md: "40%",
            lg: "40%",
            xl: "40%",
        },
        "& img": {
            width: "163px",
        },

    },
    FooterMenuBoxOuter:{
        display: "flex",
        justifyContent: "Flex-end",
        flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
        },
        alignItems: "Flex-end",
        gap: "55px",
        width: "100%",
    },
    FooterLogoText: {
        fontSize: FONT_SIZE.text18,
        fontWeight: FONT_WEIGHT.MEDIUM,
        color: commonColor.grey,
        lineHeight: "26px",
    },
    FooterMenuBox: {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
       width: {
            xs: "100%",
            sm: "100%",
            md: "20%",
            lg: "20%",
            xl: "20%",
        },
    },
  
    FooterCunnectMenuLi: {
        display: "grid",
        gap: "15px",
        gridTemplateColumns: "40px 1fr",
        alignItems: "center",
    },
    FooterMenuTitleText: {
        fontSize: FONT_SIZE.heading24,
        fontWeight: FONT_WEIGHT.MEDIUM,
        color: commonColor.white,
        lineHeight: "150%",
    },
    FooterMenuUl: {
        display: "flex",
        flexDirection: "column",
        gap: "16px",
    },
    FooterMenuLi: {
        display: "flex",
        gap: "10px",
        width: "100%",
    },
    FooterMenuText: {
        fontSize: FONT_SIZE.text18,
        fontWeight: FONT_WEIGHT.MEDIUM,
        color: commonColor.grey,
        transition: "all 0.4s ease-in-out",
        "&:hover": {
            color: commonColor.green,
            paddingLeft: "10px",
        },
    },
    FooterCunnectIConBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: FONT_SIZE.text20,
        width: "40px",
        height: "40px",
        background: "",
        background: "#14201C",
        borderRadius: "50%",
        color: commonColor.MGoldPrimary,
    },
    FooterMenuNewsBox: {
        display: "flex",
        flexDirection: "column",
        gap: "28px",
        width: {
            xs: "100%",
            sm: "100%",
            md: "25%",
            lg: "25%",
            xl: "25%",
        },
    },

    FooterNewsLetterForm: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        flexDirection: "column",
        gap: "16px",
        width: "100%",
        "& .MuiOutlinedInput-root": {
            borderRadius: "10px !important",
            border: "none !important",
            "& fieldset": {
                border: "none !important",
            },

            "&:hover fieldset": {
                border: "none !important",
            },
            "&.Mui-focused fieldset": {
                border: "none !important",
            },
            "&.Mui-focused": {
                border: "none !important",
            },

        },
        "& .MuiInputBase-input": {
            padding: "0px 20px",
            minHeight: "54px",
            backgroundColor: commonColor.MWNewsletterinput,
            color: commonColor.MWLightGrey,
            fontSize: FONT_SIZE.text18,
            width: "100%",
            border: "none !important",
            borderRadius: "50px",
            "&::placeholder": {
                color: commonColor.MWLightGrey,
                fontSize: FONT_SIZE.text18,
                fontWeight: FONT_WEIGHT.MEDIUM,
                opacity: 1,
            },
        },

        "& .MuiButton-contained": {
            background: commonColor.MGoldPrimary,
            color: commonColor.MWhiteBg,
            fontSize: {
                xs: FONT_SIZE.text18,
                sm: FONT_SIZE.text18,
                md: FONT_SIZE.text20,
                lg: FONT_SIZE.text20,
                xl: FONT_SIZE.text20,
            },
            fontWeight: FONT_WEIGHT.MEDIUM,
            lineHeight: "130%",
            border: "2px solid #FFD993",
            boxShadow: " 0 7px 24px rgba(206, 149, 45, 0.42) !important",
            padding: "14px 35px",
            borderRadius: "50px",
            "&:hover": {
                background: commonColor.Trans,
                color: commonColor.MGoldPrimary,
                border: `2px solid ${commonColor.MGoldPrimary}`,
            },
        },
    },




};
