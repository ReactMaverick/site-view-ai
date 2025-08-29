import React from "react";

export const metadata = {
    title: "Blogs | Construction AI & Monitoring Insights",
    description: "SitePace.ai blog covers construction technology, AI site monitoring, and remote updates—helping engineers build smarter.",
    alternates: {
        canonical: "https://sitepace.ai/blogs"
    },
    robots: {
        index: true,
        follow: true
    }
};

export default function Layout({ children }) {
    return <>{children}</>;
}