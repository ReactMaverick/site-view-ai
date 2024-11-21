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
        padding: {
            xs: "100px 0 0px",
            sm: "100px 0 0px",
            md: "100px 0 0px",
            lg: "175px 0 0px",
            xl: "175px 0 0px",
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
    },
    BannerContent: {
        width: {
            xs: "100%",
            sm: "100%",
            md: "100%",
            lg: "80%",
            xl: "80%",
        },

    },
    BannerContentInner: {
        display: "flex",
        justifyContent: "center",
        alignItems: 'center',
        flexDirection: "column",
        gap: "10px",
    },
    BannerHeading: {
        fontSize: {
            xs: FONT_SIZE.heading40,
            sm: FONT_SIZE.heading40,
            md: FONT_SIZE.heading40,
            lg: FONT_SIZE.heading64,
            xl: FONT_SIZE.heading64,
        },
        padding: {
            xs: "0",
            sm: "0",
            md: "0",
            lg: "0 180px",
            xl: "0 180px",
        },
        textAlign: 'center',
        fontWeight: FONT_WEIGHT.BLACK,
        color: commonColor.talkDarkblue1,
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
            xs: FONT_SIZE.text20,
            sm: FONT_SIZE.text20,
            md: FONT_SIZE.text20,
            lg: FONT_SIZE.heading24,
            xl: FONT_SIZE.heading24,
        },
        color: commonColor.tallkLightBlue,
        fontWeight: FONT_WEIGHT.REGULAR,
        marginBottom: "20px",
        textAlign: 'center',
        padding: {
            xs: "0",
            sm: "0",
            md: "0",
            lg: "0 7px",
            xl: "0 77px",
        },
    },

    CustomBtn: {
        background: commonColor.tallkBlue,
        color: commonColor.white,
        borderRadius: "10px",
        padding: "18px 24px",
        fontSize: {
            xs: FONT_SIZE.text16,
            sm: FONT_SIZE.text16,
            md: FONT_SIZE.text18,
            lg: FONT_SIZE.text18,
            xl: FONT_SIZE.text18,
        },
        fontWeight: FONT_WEIGHT.BOLD,
        lineHeight: "24px",
    },

    ConvertingFormBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "stretch",
        flexDirection: {
            xs: "column",
            sm: "column",
            md: "row",
            lg: "row",
        },
        gap: "50px",
        paddingTop: "50px",
        position: "relative",
        width: "100%",
    },
    Input3Ximg: {
        width: "100%",
        maxWidth: "150px",
        position: "absolute",
        top: "-10px",
        right: {
            xs: "0",
            sm: "0",
            md: "30%",
            lg: "30%",
        },
    },
    ConvertingInputBox: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "stretch",
        gap: "20px",
        width: "100%",
        maxWidth: "600px",
        padding: "7px",
        background: commonColor.white,
        borderRadius: "10px",
        boxShadow: "0px 16px 21.6px 2px rgba(68, 108, 140, 0.26)",
        border: "1px solid #D4E0ED",
    },
    ConvertingInput: {
        flex: {
            xs: "1",
            sm: "1",
            md: "1",
            lg: "2",
            xl: "2",
        },
        padding: "0px",
        borderRadius: "10px",
        border: "none !important",
        boxShadow: "none",
        fontSize: {
            xs: FONT_SIZE.text16,
            sm: FONT_SIZE.text16,
            md: FONT_SIZE.text18,
            lg: FONT_SIZE.text18,
            xl: FONT_SIZE.text18,
        },
        fontWeight: FONT_WEIGHT.MEDIUM,
        lineHeight: "24px",
        "&::placeholder": {
            color: commonColor.tallkLightBlue,
            opacity: '1 !important',
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                border: 'none',
            },
            "&:hover fieldset": {
                border: 'none',
            },
            "&.Mui-focused fieldset": {
                border: 'none',
            },
        },

    },
    ConvertingBtn: {
        flex: "1",
        background: commonColor.tallkBgBlue,
        color: commonColor.tallkBlue,
        borderRadius: "10px",
        padding: "10px 16px",
        fontSize: {
            xs: FONT_SIZE.text16,
            sm: FONT_SIZE.text16,
            md: FONT_SIZE.text18,
            lg: FONT_SIZE.text18,
            xl: FONT_SIZE.text18,
        },
        fontWeight: FONT_WEIGHT.MEDIUM,
        lineHeight: "24px",
        boxShadow: "none",
    },

    VideoSec: {
        marginTop: "80px",
        position: "relative",
        width: "100%",
        maxHeight: "600px",
        height: "100%",
        overflow: "hidden",
        borderRadius: "20px",
    },
    VideoBtn: {
        position: "absolute",
        top: "50%",
        left: "50%",
        display: "flex",
        padding: "0",
        justifyContent: "center",
        alignItems: "center",
        border: `2px solid ${commonColor.tallkBlue}`,
        background: commonColor.Trans,
        transform: "translate(-50%, -50%)",
        borderRadius: "50%",
        minWidth: "90px",
        width: "90px",
        height: "90px",
        boxShadow: "none",
        "&:hover": {
            background: commonColor.Trans,
            boxShadow: "none",
        },
    },
    VideoIcon: {
        fontSize: FONT_SIZE.heading28,
        color: commonColor.white,
        background: commonColor.tallkBlue,
        borderRadius: "50%",
        height: "70px",
        width: "70px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",

    },
    VideoImg: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
    },
    TrustSec: {
        background: commonColor.trustTeamBG,
        width: "100%",
        padding: "120px 0 80px",
        marginTop: "-50px",
    },

    TrustBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "50px",

    },
    TrustHeading: {
        fontSize: {
            xs: FONT_SIZE.text20,
            sm: FONT_SIZE.text20,
            md: FONT_SIZE.heading24,
            lg: FONT_SIZE.heading24,
            xl: FONT_SIZE.heading24,
        },
        color: commonColor.tallkDarkBlue,
        fontWeight: FONT_WEIGHT.BOLD,
        textAlign: "center",
    },
    TrustLogoBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        flexWrap: "wrap",
    },
    TrustLogo: {
        width: {
            xs: "95px",
            sm: "95px",
            md: "150px",
            lg: "200px",
            xl: "200px",
        },
        height: "auto",
        objectFit: "contain",
    },














};
