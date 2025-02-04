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
                height: {
                    xs: '15px',
                    sm: '15px',
                    md: '25px',
                    lg: '25px',
                    xl: '25px',
                },
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
                    height: {
                        xs: '3px',
                        sm: '3px',
                        md: '5px',
                        lg: '5px',
                        xl: '5px',
                    },
                    background: arrowColor,
                    borderRadius: '20px',
                    overflow: 'hidden',
                    position: 'absolute',
                    top: {
                        xs: '2px',
                        sm: '2px',
                        md: '3px',
                        lg: '3px',
                        xl: '3px',
                        
                    },
                    right: {
                        xs: '-1px',
                        sm: '-1px',
                        md: '-1px',
                        lg: '-1px',
                        xl: '-1px',
                    },
                    transform: {
                        xs: 'rotate(25deg)',
                        sm: 'rotate(25deg)',
                        md: 'rotate(45deg)',
                        lg: 'rotate(45deg)',
                        xl: 'rotate(45deg)',
                    },
                }}
            ></Box>
            <CustomProgress progressClass={progressClass} progressValue={progressValue} />
            <Box
                sx={{
                    width: '20px',
                    height: {
                        xs: '3px',
                        sm: '3px',
                        md: '5px',
                        lg: '5px',
                        xl: '5px',
                    },
                    background: arrowColor,
                    borderRadius: '20px',
                    overflow: 'hidden',
                    position: 'absolute',
                    bottom: {
                        xs: '2px',
                        sm: '2px',
                        md: '3px',
                        lg: '3px',
                        xl: '3px',
                    },
                    right: {
                        xs: '-1px',
                        sm: '-1px',
                        md: '-1px',
                        lg: '-1px',
                        xl: '-1px',
                    },
                    transform: {
                        xs: 'rotate(-25deg)',
                        sm: 'rotate(-25deg)',
                        md: 'rotate(-45deg)',
                        lg: 'rotate(-45deg)',
                        xl: 'rotate(-45deg)',
                    },
                }}
            ></Box>
        </Box>
    )
}