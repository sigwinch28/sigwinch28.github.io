/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{pug,js}"],
  safelist: [{
    pattern: /(to|from)-(green|orange|blue|yellow|pink|red|fuchsia)-(300|400|500|600)/,
    variants: ['group-hover', 'dark', 'dark:group-hover'],
  }],
  theme: {
    fontFamily: {
      sans: '"Nimbus Sans L", "Helvetica Neue", Helvetica, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, "Noto Sans", sans-serif'
    },
    extend: {},
  },
  plugins: [],
}
