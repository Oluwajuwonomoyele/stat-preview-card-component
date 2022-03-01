module.exports = {
  content: [
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
      "very-dark-blue": "hsl(233, 47%, 7%)",
      "dark-desaturated-blue": "hsl(244, 38%, 16%)",
      "soft-violet": "hsl(277, 64%, 61%)",
      "slightly-transparent-white-1": "hsla(0, 0%, 100%, 0.75)",
      "slightly-transparent-white-2": "hsla(0, 0%, 100%, 0.6)",
      }
    },
    fontFamily: {
      inter: ["Inter, sans-serif"],
      "lexend-Deca": ["Lexend Deca, sans-serif"]

    },
    container: {
      center: true,
      padding: "1rem",
    },
    letterSpacing: {
      wider: "0.5rem",
      widest: "1rem"
    }
  },
  plugins: [],
}
