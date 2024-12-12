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
                backgroundColor: "rgba(0,0,0,0.5)",
                zIndex: 9999,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backdropFilter: "blur(20px)"
            }}
        >
            <CircularProgress color="light" />
        </Box>
    )
}