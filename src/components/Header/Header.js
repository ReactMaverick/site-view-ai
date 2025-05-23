"use client";
import { Box, Button, Container, debounce, Typography } from "@mui/material";
import styles from "./Header.module.css";
import { useEffect, useRef, useState } from "react";
import { MUIStyle } from "./MUIStyle";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { LOGO, LOGOFTR } from "@/values/Constants/ImageConstants";
import { commonColor } from "@/values/Colors/CommonColor";
import { usePathname } from "next/navigation";
import FullPageLoader from "../FullPageLoader/FullPageLoader";

const menuItems = [
  { label: "Home", path: "/home", theme: 'light', shouldRender: true },
  { label: "Why SitePace", path: "/why-site-pace", theme: 'light', shouldRender: true },
  { label: "Our Tech", path: "/our-tech", theme: 'dark', shouldRender: true },
  { label: "Pricing", path: "/pricing", theme: 'light', shouldRender: true },
  { label: "Blogs", path: "/blogs", theme: 'light', shouldRender: true },
  { label: "FAQ", path: "/faq", theme: 'light', shouldRender: true },
  { label: "Contact Us", path: "/contact-us", theme: 'light', shouldRender: true },
  { label: "Privacy Policy", path: "/privacy-policy", theme: 'light', shouldRender: false },
  { label: "Terms & Conditions", path: "/terms-conditions", theme: 'light', shouldRender: false },
  { label: "Cookie Policy", path: "/cookie-policy", theme: 'light', shouldRender: false },
  { label: "Blog Details", path: "/blog-details", theme: 'light', shouldRender: false },
];
export default function Header({ theme = "light" }) {

  const [isHeaderLoading, setIsHeaderLoading] = useState(true);

  const pathName = usePathname();

  const headerRef = useRef(null); // Create a ref for the header element
  const [isSticky, setIsSticky] = useState(false); // State to track sticky behavior
  const [isActiveMenuVisible, setIsActiveMenuVisible] = useState(false);
  const [activeMenu, setActiveMenu] = useState(null);
  // const [pathName, setPathName] = useState("");
  /* global window */
  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    const debounceScroll = debounce(handleScroll, 50);
    window.addEventListener("scroll", debounceScroll);

    return () => window.removeEventListener("scroll", debounceScroll);
  }, []);

  // console.log("pathName", pathName);

  useEffect(() => {
    const activeMenu = menuItems.find(item => pathName.includes(item.path));

    setActiveMenu(activeMenu);

    setIsHeaderLoading(false);
  }, [pathName])

  if (isHeaderLoading) {
    return <FullPageLoader />
  }


  return (
    <Box
      ref={headerRef}
      className={isSticky ? styles.stickyHeader : ""}
      sx={[MUIStyle.HeaderMain,
        // { borderColor: theme === "light" ? "#D6D6D6" : commonColor.white10, }
      ]}
    >
      <Container maxWidth="xl">
        <Box sx={MUIStyle.HeaderInner}>
          <Box sx={[MUIStyle.HeaderLogoBox, { opacity: isSticky ? 0 : 1 }]}>
            <Link href="/">
              <Box
                sx={MUIStyle.logoImage}
                component={"img"}
                src={activeMenu?.theme === "light" ? LOGO : LOGOFTR}
                alt="Logo"
              />
            </Link>
          </Box>
          {/* Desktop Menu */}
          <Box
            sx={[MUIStyle.menuBox, {
              display: {
                xs: "none",
                sm: "none",
                md: "block",
                lg: "block",
              },
            }]}
            className="headerInner"
          >
            <Box
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
                  {menuItems.map(({ label, path, shouldRender }, index) => shouldRender && (
                    <Box component="li" key={path} sx={MUIStyle.HeaderMenuLi}>
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
                    className={styles.loginButton}
                    onClick={() => {
                      window.open("https://user.sitepace.ai", "_blank");
                    }}
                  >
                    Login
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Mobile Menu Icon */}
          <Box sx={[MUIStyle.menuBox, {
            display: {
              xs: "block",
              sm: "block",
              md: "none",
              lg: "none",
            },
            borderRadius: "2.5rem",
          }]}
            className="headerInner_Mobile"
          >
            <Box
              sx={MUIStyle.menuBtn}
              onClick={() => setIsActiveMenuVisible(!isActiveMenuVisible)}
            >
              <Icon icon="heroicons:bars-3-bottom-right-16-solid" />
            </Box>
          </Box>

          {/* Mobile Menu */}
          <Box
            className={
              isActiveMenuVisible ? styles.activeMenu : styles.inactiveMenu
            }
            sx={[MUIStyle.HeaderMenuBox, {
              display: {
                xs: "block",
                sm: "block",
                md: "none",
                lg: "none",
              },
            }]}
            onClick={() => setIsActiveMenuVisible(!isActiveMenuVisible)}
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
                {menuItems.map(({ label, path, shouldRender }, index) => shouldRender && (
                  <Box component="li" key={path} sx={MUIStyle.HeaderMenuLi}>
                    <Link
                      className={
                        "headerMenu_Mobile" + (pathName === path ? " active" : "")
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
                          // (index === 0 || index === menuItems.length - 1) && {
                          //   padding: "15px 24px",
                          // },
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
                  className={styles.loginButton}
                  onClick={() => {
                    window.open("https://user.sitepace.ai", "_blank");
                  }}
                >
                  Login
                </Button>
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
            className={activeMenu?.theme === "light" ? styles.loginButtonLight : styles.loginButtonDark}
            onClick={() => {
              window.open("https://user.sitepace.ai", "_blank");
            }}
          >
            Login
          </Button>
        </Box>
      </Container>
    </Box>
  );
}
