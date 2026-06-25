import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";

import "./globals.css";

const monaSans = Mona_Sans({
    weight: ["300", "400", "500", "600", "700", "800"],
    subsets: ["latin"]
});

const description = "The secure collaboration platform.";

export const metadata: Metadata = {
    title: "Vous",
    description: description,
    icons: { icon: "/images/icon.png" },
    openGraph: {
        title: "Vous",
        description: description,
        url: "https://www.vous.im",
        images: [{
            url: "https://www.vous.im/images/splash.webp",
            width: 1200,
            height: 630,
            alt: "Vous splash image"
        }],
        type: "website"
    }
};

export default async function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta name="theme-color" content="#1E3A8A" />

                <link rel="apple-touch-icon" sizes="180x180" href="/images/icon.png" />
                <link rel="canonical" href="https://www.vous.im" />
            </head>

            <body className={`${monaSans.className} h-screen bg-white text-zinc-400 overflow-x-hidden`}>
                {children}
            </body>
        </html>
    );
}