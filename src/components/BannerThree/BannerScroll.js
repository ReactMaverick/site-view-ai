import { animateAndHideTopLayer, animateAndShowTopLayer, stopAnimation } from "./BannerThreeJS";

export const gsapAnimation = ({
    gsap,
    ScrollTrigger,
    canvasWrapperRef,
    topLayerFirstRef,
    camera,
    scene,
    renderer
}) => {

    let previousScroll = 0;

    const clearScrollTrigger = () => {
        // console.log('Scroll Triggers ==> ', ScrollTrigger.getAll());

        ScrollTrigger.getAll().forEach(trigger => {
            // console.log("trigger", trigger.trigger);
            // trigger.kill();
        });
    };

    let isScrolledToTopSection = false;

    ScrollTrigger.create({
        trigger: topLayerFirstRef.current,
        start: "top center", // When the top of the trigger hits the center of the viewport
        end: "bottom top", // When the bottom of the trigger hits the top of the viewport
        scrub: 1,
        onUpdate: (self) => {
            const progress = self.progress;
            const currentScroll = self.scroll(); // Get the current scroll position

            // console.log("progress", progress);
            // console.log("currentScroll", currentScroll);
            // console.log("previousScroll", previousScroll);


            if (currentScroll > previousScroll) {
                // Scrolling down
                // console.log("Scrolling down");

                // If the progress is not 1, continue with the block
                if (progress !== 1) {
                    // Prevent scrolling
                    document.body.style.overflow = 'hidden';

                    // Call the animate function
                    renderer.setAnimationLoop(() => {
                        animateAndHideTopLayer({
                            camera,
                            scene,
                            renderer,
                            canvasWrapperRef,
                            topLayerFirstRef,
                            gsap,
                        });
                    });
                }

            } else {
                // Scrolling up
                // console.log("Scrolling up");

                // If the progress is not 0, continue with the block
                if (progress !== 0) {
                    if (!scene.visible) {

                        const canvasWrapper = canvasWrapperRef.current;

                        if (canvasWrapper) {
                            canvasWrapper.classList.remove('d-none');
                        }

                        scene.visible = true;

                        scene?.children?.forEach((child) => {
                            child.material.opacity = 1;
                        });

                        camera.position.z = 0;

                        renderer.setAnimationLoop(() => {
                            animateAndShowTopLayer({
                                camera,
                                scene,
                                renderer,
                                topLayerFirstRef
                            });
                        });
                    }
                }
            }

            // Update the previous scroll position
            previousScroll = currentScroll;
        },
    });

    // Text Rotation Animation
    const newTL = gsap.timeline({ repeat: -1, repeatDelay: 2 }); // This will repeat the whole timeline infinitely

    newTL.to('.bannerHeading1', {
        duration: 0.5,
        delay: 3,
        stagger: 0.02, // This will animate each letter with a delay of 0.02s
        rotateY: 360,
    })

    newTL.to('.bannerHeading2', {
        duration: 0.5,
        delay: 0.2,
        stagger: 0.02, // This will animate each letter with a delay of 0.02s
        rotateY: 360,
    })

}