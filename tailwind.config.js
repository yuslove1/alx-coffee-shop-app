/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./app/*.{js,jsx,ts,tsx"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
            // my custom font
            fontFamily: {
              'Sora-Light': ['Sora-Light', 'sans-sarif'],
              'Sora-Regular': ['Sora-Regular', 'sans-sarif'],
              'Sora-SemiBold': ['Sora-SemiBold', 'sans-sarif'],
            },
            colors: {
              'coffebrown': '#C67C4E',
              'lightCoffee': '#EDD6C8',
              'myBlack': '#313131',
              'myGray': '#E3E3E3',
              'ghostWhite': '#F9F2ED',
              'textColor': '#A2A2A2',
            },
            padding: {
              'mypadding': '1.5rem',
              
              }
    },
  },
  plugins: [],
}