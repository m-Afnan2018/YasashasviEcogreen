import type { Metadata } from "next";
import localFont from "next/font/local";
import { Poppins } from 'next/font/google';
import "./globals.css";
import Navbar from "@/components/common/Navbar/Navbar";
import Footer from "@/components/common/Footer/Footer";


const poppins = Poppins({
    subsets: ['latin'],
    weight: ['400', '600'],
    variable: '--font-poppins'
});

const pilatWide = localFont({
    src: [
        { path: "../../public/fonts/pilat-wide/PilatWide-Thin.woff2", weight: "100" },
        { path: "../../public/fonts/pilat-wide/PilatWide-Light.woff2", weight: "300" },
        { path: "../../public/fonts/pilat-wide/PilatWide-Regular.woff2", weight: "400" },
        { path: "../../public/fonts/pilat-wide/PilatWide-DemiBold.woff2", weight: "600" },
        { path: "../../public/fonts/pilat-wide/PilatWide-Bold.woff2", weight: "700" },
        { path: "../../public/fonts/pilat-wide/PilatWide-Black.woff2", weight: "900" },
    ],
    variable: "--font-pilat",
});

const reyork = localFont({
    src: [
        {
            path: "../../public/fonts/reyork-fonts/reyork-regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/reyork-fonts/reyork-regular.otf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-reyork",
});

const dmSans = localFont({
    src: [
        {
            path: "../../public/fonts/dm-sans/DMSans-Medium.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "../../public/fonts/dm-sans/DMSans-Regular.ttf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-dmsans",
});

export const metadata: Metadata = {
    title: {
        default: "Yashashvi Ecogreen | Global Trade & Supply Solutions",
        template: "%s | Yashashvi Ecogreen",
    },
    description:
        "Yashashvi Ecogreen specializes in import & export, trading, and supply coordination. Connecting global markets with reliable commercial solutions.",
    keywords: [
        "import export UAE",
        "global trading company",
        "supply coordination",
        "Yashashvi Ecogreen",
        "commodity trading",
        "ecogreen trading",
        "UAE trading company",
        "commercial supply solutions",
    ],
    authors: [{ name: "Yashashvi Ecogreen" }],
    creator: "Yashashvi Ecogreen",
    metadataBase: new URL("https://yashashviecogreen.com"),
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://yashashviecogreen.com",
        siteName: "Yashashvi Ecogreen",
        title: "Yashashvi Ecogreen | Global Trade & Supply Solutions",
        description:
            "Specializing in import & export, trading, and supply coordination. Connecting global markets with reliable commercial solutions.",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Yashashvi Ecogreen – Global Trade & Supply Solutions",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Yashashvi Ecogreen | Global Trade & Supply Solutions",
        description:
            "Specializing in import & export, trading, and supply coordination. Connecting global markets with reliable commercial solutions.",
        images: ["/og-image.jpg"],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
        },
    },
    icons: {
        icon: "/favicon.ico",
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${reyork.variable} ${pilatWide.variable} ${poppins.variable} ${dmSans.variable}`}>
                <Navbar />
                {children}
                <Footer />
            </body>
        </html >
    );
}
