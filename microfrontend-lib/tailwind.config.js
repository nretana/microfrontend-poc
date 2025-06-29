/** @type {import('tailwindcss').Config} */

export default {
  //important: ".ui", //tailwind classes needs to be inside a .ui wrapper class
  //prefix: "ui-",
  //mode: 'jit',
  content: ["./src/**/*.{ts,tsx,scss}"],
  theme: {
    /* spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
    }, */
    extend: {},
  },
  plugins: [],
}