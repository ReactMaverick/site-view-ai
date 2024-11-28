import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";
import { BANNER } from "@/values/Constants/ImageConstants";
import zIndex from "@mui/material/styles/zIndex";

export const MUIStyle = {
    BannerMain: {
        width: "100%",
        padding: {
            xs: "100px 0",
            sm: "100px 0",
            md: "100px 0",
            lg: "175px 0",
            xl: "175px 0",
        },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: {
            xs: "100vh",
            sm: "100vh",
            md: "100vh",
            lg: "100vh",
            xl: "100vh",
        },
    },
    BannerRow: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px",
        padding: "0",
        position: "relative",
        height: "100%",
    },
    BannerContent: {
        width: {
            xs: "100%",
            sm: "50%",
            md: "40%",
            lg: "40%",
            xl: "40%",
        },

    },
    BannerContentInner: {
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: "column",
        gap: "10px",
    },
    BannerTopHeading: {
        fontSize: {
            xs: FONT_SIZE.text16,
            sm: FONT_SIZE.text16,
            md: FONT_SIZE.text16,
            lg: FONT_SIZE.text16,
            xl: FONT_SIZE.text16,
        },
        color: commonColor.black,
        fontWeight: FONT_WEIGHT.MEDIUM,
        background: commonColor.greenLight,
        padding: "8px 16px",
        borderRadius: "18px",
    },

    BannerHeading: {
        fontSize: {
            xs: FONT_SIZE.heading40,
            sm: FONT_SIZE.heading40,
            md: FONT_SIZE.heading48,
            lg: FONT_SIZE.heading48,
            xl: FONT_SIZE.heading48,
        },
        textAlign: 'center',
        fontWeight: FONT_WEIGHT.SEMI_BOLD,
        color: commonColor.black,
        lineHeight: {
            xs: "48px",
            sm: "48px",
            md: "48px",
            lg: "72px",
            xl: "72px",
        },

    },
    BannerText: {
        fontSize: {
            xs: FONT_SIZE.text16,
            sm: FONT_SIZE.text16,
            md: FONT_SIZE.text16,
            lg: FONT_SIZE.text20,
            xl: FONT_SIZE.text20,
        },
        color: commonColor.grey,
        fontWeight: FONT_WEIGHT.REGULAR,
        marginBottom: "24px",
        textAlign: 'center',
    },

    BannerBtn: {
        background: commonColor.trans,
        borderRadius: "99px",
        padding: "0px 35px 0px 0px",
        boxShadow: "none",
        overflow: "hidden",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "1",
        position: "relative",
        gap: "10px",
        fontSize: {
            xs: FONT_SIZE.text16,
            sm: FONT_SIZE.text16,
            md: FONT_SIZE.text16,
            lg: FONT_SIZE.text16,
            xl: FONT_SIZE.text16,
        },
        textTransform: "capitalize",
        fontWeight: FONT_WEIGHT.SEMI_BOLD,
        lineHeight: "24px",
        "&:hover": {
            boxShadow: "none",
        },
       "&:hover .BannerBtnIcon": {
        transform: "translateX(10px)",
        },
        "&:hover .BannerBtnBG": {
            width: "100%",
            
        },
    },
    BannerBtnBG: {
        position: "absolute",
        top: "0",
        left: "0",
        height: "100%",
        width: "0%",
        background: commonColor.green,
        transition: "all 0.8s ease",
        zIndex: "-1",
        borderRadius: "99px",
    },
    BannerBtnIcon: {
        fontSize: FONT_SIZE.heading24,
        height:"60px",
        width:"60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        background: commonColor.green,
        color: commonColor.black,
        transition: "all 0.8s ease",
    },

    ScrollDownBtn : {
        position: "absolute",
        bottom: "30px",
        left: "50%",
        transform: "translateX(-50%)",
        background: commonColor.whitetrans,
        color: commonColor.black,
        borderRadius: "50px",
        padding: "8px 16px",
        boxShadow: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        fontSize: FONT_SIZE.text12,
        textTransform: "capitalize",
        fontWeight: FONT_WEIGHT.MEDIUM,
        lineHeight: "20px",
        border: `1px solid ${commonColor.blacktrans}`,
    },
    ScrollDownIcon: {
        fontSize: FONT_SIZE.heading24,
        color: commonColor.black,
    },











};
