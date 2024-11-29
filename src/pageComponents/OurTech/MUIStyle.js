import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE } from "@/values/Constants/FontConstants";
import { CARD1, TITLEBG } from "@/values/Constants/ImageConstants";

export const MUIStyle = {
    welcomeSec: {
        padding: "86px 0",
    },
    welcomeInner: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    },
    welcomeContentBox: {
        maxWidth: "625px",
        textAlign: "center",
    },
    welcomeSubTitleBg: {
        backgroundImage: `url(${TITLEBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "5px 128.5px",
        display: "inline-block",
        marginBottom: "36px",
    },
    welcomeTitle: {
        color: commonColor.yellow,
        fontWeight: "700",
        fontSize: FONT_SIZE.heading42,
        position: "relative",
    },
    welcomepara: {
        color: commonColor.CaptionColor,
        fontWeight: "400",
        fontSize: FONT_SIZE.text20,
    },
    welcomeBoxOuter: {
        backgroundImage: `url(${CARD1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "start",
        padding: "24px",
        maxWidth: "300px",
        minHeight: "340px",
        borderRadius: "24px",
        border: `1px solid ${commonColor.cardBorderColor}`,
        boxShadow: "0px 18px 42px rgb(0 0 0 / 20%)",
    },
    welcomecardImg: {
        width: "85px",
        height: "85px",
        objectFit: "contain",
    },
    welcomecardTitle: {
        color: commonColor.darkBlue,
        fontWeight: "700",
        fontSize: FONT_SIZE.heading24,
    },
    welcomecardContent: {
        marginTop: "16px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
    },
    welcomecardContentRow: {
        display: "flex",
        alignItems: "center",
        gap: "10px",
    },
    welcomecardDivider: {
        width: "54px",
        height: "2px",
        backgroundColor: commonColor.blue,
    },
    welcomeBoxsRow: {
        display: "flex",
        justifyContent: "space-between",
        gap: "30px",
        maxWidth: "1170px",
        margin: "60px auto 0",
    },
    welcomecardpara: {
        color: commonColor.CaptionColor,
        fontWeight: "400",
        fontSize: FONT_SIZE.text16,
    }





};