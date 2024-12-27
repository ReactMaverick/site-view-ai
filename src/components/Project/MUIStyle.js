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
        justifyContent: "center",
        alignItems: "center",
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
       lineHeight: "1.5em",
        fontWeight: FONT_WEIGHT.REGULAR,
        color: commonColor.black,
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
        marginBottom: "24px",
    },
    ProjectSecOuter: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        padding: {
            xs: "100px 0",
            sm: "100px 0",
            md: "100px 0",
            lg: "100px 0",
            xl: "100px 0",
        },
    },

    ProjectSec: {
        // margin: "180px 0",
    },

};
