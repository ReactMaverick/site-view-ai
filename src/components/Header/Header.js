"use client";
import { Box, Button, Container, Typography } from "@mui/material";
import styles from "./Header.module.css";
import { useEffect, useRef, useState } from "react";
import { MUIStyle } from "./MUIStyle";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { LOGO, LOGOFTR } from "@/values/Constants/ImageConstants";
import { commonColor } from "@/values/Colors/CommonColor";

export default function Header() {
  const headerRef = useRef(null); // Create a ref for the header element
  const [isSticky, setIsSticky] = useState(false); // State to track sticky behavior
  const [isActiveMenuVisible, setIsActiveMenuVisible] = useState(false);
  const [pathName, setPathName] = useState("");
  /* global window */
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsSticky(scrollY > 100); // Add sticky class if scrolled past 200px
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
  }, []);
  /* global window */
  useEffect(() => {
    setPathName(window.location.pathname);
  }, []);

  // console.log("pathName", pathName);

  return (
    <Box
      ref={headerRef}
      className={isSticky ? styles.stickyHeader : ""}
      sx={MUIStyle.HeaderMain}
    >
      <Container maxWidth="xl">
        <Box sx={MUIStyle.HeaderInner}>
          <Box sx={MUIStyle.HeaderLogoBox}>
            <Link href="/">
              <Box
                sx={MUIStyle.logoImage}
                component={"img"}
                src={LOGO}
                alt="Logo"
              />
            </Link>
          </Box>
          <Box sx={MUIStyle.menuBox}>
            <Box
              sx={MUIStyle.menuBtn}
              onClick={() => setIsActiveMenuVisible(!isActiveMenuVisible)}
            >
              <Icon icon="heroicons:bars-3-bottom-right-16-solid" />
            </Box>
            <Box
              className={
                isActiveMenuVisible ? styles.activeMenu : styles.inactiveMenu
              }
              sx={MUIStyle.HeaderMenuBox}
            >
              <Box sx={MUIStyle.HeadermobInner}>
                <Box sx={MUIStyle.HeaderMobLogoBox}>
                  <Link href="/">
                    <Box
                      component={"img"}
                      src={LOGOFTR}
                      alt="logo"
                      sx={MUIStyle.LogoImgMob}
                    />
                  </Link>
                  <Box
                    sx={MUIStyle.menuCloseBtn}
                    onClick={() => setIsActiveMenuVisible(!isActiveMenuVisible)}
                  >
                    <Icon icon="charm:cross" />
                  </Box>
                </Box>
                <Box component={"ul"} sx={MUIStyle.HEaderMenu}>
                  <Box component={"li"} sx={MUIStyle.HEaderMenuLi}>
                    <Link
                      className={
                        "headerMenu" + (pathName === "/" ? " active" : "")
                      }
                      href="/"
                    >
                      <Typography component={"p"} sx={MUIStyle.HeaderMenuBtn}>
                        Home
                      </Typography>
                    </Link>
                  </Box>
                  <Box component={"li"} sx={MUIStyle.HEaderMenuLi}>
                    <Link
                      className={
                        "headerMenu" +
                        (pathName === "/Why-siteview" ? " active" : "")
                      }
                      href="/aboutUs"
                    >
                      <Typography component={"p"} sx={MUIStyle.HeaderMenuBtn}>
                        Why SiteView
                      </Typography>
                    </Link>
                  </Box>
                  <Box component={"li"} sx={MUIStyle.HEaderMenuLi}>
                    <Link
                      className={
                        "headerMenu" +
                        (pathName === "/our-tech" ? " active" : "")
                      }
                      href="/service"
                    >
                      <Typography component={"p"} sx={MUIStyle.HeaderMenuBtn}>
                        Our Tech
                      </Typography>
                    </Link>
                  </Box>
                  <Box component={"li"} sx={MUIStyle.HEaderMenuLi}>
                    <Link
                      className={
                        "headerMenu" + (pathName === "/blogs" ? " active" : "")
                      }
                      href="/caseStudy"
                    >
                      <Typography component={"p"} sx={MUIStyle.HeaderMenuBtn}>
                        Blogs
                      </Typography>
                    </Link>
                  </Box>
                  <Box component={"li"} sx={MUIStyle.HEaderMenuLi}>
                    <Link
                      className={
                        "headerMenu" + (pathName === "/faq" ? " active" : "")
                      }
                      href="/contactUs"
                    >
                      <Typography component={"p"} sx={MUIStyle.HeaderMenuBtn}>
                        FAQ
                      </Typography>
                    </Link>
                  </Box>
                  <Box component={"li"} sx={MUIStyle.HEaderMenuLi}>
                    <Link
                      className={
                        "headerMenu" +
                        (pathName === "/contactUs" ? " active" : "")
                      }
                      href="/contactUs"
                    >
                      <Typography component={"p"} sx={MUIStyle.HeaderMenuBtn}>
                        Contact Us
                      </Typography>
                    </Link>
                  </Box>
                  <Button
                    sx={[
                      MUIStyle.HeaderBtn,
                      {
                        display: {
                          xs: "block",
                          sm: "block",
                          md: "none",
                          lg: "none",
                        },
                        marginLeft: "20px",
                        marginTop: "20px",
                      },
                    ]}
                  >
                    Login
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
          <Button
            sx={[
              MUIStyle.HeaderBtn,
              {
                display: {
                  xs: "none",
                  sm: "none",
                  md: "block",
                  lg: "block",
                },
              },
            ]}
          >
            Login{" "}
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
