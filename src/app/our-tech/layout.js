import React from "react";

export const metadata = {
    title: "Our Tech | How SitePace AI + 360ｰ Camera Works",
    description: "Discover the tech behind SitePace.ai. AI and 360ｰ helmet camera create digital twins, map walk paths, and deliver remote site updates.",
    alternates: {
        canonical: "https://sitepace.ai/our-tech"
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function Layout({ children }) {
    return <>{children}</>;
}