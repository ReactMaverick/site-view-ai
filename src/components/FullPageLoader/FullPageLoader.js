import { commonColor } from "@/values/Colors/CommonColor";
import { LOGOFTR } from "@/values/Constants/ImageConstants";
import { Box, CircularProgress } from "@mui/material";

export default function FullPageLoader() {
    return (
        <Box
            sx={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                backgroundColor: "rgb(75 75 75 / 80%)",
                zIndex: 9999,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backdropFilter: "blur(20px)"
            }}
        >
            <Box
                component={"img"}
                src={LOGOFTR}
                alt="logo"
                sx={{
                    width: "200px",
                    height: "auto",
                    marginBottom: "20px",
                    filter: 'drop-shadow(4px 4px 10px rgb(0 0 0 / 50%))'
                }}
            />
            <CircularProgress
                style={{
                    color: commonColor.green
                }}
                size={25}
            />
        </Box>
    )
}