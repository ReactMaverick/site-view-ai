import { Box, Button, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import { Icon } from '@iconify/react';
import Link from "next/link";
import { FTRMARK, LOGOFTR } from "@/values/Constants/ImageConstants";

export default function FooterSec() {

    return (
        <Box sx={MUIStyle.FooterSec}>
            <Box component={"img"} src={FTRMARK} sx={MUIStyle.ftrwaternark}/>
            <Box sx={MUIStyle.MainFooterBox}>
                <Container maxWidth="xl">
                    <Box sx={MUIStyle.FooterRow}>
                        <Box sx={MUIStyle.FooterLogoBox}>
                            <Box component={"img"} src={LOGOFTR} alt="side Image" sx={MUIStyle.WorkImg} />
                            <Typography variant="h2" sx={MUIStyle.FooterLogoText}>
                            “If the whole construction project can be shown digitally, and available at your fingertips. then the possibilities are immense”
                            </Typography>
                            <Box sx={MUIStyle.FooterSocialBox}>
                            <Button sx={MUIStyle.FooterSocialButton}>
                                <Icon icon="hugeicons:linkedin-01" color="#fff" width="30" height="30" />
                            </Button>
                            <Button sx={MUIStyle.FooterSocialButton}>
                                <Icon icon="lucide:instagram" color="#fff" width="30" height="30" />
                            </Button>
                            <Button sx={MUIStyle.FooterSocialButton}>
                                <Icon icon="hugeicons:new-twitter" color="#fff" width="30" height="30" />
                            </Button>
                            </Box>
                        </Box>
                        <Box sx={MUIStyle.FooterMenuBoxOuter}>
                        <Box sx={MUIStyle.FooterMenuBox}>
                            <Typography variant="h3" sx={MUIStyle.FooterMenuTitleText}>About</Typography>
                            <Box sx={MUIStyle.FooterMenuUl}>
                                <Box sx={MUIStyle.FooterMenuLi}>
                                    <Link href="/">
                                        <Typography sx={MUIStyle.FooterMenuText}>Home</Typography>
                                    </Link>
                                </Box>
                                <Box sx={MUIStyle.FooterMenuLi}>
                                    <Link href="/">
                                        <Typography sx={MUIStyle.FooterMenuText}>Why SiteView</Typography>
                                    </Link>
                                </Box>
                                <Box sx={MUIStyle.FooterMenuLi}>
                                    <Link href="/">
                                        <Typography sx={MUIStyle.FooterMenuText}>Our Tech</Typography>
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                        <Box sx={MUIStyle.FooterMenuBox}>
                            <Typography variant="h3" sx={MUIStyle.FooterMenuTitleText}>Company</Typography>
                            <Box sx={MUIStyle.FooterMenuUl}>
                                <Box sx={MUIStyle.FooterMenuLi}>
                                    <Link href="/">
                                        <Typography sx={MUIStyle.FooterMenuText}>Blogs</Typography>
                                    </Link>
                                </Box>
                                <Box sx={MUIStyle.FooterMenuLi}>
                                    <Link href="/">
                                        <Typography sx={MUIStyle.FooterMenuText}>FAQ</Typography>
                                    </Link>
                                </Box>
                                <Box sx={MUIStyle.FooterMenuLi}>
                                    <Link href="/">
                                        <Typography sx={MUIStyle.FooterMenuText}>Contact Us</Typography>
                                    </Link>
                                </Box>
                              
                            </Box>
                        </Box>
                        </Box>
                      
                    </Box>
                    <Box sx={MUIStyle.FooterCopyRightRow}>
                        <Typography variant="h3" sx={MUIStyle.FooterCopyRightText}>
                            © 2021 SiteView. All Rights Reserved.
                        </Typography>
                       
                        </Box>
                </Container>
            </Box>
        </Box>
    );
}