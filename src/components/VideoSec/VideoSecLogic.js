import { isSmallScreen } from "@/values/Constants/ResponsiveCheck";

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
        end: () => "+=" + (isSmallScreen() ? (videoSecMainElement.offsetWidth * 2) : (videoSecMainElement.offsetHeight * 1)), // Ends when the element is 4 times its height below the viewport
        scrub: 1, // Smoothly animates the element when scrolling
        pin: true, // Pin the trigger element while active
        // markers: true,
        
        id: "videoSecMain",
    };

    gsap.to(videoSecImagesElement, {
        scrollTrigger: scrollTriggerConfig,
        // scale: 1, // Scale the element (VideoSecImages) to 1
        keyframes: {
            scale: [0.5, 1, 0.5], // Scale the element (VideoSecImages) to 0.5, 1, 0.5
        }
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
        keyframes: {
            borderRadius: ["40px", "0px", "40px"], // Change the border radius of the element (VideoSecImageOuter) to 40px, 0px, 40px
        }
    });

}