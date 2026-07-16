/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: "#090909",
        graphite: "#343434",
        stone: "#696966",
        canvas: "#F2F2F0",
        line: "#C8C8C3",
        electric: "#164FDC",
        pink: "#F28AB8",
        orange: "#F04416"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      },
      maxWidth: {
        content: "78rem",
        reading: "54rem",
        wide: "90rem"
      }
    }
  },
  plugins: []
};
