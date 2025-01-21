import { Box, Button, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import { Icon } from "@iconify/react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { setupThreeJS, stopAnimation } from "./BannerThreeJS";
import { useGSAP } from "@gsap/react";
import { gsapAnimation } from "./BannerScroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ContactFormModal from "../ContactFormModal/ContactFormModal";

export default function BannerThree({
    setIsThreeJSLoading
}) {

    const canvasWrapperRef = useRef(null);
    const canvasRef = useRef(null);
    const topLayerFirstRef = useRef(null);

    const [camera, setCamera] = useState(null);
    const [scene, setScene] = useState(null);
    const [renderer, setRenderer] = useState(null);

    // Modal
    const [isModalOpen, setIsModalOpen] = useState(false);

    useLayoutEffect(() => {
        gsap.registerPlugin(useGSAP, ScrollTrigger);
    }, []);

    useGSAP(() => {
        if (!topLayerFirstRef.current || !camera || !scene || !renderer) return;

        gsapAnimation({
            canvasWrapperRef,
            topLayerFirstRef,
            gsap,
            ScrollTrigger,
            camera,
            scene,
            renderer
        });

    }, { dependencies: [topLayerFirstRef.current, camera, scene, renderer] });

    useEffect(() => {

        // Initialize ThreeJS Scene
        const { camera, scene, renderer } = setupThreeJS({
            canvasWrapperRef,
            canvasRef,
            topLayerFirstRef
        });

        setCamera(camera);
        setScene(scene);
        setRenderer(renderer);

        // console.log("ThreeJS Scene Initialized");

        setIsThreeJSLoading(false);


    }, []);

    return (
        <>
            <Box className="canvasWrapper" ref={canvasWrapperRef}>
                <canvas id="threeCanvas" ref={canvasRef} />
            </Box>
            <Box className="topLayer-first-wrapper" id="topLayer-first-wrapper">
                {/* First Layer */}
                <Box className="topLayer-first hide" ref={topLayerFirstRef}>
                    <Box sx={MUIStyle.BannerContentInner}>
                        <Typography variant="span" sx={MUIStyle.BannerTopHeading}>New revolution for construction</Typography>
                        {/* <Typography variant="h1" sx={MUIStyle.BannerHeading}>
                            
                        </Typography> */}
                        <Box sx={MUIStyle.BannerHeading}>
                            <Box sx={{ display: "inline-block" }} className="bannerHeading1">C</Box>
                            <Box sx={{ display: "inline-block" }} className="bannerHeading1">o</Box>
                            <Box sx={{ display: "inline-block" }} className="bannerHeading1">n</Box>
                            <Box sx={{ display: "inline-block" }} className="bannerHeading1">n</Box>
                            <Box sx={{ display: "inline-block" }} className="bannerHeading1">e</Box>
                            <Box sx={{ display: "inline-block" }} className="bannerHeading1">c</Box>
                            <Box sx={{ display: "inline-block" }} className="bannerHeading1">t</Box>
                            <Box sx={{ display: "inline-block" }} className="bannerHeading1">e</Box>
                            <Box sx={{ display: "inline-block" }} className="bannerHeading1">d</Box>
                        </Box>
                        <Box sx={MUIStyle.BannerHeading}>
                            <Box sx={{ display: "inline-block" }} className="bannerHeading2">C</Box>
                            <Box sx={{ display: "inline-block" }} className="bannerHeading2">o</Box>
                            <Box sx={{ display: "inline-block" }} className="bannerHeading2">n</Box>
                            <Box sx={{ display: "inline-block" }} className="bannerHeading2">s</Box>
                            <Box sx={{ display: "inline-block" }} className="bannerHeading2">t</Box>
                            <Box sx={{ display: "inline-block" }} className="bannerHeading2">r</Box>
                            <Box sx={{ display: "inline-block" }} className="bannerHeading2">u</Box>
                            <Box sx={{ display: "inline-block" }} className="bannerHeading2">c</Box>
                            <Box sx={{ display: "inline-block" }} className="bannerHeading2">t</Box>
                            <Box sx={{ display: "inline-block" }} className="bannerHeading2">i</Box>
                            <Box sx={{ display: "inline-block" }} className="bannerHeading2">o</Box>
                            <Box sx={{ display: "inline-block" }} className="bannerHeading2">n</Box>
                        </Box>
                        <Typography variant="body1" sx={MUIStyle.BannerText}>
                            See Further, Save More. Autopilot your project.
                        </Typography>

                        <Button sx={MUIStyle.BannerBtn} variant="contained" size="large"
                            onClick={() => setIsModalOpen(true)}
                        >

                            <Box component={"span"} className="BannerBtnIcon" sx={MUIStyle.BannerBtnIcon}>
                                <Icon icon="flowbite:arrow-right-outline" />
                            </Box>
                            Try Now
                            <Box className="BannerBtnBG" sx={MUIStyle.BannerBtnBG} />
                        </Button>
                    </Box>
                </Box>
                {/* First Layer */}
            </Box>

            <ContactFormModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                theme={'light'}
            />
        </>
    );
}