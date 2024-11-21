import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";
import { BANNER } from "@/values/Constants/ImageConstants";

export const MUIStyle = {
    BannerMain: {
        background: `url(${BANNER})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        // padding: {
        //     xs: "100px 0",
        //     sm: "100px 0",
        //     md: "100px 0",
        //     lg: "175px 0",
        //     xl: "175px 0",
        // },
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
            sm: "100%",
            md: "100%",
            lg: "50%",
            xl: "50%",
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
            md: FONT_SIZE.heading40,
            lg: FONT_SIZE.heading64,
            xl: FONT_SIZE.heading64,
        },
        textAlign: 'center',
        textTransform: "uppercase",
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
        color: commonColor.black,
        borderRadius: "10px",
        padding: "18px 24px",
        boxShadow: "none",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        fontSize: {
            xs: FONT_SIZE.text16,
            sm: FONT_SIZE.text16,
            md: FONT_SIZE.text16,
            lg: FONT_SIZE.text16,
            xl: FONT_SIZE.text16,
        },
        textTransform: "capitalize",
        fontWeight: FONT_WEIGHT.MEDIUM,
        lineHeight: "24px",
        "&:hover": {
            boxShadow: "none",
        },
       "&:hover .BannerBtnIcon": {
            background: commonColor.black,
            color: commonColor.green,
        },
    },
    BannerBtnIcon: {
        fontSize: FONT_SIZE.heading24,
        height:"48px",
        width:"48px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        background: commonColor.green,
        color: commonColor.black,
    },














};
