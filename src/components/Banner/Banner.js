import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import { Talk3XIMG, TRUSTLOGO1, TRUSTLOGO2, TRUSTLOGO3, TRUSTLOGO4, TRUSTLOGO5, TRUSTLOGO6, VIDEOIMG } from "@/values/Constants/ImageConstants";
import { VideoFile } from "@mui/icons-material";
import { Icon } from "@iconify/react";

export default function Banner() {


    return (
        <Box sx={MUIStyle.BannerMain}>
            <Container maxWidth="xl">
                <Box sx={MUIStyle.BannerRow}>
                    <Box sx={MUIStyle.BannerContent}>
                        <Box sx={MUIStyle.BannerContentInner}>
                            <Typography variant="h1" sx={MUIStyle.BannerHeading}>
                                Generate more leads
                                with AI conversations
                                that convert.
                            </Typography>
                            <Typography variant="body1" sx={MUIStyle.BannerText}>
                                Collect 3x more leads on your website and over the phone. Our AI knows your business and has the sales experise to close like a pro.Get started now 100% risk-free!
                            </Typography>
                            <Box sx={MUIStyle.ConvertingFormBox}>
                                <Box component={"img"} src={Talk3XIMG} sx={MUIStyle.Input3Ximg} />
                                <Box sx={MUIStyle.ConvertingInputBox}>
                                    <TextField
                                        id="outlined-basic"
                                        placeholder="https://....."
                                        sx={MUIStyle.ConvertingInput}

                                    />
                                    <Button sx={MUIStyle.ConvertingBtn} variant="contained" size="large">
                                        Start Converting
                                    </Button>
                                </Box>
                                <Button sx={MUIStyle.CustomBtn} variant="contained" size="large">
                                    Book a Demo
                                </Button>
                            </Box>
                        </Box>
                        <Box sx={MUIStyle.VideoSec}>
                            <Button sx={MUIStyle.VideoBtn} variant="contained" size="large">
                                <Box sx={MUIStyle.VideoIcon}>
                                    <Icon icon="gravity-ui:play-fill" />
                                </Box>
                            </Button>
                            <Box src={VIDEOIMG} component={"img"} sx={MUIStyle.VideoImg} />
                        </Box>
                    </Box>

                </Box>

            </Container>
            <Box sx={MUIStyle.TrustSec}>
                <Container maxWidth="xl">
                    <Box sx={MUIStyle.TrustBox}>
                        <Typography variant="h3" sx={MUIStyle.TrustHeading}>
                            TRUSTED BY TEAMS AT
                        </Typography>
                        <Box sx={MUIStyle.TrustLogoBox}>
                            <Box component={"img"} src={TRUSTLOGO1} sx={MUIStyle.TrustLogo} />
                            <Box component={"img"} src={TRUSTLOGO2} sx={MUIStyle.TrustLogo} />
                            <Box component={"img"} src={TRUSTLOGO3} sx={MUIStyle.TrustLogo} />
                            <Box component={"img"} src={TRUSTLOGO4} sx={MUIStyle.TrustLogo} />
                            <Box component={"img"} src={TRUSTLOGO5} sx={MUIStyle.TrustLogo} />
                            <Box component={"img"} src={TRUSTLOGO6} sx={MUIStyle.TrustLogo} />
                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}