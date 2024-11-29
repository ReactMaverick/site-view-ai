import { Box, Button, Container, Typography } from "@mui/material";
import { MUIStyle } from "./MUIStyle";
import { Icon } from "@iconify/react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { setupThreeJS } from "./BannerThreeJS";
import { useGSAP } from "@gsap/react";
import { gsapAnimation } from "./BannerScroll";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function BannerThree() {

    const canvasWrapperRef = useRef(null);
    const canvasRef = useRef(null);
    const topLayerFirstRef = useRef(null);

    const [camera, setCamera] = useState(null);
    const [scene, setScene] = useState(null);
    const [renderer, setRenderer] = useState(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(useGSAP, ScrollTrigger);
    }, []);

    useGSAP(() => {
        if (!topLayerFirstRef.current || !camera || !scene || !renderer) return;

        // gsapAnimation({
        //     canvasWrapperRef,
        //     topLayerFirstRef,
        //     gsap,
        //     ScrollTrigger,
        //     camera,
        //     scene,
        //     renderer
        // });
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

    }, []);

    return (
        <>
            <Box className="canvasWrapper" ref={canvasWrapperRef}>
                <canvas id="threeCanvas" ref={canvasRef} />
            </Box>
            <Box className="topLayer-first-wrapper">
                {/* First Layer */}
                <Box className="topLayer-first hide" ref={topLayerFirstRef}>
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
                            <Box className="BannerBtnBG" sx={MUIStyle.BannerBtnBG} />
                        </Button>
                    </Box>
                </Box>
                {/* First Layer */}
            </Box>
        </>
    );
}