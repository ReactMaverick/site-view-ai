import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";

export const MUIStyle = {
    ProjectBoxOuter: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "24px",
        maxWidth: {
            xs: "100%",
            sm: "100%",
            md: "400px",
            lg: "400px",
            xl: "400px",
        },
        boxShadow: "0px 0px 32px rgba(0, 0, 0, 0.12)",
        borderRadius: "32px",
        overflow: "hidden",
    },
    ProjectBoxImgBox: {
        position: "relative",
        maxHeight: "280px",
        width: "100%",
        "&::after": {
            content: '""',
            position: "absolute",
            top: "0",
            left: "0",
            width: "100%",
            height: "100%",
            background: commonColor.blackGredient,
            zIndex: "0",
        },

    },
    ProjectBoxContent: {
        padding: "0px 24px",
        minHeight: "300px",
    },

    ProjectTitle: {
        fontSize: FONT_SIZE.heading32,
        lineHeight: "40px",
        fontWeight: FONT_WEIGHT.MEDIUM,
        color: commonColor.white,
        margin: "0",
        position: "absolute",
        bottom: "20px",
        left: "20px",
        zIndex: "1",
    },
    ProjectContent: {
        fontSize: FONT_SIZE.text20,
        lineHeight: "28px",
        fontWeight: FONT_WEIGHT.REGULAR,
        color: commonColor.grey,
        textAlign: "center",
    },
    ProjectImg: {
        width: "400px",
        height: "280px",
        objectFit: "cover",
    }

};
