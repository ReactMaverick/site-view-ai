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
        maxWidth: "40%",
        marginBottom: {
            xs: "30px",
            sm: "30px",
            md: "48px",
            lg: "48px",
            xl: "48px",
        },
    },
    Heading: {
        fontSize: FONT_SIZE.heading32,
        lineHeight: "40px",
        fontWeight: FONT_WEIGHT.REGULAR,
        color: commonColor.black,
        textTransform: "uppercase",
        textAlign: "center",
        margin: "0",
    },
    SubHeading: {
        fontSize: FONT_SIZE.text18,
        lineHeight: "26px",
        fontWeight: FONT_WEIGHT.MEDIUM,
        color: commonColor.grey,
        textAlign: "center",
        marginBottom: "24px",
    },

    ProjectSec  : {
        margin: "180px 0",
    },

};
