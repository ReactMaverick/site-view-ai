import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";

export const MUIStyle = {
    modalOuterBox: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
    },
    modalBox: {
        background: 'url("/images/contact-form-bg.jpg")',
        width: {
            xs: "80vw",
            sm: "calc(80vh/0.75)",
            md: "calc(80vh/0.75)",
            lg: "calc(80vh/0.75)",
            xl: "calc(80vh/0.75)",
        },
        // Height should be 0.75 times the width
        height: {
            xs: "60vw",
            sm: "80vh",
            md: "80vh",
            lg: "80vh",
            xl: "80vh",
        },
        backgroundSize: "cover",
        zIndex: 1,
        position: 'relative',
    },
    closeIcon: {
        cursor: "pointer",
        position: "absolute",
        top: "0.5%",
        right: "0.5%",
        width: "2vw",
        height: "2vw",
        filter: 'drop-shadow(5px 5px 5px black)',
    },
    modalContent: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-evenly",
        height: "100%",
        width: "50%",
        padding: "3rem",
    },
    letsTalkButton: {
        background: commonColor.green,
        border: "2px solid",
        borderColor: commonColor.green,
        boxShadow: "none",
        padding: {
            xs: "6px 20px",
            sm: "6px 20px",
            md: "6px 20px",
            lg: "6px 20px",
            xl: "10px 42px",
        },
        borderRadius: "100px",
        textTransform: "capitalize",
        fontSize: {
            xs: FONT_SIZE.text14,
            sm: FONT_SIZE.text14,
            md: FONT_SIZE.text14,
            lg: FONT_SIZE.text14,
        },
        lineHeight: "1.5em",
        fontWeight: FONT_WEIGHT.MEDIUM,
        color: commonColor.black,
        transition: 'all 0.3s ease',
        "&:hover": {
          background: commonColor.trans,
          boxShadow: "none",
          color: commonColor.white,
        },
    },
}