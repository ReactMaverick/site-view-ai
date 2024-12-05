import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";

export const MUIStyle = {
    BlogDetailsSec: {
        padding: "200px 0 100px",
    },
    Heading: {
        fontSize: FONT_SIZE.heading32,
        lineHeight: "40px",
        fontWeight: FONT_WEIGHT.REGULAR,
        color: commonColor.black,
        textTransform: "uppercase",
        textAlign: "center",
        transition: "all 0.5s ease-in-out",
        paddingLeft: "20px",
    },
        FAQSecOuter:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        padding: "30px 0",
      },
      FAQSecAccrodin: {
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        flexDirection: "column",
        width: "100%",
        gap: "30px",
        width: {
          xs: "100%",
          sm: "100%",
          md: "80%",
          lg: "60%",
          xl: "60%",
        },
      },
      FAQSecAccrodinBox : {
        "&.MuiAccordion-root": {
          boxShadow: "none",
          borderRadius: "50px",
          transition: "all 0.5s ease-in-out",
          padding: "15px 20px",
          "&.Mui-expanded": {
            margin: "0px",
          },
        },
        "&.MuiAccordion-root:before": {
          display: "none",
        },
     
    
      },
    
      FAQSecAccrodinHeading: {
        fontSize: FONT_SIZE.heading24,
        lineHeight: "32px",
        fontWeight: FONT_WEIGHT.MEDIUM,
        color: commonColor.black,
        textAlign: "left",
        transition: "all 0.5s ease-in-out",
      },
      FAQSecAccrodiontext: {
        fontSize: FONT_SIZE.text20,
        lineHeight: "28px",
        fontWeight: FONT_WEIGHT.REGULAR,
        color: commonColor.grey,
        textAlign: "left",
        transition: "all 0.5s ease-in-out",
      },
 
};