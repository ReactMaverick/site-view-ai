import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";
import { CARD1, TITLEBG } from "@/values/Constants/ImageConstants";

export const MUIStyle = {
    BlogDetailsSec: {
        padding: "200px 0 100px",
    },
    SingleBlogMain  :{
       width:{
              xs: "100%",
              sm: "100%",
              md: "100%",
              lg: "90%",
              xl: "80%",
       },
       margin: "0 auto",
    },
    BlogHeading : {
        fontSize: {
            xs: FONT_SIZE.heading32,
            sm: FONT_SIZE.heading32,
            md: FONT_SIZE.heading40,
            lg: FONT_SIZE.heading48,
            xl: FONT_SIZE.heading48,
        },
        color: commonColor.black,
        fontWeight: FONT_WEIGHT.SEMI_BOLD,
        lineHeight:{
            xs: "40px",
            sm: "40px",
            md: "48px",
            lg: "65px",
            xl: "65px",
        },
        marginBottom: "40px",
    },
    BlogImg : {
        width: "100%",
        objectFit: "cover",
        minHeight:{
            xs: "400px",
            sm: "400px",
            md: "600px",
            lg: "600px",
            xl: "600px",
        },
        borderRadius: "20px",
        marginBottom: "40px",
    },
    BlogText:{
        fontSize: FONT_SIZE.text20,
        color: commonColor.grey,
        fontWeight: FONT_WEIGHT.MEDIUM,
        lineHeight: "28px",
        marginBottom: "30px",
        "& strong":{
            fontWeight: FONT_WEIGHT.BOLD,
            color: commonColor.black,
        },
    },
    BlogTitle:{
        fontSize: FONT_SIZE.heading24,
        color: commonColor.black,
        fontWeight: FONT_WEIGHT.SEMI_BOLD,
        lineHeight: "32px",
        marginBottom: "30px",
    },
    BlogDetailsUl:{
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column",
    listStyle: "none",
    gap: "30px",
    },
 
};