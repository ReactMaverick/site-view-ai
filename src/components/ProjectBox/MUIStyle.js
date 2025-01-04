import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";

export const MUIStyle = {
    ProjectBoxOuter: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: {
            xs: "12px",
            sm: "12px",
            md: "12px",
            lg: "12px",
            xl: "16px",
        },
        maxWidth: {
            xs: "300px",
            sm: "300px",
            md: "320px",
            lg: "320px",
            xl: "340px",
        },
        boxShadow: "0px 0px 32px rgba(0, 0, 0, 0.12)",
        borderRadius: "32px",
        overflow: "hidden",
    },
    ProjectBoxImgBox: {
        position: "relative",
        height: {
            xs: "220px",
            sm: "220px",
            md: "220px",
            lg: "220px",
            xl: "250px",
        },
        width: "100%",
        "&::after": {
            content: '""',
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: {
                xs: "220px",
                sm: "220px",
                md: "220px",
                lg: "220px",
                xl: "250px",
            },
            background: commonColor.blackGredient,
            zIndex: "0",
        },

    },
    ProjectBoxContent: {
        padding: "0px 24px",
        minHeight: {
            xs: "220px",
            sm: "220px",
            md: "220px",
            lg: "220px",
            xl: "250px",
        },
    },

    ProjectTitle: {
        fontSize: {
            xs: FONT_SIZE.heading28,
            sm: FONT_SIZE.heading28,
            md: FONT_SIZE.heading28,
            lg: FONT_SIZE.heading28,
            xl: FONT_SIZE.heading32,
        },
       lineHeight: "1.5em",
        fontWeight: FONT_WEIGHT.MEDIUM,
        color: commonColor.white,
        margin: "0",
        position: "absolute",
        bottom: "20px",
        left: "20px",
        zIndex: "1",
    },
    ProjectContent: {
        fontSize: {
            xs: FONT_SIZE.text12,
            sm: FONT_SIZE.text12,
            md: FONT_SIZE.text14,
            lg: FONT_SIZE.text14,
            xl: FONT_SIZE.text18,
        },
     lineHeight: "1.5em",
        fontWeight: FONT_WEIGHT.REGULAR,
        color: commonColor.grey,
        textAlign: "center",
    },
    ProjectImg: {
        width: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "100%",
            xl: "100%",
        },
        height: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "100%",
        },
        objectFit: "cover",
    }

};
