import { useLayoutEffect, useRef } from "react";
import HorizontalLine from "./HorizontalLine";
import HorizontalLineGradient from "./HorizontalLineGradient";
import LeftGradient from "./LeftGradient";
import LeftPath from "./LeftPath";
import LeftVerticalLine from "./LeftVerticalLine";
import LeftVerticalLineGradient from "./LeftVerticalLineGradient";
import RightGradient from "./RightGradient";
import RightPath from "./RightPath";
import RightVerticalLine from "./RightVerticalLine";
import RightVerticalLineGradient from "./RightVerticalLineGradient";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function SiteViewSVG({
    fillOpacity = 1,
}) {

    const horizontalLineRef = useRef(null);
    const rightVerticalLineRef = useRef(null);
    const leftVerticalLineRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline({
            repeat: -1,
            repeatDelay: 1,
            // repeatRefresh: true,
        });

        // Animation Steps
        const animationSteps = [
            {
                element: horizontalLineRef.current,
                properties: { transform: 'translateX(-20%)', duration: 3 },
                position: 0
            },
            {
                element: rightVerticalLineRef.current,
                properties: { transform: 'translateY(-50%)', duration: 3 },
                position: 1
            },
            {
                element: leftVerticalLineRef.current,
                properties: { transform: 'translateY(-20%)', duration: 3 },
                position: 2
            }
        ];

        // Shuffle the animation steps
        for (let i = animationSteps.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [animationSteps[i], animationSteps[j]] = [animationSteps[j], animationSteps[i]];
        }

        // Add shuffled animation steps to the timeline
        animationSteps.forEach(step => {
            tl.to(step.element, step.properties, step.position);
        });

    }, [horizontalLineRef, rightVerticalLineRef, leftVerticalLineRef]);


    return (
        <svg className="siteViewSVG" viewBox="0 0 1440 880" fill="none" xmlns="http://www.w3.org/2000/svg">
            <LeftPath
                fillOpacity={fillOpacity}
            />
            <RightPath
                fillOpacity={fillOpacity}
            />
            {/* Lines (Animations) */}
            <HorizontalLine
                ref={horizontalLineRef}
                className="horizontalLine"
            />
            <RightVerticalLine
                ref={rightVerticalLineRef}
                className="rightVerticalLine"
            />
            <LeftVerticalLine
                ref={leftVerticalLineRef}
                className="leftVerticalLine"
            />
            <defs>
                {/* Left Gradient (Whole SVG) */}
                <LeftGradient />
                {/* Right Gradient (Whole SVG) */}
                <RightGradient />
                {/* Line Gradients */}
                <HorizontalLineGradient />
                <RightVerticalLineGradient />
                <LeftVerticalLineGradient />
            </defs>
        </svg>
    );
}