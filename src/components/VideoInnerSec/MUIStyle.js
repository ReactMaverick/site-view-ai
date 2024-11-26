import { commonColor } from "@/values/Colors/CommonColor";

export const MUIStyle = {
    VideoInnerSecMain: {
        background:commonColor.black,
        position: "relative",
        width: "100%",
        minHeight: "400px",
        marginTop: "100px",
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
            marginTop: "-170px",
            padding: "12px",
            borderRadius: "24px",
            objectFit: "contain",
        },
    },
    
   
};