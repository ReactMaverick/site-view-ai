import { Box } from "@mui/material";
import CustomProgress from "./CustomProgress";

export default function CustomProgressArrow({
    progressClass = "progress-1",
    progressValue = 0,
    arrowColor = "#ccc",
    opacity = 1,
}) {
    return (
        <Box
            className="progress-arrows-container"
            sx={{
                position: 'relative',
                width: '100px',
                height: '25px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                opacity: opacity,
                animation: opacity === 0 ? 'fadeOut .5s ease' : 'fadeIn 1.5s ease',
            }}
        >
            <Box
                // className={"progress-bar" + " " + progressClass}
                sx={{
                    width: '20px',
                    height: '5px',
                    background: arrowColor,
                    borderRadius: '20px',
                    overflow: 'hidden',
                    position: 'absolute',
                    top: '3px',
                    right: '-1px',
                    transform: 'rotate(45deg)',
                }}
            ></Box>
            <CustomProgress progressClass={progressClass} progressValue={progressValue} />
            <Box
                sx={{
                    width: '20px',
                    height: '5px',
                    background: arrowColor,
                    borderRadius: '20px',
                    overflow: 'hidden',
                    position: 'absolute',
                    bottom: '3px',
                    right: '-1px',
                    transform: 'rotate(-45deg)',
                }}
            ></Box>
        </Box>
    )
}