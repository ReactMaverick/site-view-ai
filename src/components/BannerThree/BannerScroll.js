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
            console.log("trigger", trigger.trigger);
            // trigger.kill();
        });
    };

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
                console.log("Scrolling down");

                // If the progress is 1, which means the element is not visible, return
                if (progress === 1) {
                    clearScrollTrigger();
                    return;
                }

                // Call the animate function
                renderer.setAnimationLoop(() => {
                    animateAndHideTopLayer({
                        camera,
                        scene,
                        renderer,
                        canvasWrapperRef,
                        topLayerFirstRef
                    });
                });

            } else {
                // Scrolling up
                console.log("Scrolling up");

                if (progress === 0) return; // If the progress is 0, which means the element is visible, return

                if (!scene.visible) {

                    const canvasWrapper = canvasWrapperRef.current;

                    if (canvasWrapper) {
                        canvasWrapper.classList.remove('d-none');
                    }


                    scene.visible = true;

                    // console.log(scene.children);


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
                        })
                    });
                }
            }

            // Update the previous scroll position
            previousScroll = currentScroll;
        }
    });

}