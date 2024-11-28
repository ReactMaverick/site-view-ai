import { commonColor } from "@/values/Colors/CommonColor";

export const MUIStyle = {
    VideoInnerSecMain: {
        background:commonColor.black,
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
            background:"rgba(255, 255, 255, 0.2)",
            width: {
                xs: "100%",
                sm: "100%",
                md: "1000px",
                lg: "1000px",
                xl: "1000px",
            },
            height: {
                xs: "auto",
                sm: "auto",
                md: "580px",
                lg: "580px",
                xl: "580px",
            },
            marginTop: {
                xs: "-80px",
                sm: "-80px",
                md: "-170px",
                lg: "-170px",
                xl: "-170px",
            },
            padding: "12px",
            borderRadius: "24px",
            objectFit: "contain",
        },
    },
    
   
};