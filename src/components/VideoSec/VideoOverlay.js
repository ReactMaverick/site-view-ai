import { Box } from "@mui/material";

export default function VideoOverlay() {
    return (
        <Box
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: 'radial-gradient(circle, rgba(0, 0, 0, 0) 0%, rgb(0 0 0 / 70%) 40%, rgb(0 0 0 / 90%) 60%, rgb(0 0 0) 80%, rgb(0 0 0) 100%)',
                pointerEvents: 'none', // Ensure the overlay does not interfere with interactions
                transform: 'scale(2)',
            }}
        />
    )
}