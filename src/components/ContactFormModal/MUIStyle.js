import { commonColor } from "@/values/Colors/CommonColor";
import { FONT_SIZE, FONT_WEIGHT } from "@/values/Constants/FontConstants";

const PricingQuoteInputItem = {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    width: "100%",
    "& .MuiOutlinedInput-root": {
        borderRadius: "100px !important",
        borderColor: commonColor.grey600,
        "& fieldset": {
            borderColor: commonColor.grey600,
        },
        "&:hover fieldset": {
            borderColor: commonColor.grey600,
        },
        "&.Mui-focused fieldset": {
            borderColor: commonColor.grey600,
        },
        "&.Mui-focused": {
            borderColor: commonColor.grey600,
        },
    },
    "& .MuiInputBase-input": {
        padding: "2px 20px 3px",
        minHeight: "42px",
        backgroundColor: commonColor.white,
        color: commonColor.black,
        fontSize: FONT_SIZE.text16,
        lightHeight: "1.5em",
        fontWeight: FONT_WEIGHT.MEDIUM,
        width: "100%",
        borderColor: commonColor.grey600,
        borderRadius: "50px",
        "&::placeholder": {
            color: commonColor.grey,
            fontSize: FONT_SIZE.text16,
            fontWeight: FONT_WEIGHT.MEDIUM,
            lineHeight: "1.5em",
            opacity: 1,
        },
    },
    "& .MuiSelect-select": {
        display: "flex",
        alignItems: "center",
    },
}

export const MUIStyle = {
    modalOuterBox: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
    },
    PricingQuoteInputItem,
    PricingQuoteInputItemMulti: {
        ...PricingQuoteInputItem,
        "& .MuiOutlinedInput-root": {
            ...PricingQuoteInputItem["& .MuiOutlinedInput-root"],
            borderRadius: "20px !important",
        },
        "& .MuiInputBase-input": {
            ...PricingQuoteInputItem["& .MuiInputBase-input"],
            padding: "5px 20px",
            lineHeight: "normal",
        },
        marginBottom: "10px",
        borderRadius: "20px !important",
    },
    PricingQuoteInputLabel: {
        fontSize: FONT_SIZE.text16,
        lineHeight: "1.5em",
        fontWeight: FONT_WEIGHT.MEDIUM,
        color: commonColor.grey,
        textAlign: "left",
        paddingLeft: "5px",
        transition: "all 0.5s ease-in-out",
        "span": {
            color: commonColor.red,
        },
    },
    commentBox: {
       "& .css-w4nesw-MuiInputBase-input-MuiOutlinedInput-input": {
           padding: "1px 4px",
       }
    },
    modalBox: {
        background: '#fff',
        borderRadius: {
            xs: '0px',
            sm: '0px',
            md: '24px',
            lg: '24px',
        },
        boxShadow: '0 8px 32px rgba(0,0,0,0.18)',
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        width: { xs: '100vh', sm: '100vh', md: '800px', lg: '900px' },
        maxWidth: '98vw',
        maxHeight: '98vh',
        overflowY: 'scroll',
        "&::-webkit-scrollbar": {
            display: "none", // Chrome, Safari, and Opera
        },
        position: 'relative',
    },
    closeIcon: {
        cursor: "pointer",
        position: "absolute",
        top: "24px",
        right: "24px",
        width: "32px",
        height: "32px",
        zIndex: 2,
    },
    modalContent: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: { xs: '18px', md: '24px' },
        paddingTop: { xs: '100px',sm:'100px', md: '24px' },
        background: '#fff',
        overflowY: 'scroll',
        "&::-webkit-scrollbar": {
            display: "none", // Chrome, Safari, and Opera
        },
    },
    letsTalkButton: {
        background: '#eafd6b',
        color: '#222',
        borderRadius: '20px',
        fontWeight: 600,
        fontSize: '1.15rem',
        width: '100%',
        mt: 2,
        py: 1.5,
        boxShadow: 'none',
        '&:hover': {
            background: '#d4f000',
            color: '#222',
            boxShadow: 'none',
        },
    },
    successMessage: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    successMessageIcon: {
        width: {
            xs: "72px",
            sm: "72px",
            md: "72px",
            lg: "72px",
            xl: "72px",
        },
        height: {
            xs: "72px",
            sm: "72px",
            md: "72px",
            lg: "72px",
            xl: "72px",
        },
        marginBottom: "1.5rem",
    },
    successMessageText: {
        color: commonColor.white,
        fontSize: {
            xs: FONT_SIZE.text14,
            sm: FONT_SIZE.text14,
            md: FONT_SIZE.text16,
            lg: FONT_SIZE.text16,
        },
        fontWeight: FONT_WEIGHT.MEDIUM,
        textAlign: "center",
    },
    imageSection: {
        padding: { xs: '0', md: '12px' },
        display: { xs: 'none', md: 'flex' },
        alignItems: 'center',
        justifyContent: 'center',
        background: 'white',
        minWidth: '320px',
        maxWidth: '385px',
        width: '100%',
        position: 'relative',
    },
    
}