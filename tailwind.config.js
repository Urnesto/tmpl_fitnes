/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#082329",
        },
        tmpl: {
          purple: "#B35FCE",
          black: "#121012",
          gray: {
            50: "#2F2D2F",
            100: "#9a9a9a",
            150: "#292729",
          },
        },
      },
    },
  },
  plugins: [],
};
