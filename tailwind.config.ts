import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                inter: ["var(--font-inter)", "sans-serif"],
                jakarta: ["var(--font-jakarta)", "sans-serif"],
                "varela-round": ["var(--font-varela-round)", "sans-serif"],
                poppins: ["var(--font-poppins)", "sans-serif"],
            },
        },
    },
};
export default config;

