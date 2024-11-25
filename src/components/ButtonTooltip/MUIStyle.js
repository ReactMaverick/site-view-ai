import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";

export const MUIStyle = {
    ButtonTooltipMain : {
        width: "100%",
        padding: "8px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        background: commonColor.green80,
        borderRadius: "24px",
        width: "400px",
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
        minHeight: "220px",
    },
    ButtonTooltipBoxInner: {
     padding: "24px",
    },
    Heading: {
        fontSize: FONT_SIZE.heading26,
        lineHeight: "30px",
        fontWeight: FONT_WEIGHT.SEMI_BOLD,
        color: commonColor.black,
        marginBottom: "16px",
    },
    ToolTipText: {
        fontSize: FONT_SIZE.text16,
        lineHeight: "24px",
        fontWeight: FONT_WEIGHT.REGULAR,
        color: commonColor.grey,
    },


};
