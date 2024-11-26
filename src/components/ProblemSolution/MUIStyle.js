import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";

export const MUIStyle = {
    ProblemSolutionMain: {
        background:commonColor.black,
        position: "relative",
        width: "100%",
        padding: {
            xs: "100px 0",
            sm: "100px 0",
            md: "100px 0",
            lg: "175px 0",
            xl: "175px 0",
        },

    },
    AboutSecOuterBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
        padding: "0",
        position: "relative",
        paddingTop: "30px",
        paddingBottom: {
            xs: "100px",
            sm: "100px",
            md: "168px",
            lg: "168px",
            xl: "168px",
        }
    },
    AboutSecHeadingBox: {
        width: {
            xs: "100%",
            sm: "40%",
            md: "40%",
            lg: "40%",
            xl: "40%",
        },
    },
    AboutSecText: {
        color: commonColor.grey,
        fontSize: FONT_SIZE.text18,
        fontWeight: FONT_WEIGHT.MEDIUM,
        lineHeight:FONT_SIZE.heading28,
        textAlign: "center",
    marginBottom: "24px",
    },
    AboutSecHeading: {
        color: commonColor.white,
        fontSize: FONT_SIZE.heading32,
        lineHeight:FONT_SIZE.heading40,
        fontWeight: FONT_WEIGHT.REGULAR,
        textTransform: "uppercase",
        textAlign: "center",
    },
    ProblemSolutionBox: {   
        width: {
            xs: "100%",
            sm: "100%",
            md: "80%",
            lg: "70%",
            xl: "70%",
        },
        margin:"0 auto",
    },
    BoxOuter :{
        position: "relative",
    }
    
};