import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#6C63FF",
                indigo: "#2A2F8F",
                dark: "#0F0F1A",
                lightGray: "#F6F7FB",
            },
            fontFamily: {
                display: ["var(--font-space-grotesk)", "sans-serif"],
            },
        },
    },
    plugins: [],
};
export default config;