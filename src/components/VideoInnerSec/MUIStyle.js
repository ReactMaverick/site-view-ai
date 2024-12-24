import { commonColor } from "@/values/Colors/CommonColor";

export const MUIStyle = {
    VideoInnerSecMain: {
        background: commonColor.black,
        position: "relative",
        width: "100%",
        minHeight: {
            xs: "auto",
            sm: "auto",
            md: "400px",
            lg: "400px",
            xl: "400px",
        },
        marginTop: {
            xs: "50px",
            sm: "50px",
            md: "100px",
            lg: "100px",
            xl: "100px",
        },
    },

    VideoInnerSecInner: {
        position: "relative",
        display: "flex",
        justifyContent: "center",
        "& img": {
            background: "rgba(255, 255, 255, 0.2)",
            width: {
                xs: "100%",
                sm: "100%",
                md: "90%",
                lg: "90%",
                xl: "90%",
            },
            height: {
                xs: "auto",
                sm: "auto",
                md: "90%",
                lg: "90%",
                xl: "90%",
            },
            marginTop: {
                xs: "-80px",
                sm: "-80px",
                md: "-30vh",
                lg: "-30vh",
                xl: "-30vh",
            },
            padding: "12px",
            borderRadius: "24px",
            objectFit: "contain",
        },
    },


};