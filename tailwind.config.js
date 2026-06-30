/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: '#0f1117',
                foreground: '#f8fafc',
                primary: '#3b82f6',
                secondary: '#8b5cf6',
                accent: '#06b6d4',
                success: '#22c55e',
                warning: '#f59e0b',
                danger: '#ef4444'
            },

            borderRadius: {
                xl: "1rem",
                "2xl": "1.5rem",
            },

            fontFamily: {
                sans: ["Inter", "sans-serif"],
                mono: ["JetBrains Mono", "monospace"]
            },
        },
    },
    plugins: [],
}