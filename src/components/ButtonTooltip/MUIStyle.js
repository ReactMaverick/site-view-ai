import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";

export const MUIStyle = {
    ButtonTooltipMain: {
        padding: "8px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: commonColor.green80,
        borderRadius: "24px",
        width: {
            xs: "300px",
            sm: "300px",
            md: "350px",
            lg: "350px",
            xl: "400px",
        },
        backdropFilter: "blur(5px)",
    },
    ButtonTooltipBoxOuter: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    ButtonTooltipImg: {
        width: "100%",
        minHeight: {
            xs: "150px",
            sm: "150px",
            md: "150px",
            lg: "150px",
            xl: "220px",
        },
        maxHeight: {
            xs: "150px",
            sm: "150px",
            md: "150px",
            lg: "150px",
            xl: "220px",
        },
        objectFit: "cover",
        borderRadius: '20px'
    },
    ButtonTooltipBoxInner: {
        padding: {
            xs: "8px",
            sm: "8px",
            md: "8px",
            lg: "8px",
            xl: "16px",
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
        lineHeight: "30px",
        fontWeight: FONT_WEIGHT.SEMI_BOLD,
        color: commonColor.black,
        marginBottom: {
            xs: "8px",
            sm: "8px",
            md: "8px",
            lg: "8px",
            xl: "16px",
        },
    },
    ToolTipText: {
        fontSize: {
            xs: FONT_SIZE.text14,
            sm: FONT_SIZE.text14,
            md: FONT_SIZE.text14,
            lg: FONT_SIZE.text14,
            xl: FONT_SIZE.text16,
        },
        lineHeight: "24px",
        fontWeight: FONT_WEIGHT.REGULAR,
        color: commonColor.grey,
    },


};
