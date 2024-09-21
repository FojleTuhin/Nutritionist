/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'mobile': '390px',    // Mobile devices
        'tablet': '768px',    // Tablet or smaller devices between mobile and medium
        'medium': '1024px',   // Medium devices
        'laptop': '1440px',   // Laptop devices
        // 'desktop': '1920px',  // Desktop devices
      }
    },
  },
  plugins: [],
};
