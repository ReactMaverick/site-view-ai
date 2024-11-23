import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";
import { BANNER } from "@/values/Constants/ImageConstants";

export const MUIStyle = {
    IndustriesMain: {
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
   
    IndustriesHeadingBoxOuter: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    IndustriesHeadingBoxInner: {
        maxWidth: "45%",
        marginBottom: {
            xs: "30px",
            sm: "30px",
            md: "180px",
            lg: "180px",
            xl: "180px",
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
    IndustriesSec: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "24px 40px",
        flexWrap: "wrap",
    },
    IndustriesButton: {
        backgroundColor: commonColor.trans,
        color: commonColor.black,
        fontSize: FONT_SIZE.heading32,
        lineHeight: "40px",
        fontWeight: FONT_WEIGHT.REGULAR,
        border:`1px solid ${commonColor.boderColor}`,
        textTransform: "capitalize",
        borderRadius: "99px",
        padding: "16px 24px",
        "&:hover": {
            backgroundColor: commonColor.green,
            border:`1px solid ${commonColor.green}`,
        },
    },
  
};
