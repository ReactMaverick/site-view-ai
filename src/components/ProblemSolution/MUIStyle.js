import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";

export const MUIStyle = {
    ProblemSolutionMain: {
        background: commonColor.black,
        position: "relative",
        width: "100%",
        padding: {
            xs: "0 0 50px 0",
            sm: "0 0 50px 0",
            md: "0 0 50px 0",
            lg: "0 0 50px 0",
            xl: "0 0 100px 0",
        },
        overflow: "hidden",
        position: "relative",
        height: "100vh",
    },
    AboutSecOuterBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
        padding: "0",
        position: "relative",
        padding: {
            xs: "10px 10px",
            sm: "10px 10px",
            md: "10px 10px",
            lg: "10px 10px",
            xl: "20px 20px",
        },
    },
    AboutSecHeadingBox: {
        width: {
            xs: "100%",
            sm: "60%",
            md: "60%",
            lg: "60%",
            xl: "40%",
        },
    },
    AboutSecText: {
        color: commonColor.grey,
        fontSize: {
            xs: FONT_SIZE.text16,
            sm: FONT_SIZE.text16,
            md: FONT_SIZE.text16,
            lg: FONT_SIZE.text16,
            xl: FONT_SIZE.text18,
        },
        fontWeight: FONT_WEIGHT.MEDIUM,
        lineHeight: FONT_SIZE.heading28,
        textAlign: "center",
        marginBottom: {
            xs: "10px",
            sm: "10px",
            md: "0",
            lg: "0",
            xl: "20px",
        },
    },
    AboutSecHeading: {
        color: commonColor.white,
        fontSize: {
            xs: FONT_SIZE.heading24,
            sm: FONT_SIZE.heading24,
            md: FONT_SIZE.heading24,
            lg: FONT_SIZE.heading28,
            xl: FONT_SIZE.heading32,
        },
        lineHeight: FONT_SIZE.heading40,
        fontWeight: FONT_WEIGHT.REGULAR,
        textTransform: "uppercase",
        textAlign: "center",
    },
    ProblemSolutionBox: {
        width: {
            xs: "100%",
            sm: "100%",
            md: "90%",
            lg: "90%",
            xl: "70%",
        },
        margin: "0 auto",
    },
    BoxOuter: {
        position: "relative",
    },
    ProblemSolutionPair: {
        display: "flex",
        flexDirection: "row",
        gap: {
            xs: "10px",
            sm: "10px",
            md: "10px",
            lg: "10px",
            xl: "20px",
        },
    },
    BannerSVGContainer: {
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
    },

};