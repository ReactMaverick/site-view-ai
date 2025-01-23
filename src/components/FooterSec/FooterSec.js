import { Box, Button, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import { Icon } from '@iconify/react';
import Link from "next/link";
import { FTRMARK, LOGOFTR } from "@/values/Constants/ImageConstants";

export default function FooterSec() {

    return (
        <Box sx={MUIStyle.FooterSec}>
            <Box component={"img"} src={FTRMARK} sx={MUIStyle.ftrwaternark} />
            <Box sx={MUIStyle.MainFooterBox}>
                <Container maxWidth="xl">
                    <Box sx={MUIStyle.FooterRow}>
                        <Box sx={MUIStyle.FooterLogoBox}>
                            <Box component={"img"} src={LOGOFTR} alt="side Image" sx={MUIStyle.WorkImg} />
                            <Typography variant="h2" sx={MUIStyle.FooterLogoText}>
                                “If the whole construction project can be shown digitally, and available at your fingertips, then the possibilities are immense”
                            </Typography>
                            <Box sx={MUIStyle.FooterSocialBox}>
                                <Button sx={MUIStyle.FooterSocialButton}>
                                    <Icon icon="hugeicons:linkedin-01" />
                                </Button>
                                <Button sx={MUIStyle.FooterSocialButton}>
                                    <Icon icon="lucide:instagram" />
                                </Button>
                                <Button sx={MUIStyle.FooterSocialButton}>
                                    <Icon icon="hugeicons:new-twitter" />
                                </Button>
                            </Box>
                        </Box>
                        <Box sx={MUIStyle.FooterMenuBoxOuter}>
                            <Box sx={MUIStyle.FooterMenuBox}>
                                <Typography variant="h3" sx={MUIStyle.FooterMenuTitleText}>About</Typography>
                                <Box component={"ul"} sx={MUIStyle.FooterMenuUl}>
                                    <Box component={"li"} sx={MUIStyle.FooterMenuLi}>
                                        <Link href="/">
                                            <Typography sx={MUIStyle.FooterMenuText}>Home</Typography>
                                        </Link>
                                    </Box>
                                    <Box component={"li"} sx={MUIStyle.FooterMenuLi}>
                                        <Link href="/why-site-pace">
                                            <Typography sx={MUIStyle.FooterMenuText}>Why SitePace</Typography>
                                        </Link>
                                    </Box>
                                    <Box component={"li"} sx={MUIStyle.FooterMenuLi}>
                                        <Link href="/our-tech">
                                            <Typography sx={MUIStyle.FooterMenuText}>Our Tech</Typography>
                                        </Link>
                                    </Box>
                                </Box>
                            </Box>
                            <Box sx={MUIStyle.FooterMenuBox}>
                                <Typography variant="h3" sx={MUIStyle.FooterMenuTitleText}>Company</Typography>
                                <Box component={"ul"} sx={MUIStyle.FooterMenuUl}>
                                    <Box component={"li"} sx={MUIStyle.FooterMenuLi}>
                                        <Link href="/blogs">
                                            <Typography sx={MUIStyle.FooterMenuText}>Blogs</Typography>
                                        </Link>
                                    </Box>
                                    <Box component={"li"} sx={MUIStyle.FooterMenuLi}>
                                        <Link href="/faq">
                                            <Typography sx={MUIStyle.FooterMenuText}>FAQ</Typography>
                                        </Link>
                                    </Box>
                                    <Box component={"li"} sx={MUIStyle.FooterMenuLi}>
                                        <Link href="/contact-us">
                                            <Typography sx={MUIStyle.FooterMenuText}>Contact Us</Typography>
                                        </Link>
                                    </Box>

                                </Box>
                            </Box>
                        </Box>

                    </Box>
                    <Box sx={MUIStyle.FooterCopyRightRow}>
                        <Typography variant="p" sx={MUIStyle.FooterCopyRightText}>
                            © All Right Reserved by SitePace.ai 2024.
                        </Typography>
                        <Box sx={MUIStyle.FooterPolicyBox}>
                            <Link href="/privacy-policy">
                                <Typography sx={MUIStyle.FooterPolicyText}>Privacy Policy</Typography>
                            </Link>
                            <Typography sx={MUIStyle.FooterPolicyDivider}>|</Typography>
                            <Link href="/terms-conditions">
                                <Typography sx={MUIStyle.FooterPolicyText}>Terms & Conditions</Typography>
                            </Link>
                            <Typography sx={MUIStyle.FooterPolicyDivider}>|</Typography>
                            <Link href="/cookie-policy">
                                <Typography sx={MUIStyle.FooterPolicyText}>Cookie Policy</Typography>
                            </Link>

                        </Box>
                    </Box>
                </Container>
            </Box>
        </Box>
    );
}