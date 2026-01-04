/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        UniNeuRegular: ['"UniNeuRegular"'],
        UniNeuBold: ['"UniNeuBold"'],
        UniNeuBlack: ['"UniNeuBlack"'],
        UniNeuBook: ['"UniNeuBook"'],
        UniNeuHeavy: ['"UniNeuHeavy"'],
        UniNeuLight: ['"UniNeuLight"'],
      },
    },
  },
  plugins: [],
}

