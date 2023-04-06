module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        lightPurple: '#818DD1',
        blackOlive: '#3b413c',
        lightGrey: '#878D89',
        lightBlue: '#B5D2E4',
        googleBlue: '#4285F4',
        googleGreen: '#34A853',
        googleYellow: '#FBBC05',
        googleRed: '#EA4335',
        regalBlue: '#2F327D',
        imageBlue: '#a9ced4',
        'g-blue-1': '#AOC3FF',
        'g-blue-2': '#76A7FA',
        'g-blue-3': '#4285F4',
        'g-red-1': '#ED9D97',
        'g-red-2': '#E57368',
        'g-red-3': '#DB4437',
        'g-yellow-1': '#FFE168',
        'g-yellow-2': '#FBCB43',
        'g-yellow-3': '#F4B400',
        'g-green-1': '#7BCFA9',
        'g-green-2': '#33B679',
        'g-green-3': '#0F9D58',
        'g-gray-1': '#F2F2F2',
        'g-gray-2': '#E6E6E6',
        'g-gray-3': '#CCCCCC',
        'g-gray-4': '#B3B3B3',
        'g-gray-5': '#999999',
        'g-gray-6': '#808080',
        'g-gray-7': '#666666',
        'g-gray-8': '#4D4D4D',
        'g-gray-9': '#333333',
        'theme-blue-color': '#007BFC'
      }
    }
  },
  plugins: [require('tailwindcss-animation-delay')]
}
