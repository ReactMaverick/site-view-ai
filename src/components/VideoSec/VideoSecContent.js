import { BOTTOMIMAGE, LBIMAGE, LTIMAGE, MIDDLEIMAGE, RBIMAGE, RTIMAGE, TOPIMAGE } from "@/values/Constants/ImageConstants";
import { CONNECTEDCONSTRUCTION, CONNECTEDCONSTRUCTIONSM } from "@/values/Constants/VideoConstants";

export const sectionContent = [
    {
        image: MIDDLEIMAGE,
        alt: "VideoSecMiddle",
        style: {},
        video: CONNECTEDCONSTRUCTION,
        videoSM: CONNECTEDCONSTRUCTIONSM, // For small screens
    },
    {
        image: LTIMAGE,
        alt: "VideoSecLT",
        style: {
            bottom: "50%",
            right: "100%",
            marginRight: 1,
            marginBottom: 0.5,
        },
        imageStyle: {
            transform: "translate(50%, 0%)"
        }
    },
    {
        image: TOPIMAGE,
        alt: "VideoSecTop",
        style: {
            bottom: "100%",
            left: "0",
            marginBottom: 1,
        },
        imageStyle: {
            transform: "translate(0%, 50%)"
        }
    },
    {
        image: RTIMAGE,
        alt: "VideoSecRT",
        style: {
            bottom: "50%",
            left: "100%",
            marginLeft: 1,
            marginBottom: 0.5,
        },
        imageStyle: {
            transform: "translate(-50%, 0%)"
        }
    },
    {
        image: LBIMAGE,
        alt: "VideoSecLB",
        style: {
            top: "50%",
            right: "100%",
            marginRight: 1,
            marginTop: 0.5,
        },
        imageStyle: {
            transform: "translate(50%, 0%)"
        }
    },
    {
        image: BOTTOMIMAGE,
        alt: "VideoSecBottom",
        style: {
            top: "100%",
            left: "0",
            marginTop: 1,
        },
        imageStyle: {
            transform: "translate(0%, -50%)"
        }
    },
    {
        image: RBIMAGE,
        alt: "VideoSecRB",
        style: {
            top: "50%",
            left: "100%",
            marginLeft: 1,
            marginTop: 0.5,
        },
        imageStyle: {
            transform: "translate(-50%, 0%)"
        }
    }
];