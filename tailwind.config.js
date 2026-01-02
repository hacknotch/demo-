/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'elowen-orange': '#F05736',
        'elowen-yellow': '#FBB12F',
        'elowen-teal': '#055A6B',
        'elowen-dark-teal': '#194952',
        'elowen-darker': '#081417',
        'elowen-gray': '#9A9A9A',
        'elowen-light-gray': '#E9E9E9',
      },
      fontFamily: {
        'murecho': ['Murecho', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-orange': 'linear-gradient(274.68deg, #F05736 -5.46%, #FBB12F 138.47%)',
        'gradient-teal': 'linear-gradient(180deg, #194952 -21.18%, #081417 64.31%)',
        'gradient-logo': 'linear-gradient(169.54deg, #FBB12F 3.71%, #F05736 101.7%)',
      },
      borderRadius: {
        '4xl': '30px',
        '5xl': '40px',
      },
    },
  },
  plugins: [],
}
