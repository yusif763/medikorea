module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Ensure this path covers your components
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropFilter: {
        none: "none",
        blur: "blur(20px)", // Ensure blur is defined
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
};
