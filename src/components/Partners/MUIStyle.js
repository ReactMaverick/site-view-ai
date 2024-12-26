import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";
import { BANNER } from "@/values/Constants/ImageConstants";

export const MUIStyle = {
    PartnersMain: {
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

    PartnersHeadingBoxOuter: {
        display: "flex",
        justifyContent: "start",
        alignItems: "start",
        flexDirection: "column",
    },
    PartnersHeadingBoxInner: {
        maxWidth: {
            xs: "100%",
            sm: "100%",
            md: "40%",
            lg: "40%",
            xl: "40%",
        },
        marginBottom: {
            xs: "30px",
            sm: "30px",
            md: "48px",
            lg: "48px",
            xl: "48px",
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
        textTransform: "uppercase",
        color: commonColor.black,
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
        marginBottom: "24px",
    },
    partnersLogoSec: {
        margin: {
            xs: "30px 0",
            sm: "30px 0",
            md: "48px 0",
            lg: "48px 0",
            xl: "48px 0",
        },
        position: "relative",
        "&::after": {
            content: "''",
            position: "absolute",
            top: "0",
            left: "0",
            width: "290px",
            height: "100%",
            background: commonColor.gredientBGWLTR,
            zIndex: "1",
        },
        "&::before": {
            content: "''",
            position: "absolute",
            top: "0",
            right: "0",
            width: "290px",
            height: "100%",
            background: commonColor.gredientBGWRTR,
            zIndex: "2",
        },

    },
    partnersLogo: {
        width: "120px",
        height: "100%",
        objectFit: "contain",
    },


};
