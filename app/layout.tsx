import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Varela_Round, Poppins } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
    subsets: ["latin"],
    variable: "--font-jakarta",
    display: "swap",
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const varelaRound = Varela_Round({
    subsets: ["latin"],
    variable: "--font-varela-round",
    weight: "400",
    display: "swap",
});

const poppins = Poppins({
    subsets: ["latin"],
    variable: "--font-poppins",
    weight: ["300", "400", "500", "600", "700"],
    display: "swap",
});

export const metadata: Metadata = {
    title: "Forgelabs | Everything At One Place",
    description: "Forgelab is a creative collaborative ecosystem for bold ideas.",
    icons: {
        icon: "/icon.svg",
        shortcut: "/icon.svg",
        apple: "/icon.svg",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${jakarta.variable} ${inter.variable} ${varelaRound.variable} ${poppins.variable} font-sans antialiased text-foreground bg-background`}>
                {children}
            </body>
        </html>
    );
}
