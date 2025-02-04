import { commonColor } from "@/values/Colors/CommonColor";
import { Box } from "@mui/material";

export default function CustomProgress({
    progressClass = "progress-0",
    progressValue = 0,
    progressColor = commonColor.green,
    opacity = 1,
}) {
    return (
        <Box
            className="progress-container"
            sx={{
                position: 'relative',
                width: '100px',
                height: {
                    xs: '3px',
                    sm: '3px',
                    md: '5px',
                    lg: '5px',
                    xl: '5px',
                },
                background: '#ccc',
                borderRadius: '20px',
                overflow: 'hidden',
                opacity: opacity,
                animation: opacity === 0 ? 'fadeOut .5s ease' : 'fadeIn 1.5s ease',
            }}
        >
            <Box
                className={"progress-bar" + " " + progressClass}
                sx={{
                    width: progressValue + '%',
                    height: '100%',
                    background: progressColor,
                }}
            ></Box>
        </Box>
    )
}