import { Box, Button, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import { Icon } from "@iconify/react";

export default function Banner() {

    return (
        <Box sx={MUIStyle.BannerMain}>
            <Container maxWidth="xl">
                <Box sx={MUIStyle.BannerRow}>
                    <Box sx={MUIStyle.BannerContent}>
                        <Box sx={MUIStyle.BannerContentInner}>
                            <Typography variant="span" sx={MUIStyle.BannerTopHeading}>New revolution for construction</Typography>
                            <Typography variant="h1" sx={MUIStyle.BannerHeading}> Connected Construction </Typography>
                            <Typography variant="body1" sx={MUIStyle.BannerText}>
                            See Further, Save More. Autopilot your project.
                            </Typography>
                              
                                <Button sx={MUIStyle.BannerBtn} variant="contained" size="large">
                                    
                                    <Box component={"span"} className="BannerBtnIcon" sx={MUIStyle.BannerBtnIcon}>
                                    <Icon icon="flowbite:arrow-right-outline" />
                                    </Box>
                                Try Now
                                <Box className="BannerBtnBG" sx={MUIStyle.BannerBtnBG}/>
                                </Button>
                        </Box>
                     
                    </Box>

                </Box>

            </Container>
                <Button sx={MUIStyle.ScrollDownBtn} variant="text" size="large">
                    <Box component={"span"} className="ScrollDownIcon" sx={MUIStyle.ScrollDownIcon}>
                    <Icon icon="bi:mouse" />
                    </Box>
                    Scroll Down
                </Button>
          
        </Box>
    );
}