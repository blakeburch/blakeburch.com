import defaultTheme from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Geist Sans", ...defaultTheme.fontFamily.sans],
        mono: ["Geist Mono", ...defaultTheme.fontFamily.mono],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: 'inherit',
              textDecoration: 'underline',
              textDecorationColor: theme('colors.neutral.400'),
              textUnderlineOffset: '3px',
              textDecorationThickness: '1px',
              '&:hover': {
                color: theme('colors.neutral.900'),
                textDecorationColor: theme('colors.neutral.900'),
              },
            },
          },
        },
        invert: {
          css: {
            a: {
              '&:hover': {
                color: theme('colors.neutral.100'),
                textDecorationColor: theme('colors.neutral.100'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};