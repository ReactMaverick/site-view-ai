export const gsapAnimation = ({
    gsap,
    videoSecMain,
    videoSecImages
}) => {

    const videoSecMainElement = videoSecMain.current;
    const videoSecImagesElement = videoSecImages.current;

    const scrollTriggerConfig = {
        trigger: videoSecMainElement,
        start: "top top", // Starts when top of element hits top of viewport
        end: () => "+=" + videoSecMainElement.offsetHeight * 4, // Ends when the element is 4 times its height below the viewport
        scrub: 1, // Smoothly animates the element when scrolling
        pin: true, // Pin the trigger element while active
        // markers: true,
        id: "videoSecMain",
    };

    gsap.to(videoSecImagesElement, {
        scrollTrigger: scrollTriggerConfig,
        scale: 1, // Scale the element (VideoSecImages) to 1
    });

    gsap.to('.videoSecImage', {
        scrollTrigger: {
            ...scrollTriggerConfig,
            id: "videoSecImages",
            pin: false, // Unpin the trigger element while active
        },
        transform: 'translate(0%, 0%)', // Translate the element to 0% on both x and y axis
    });

    gsap.to('.videoSecImageOuter', {
        scrollTrigger: {
            ...scrollTriggerConfig,
            id: "videoSecImagesOuter",
            pin: false, // Unpin the trigger element while active
        },
        borderRadius: 0, // Remove the border radius
    });

}