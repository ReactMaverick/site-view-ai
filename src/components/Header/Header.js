"use client";
import { Box, Button, Container, debounce, Typography } from "@mui/material";
import styles from "./Header.module.css";
import { useEffect, useRef, useState } from "react";
import { MUIStyle } from "./MUIStyle";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { LOGO, LOGOFTR } from "@/values/Constants/ImageConstants";
import { commonColor } from "@/values/Colors/CommonColor";

const menuItems = [
  { label: "Home", path: "/" },
  { label: "Why SiteView", path: "/why-site-view" },
  { label: "Our Tech", path: "/our-tech" },
  { label: "Blogs", path: "/blogs" },
  { label: "FAQ", path: "/faq" },
  { label: "Contact Us", path: "/contact-us" },
];
export default function Header({ theme = "light" }) {
  const headerRef = useRef(null); // Create a ref for the header element
  const [isSticky, setIsSticky] = useState(false); // State to track sticky behavior
  const [isActiveMenuVisible, setIsActiveMenuVisible] = useState(false);
  const [pathName, setPathName] = useState("");
  /* global window */
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    const debounceScroll = debounce(handleScroll, 50);
    window.addEventListener("scroll", debounceScroll);

    return () => window.removeEventListener("scroll", debounceScroll);
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
      sx={[MUIStyle.HeaderMain,
      { borderColor: theme === "light" ? "#D6D6D6" : commonColor.white10, }
      ]}
    >
      <Container maxWidth="xl">
        <Box sx={MUIStyle.HeaderInner}>
          <Box sx={[MUIStyle.HeaderLogoBox, { opacity: isSticky ? 0 : 1 }]}>
            <Link href="/">
              <Box
                sx={MUIStyle.logoImage}
                component={"img"}
                src={theme === "light" ? LOGO : LOGOFTR}
                alt="Logo"
              />
            </Link>
          </Box>
          <Box sx={MUIStyle.menuBox} className="headerInner">
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
                <Box
                  component="ul"
                  sx={[
                    MUIStyle.HEaderMenu,
                    {
                      background:
                        theme === "light"
                          ? commonColor.trans
                          : commonColor.white10,
                      borderRadius: "90px",
                    },
                  ]}
                >
                  {menuItems.map(({ label, path }, index) => (
                    <Box component="li" key={path} sx={MUIStyle.HEaderMenuLi}>
                      <Link
                        className={
                          "headerMenu" + (pathName === path ? " active" : "")
                        }
                        href={path}
                      >
                        <Typography
                          component="p"
                          sx={[
                            MUIStyle.HeaderMenuBtn,
                            {
                              color: {
                                xs: "white",
                                sm: "white",
                                md: theme === "light"
                                  ? commonColor.black
                                  : commonColor.white,
                                lg: theme === "light"
                                  ? commonColor.black
                                  : commonColor.white,
                              },
                            },
                            (index === 0 || index === menuItems.length - 1) && {
                              padding: "15px 24px",
                            },
                          ]}
                        >
                          {label}
                        </Typography>
                      </Link>
                    </Box>
                  ))}
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
                opacity: isSticky ? 0 : 1,
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
