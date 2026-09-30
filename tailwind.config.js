/** Design tokens taken from the ByteSpace Figma CSS export */
module.exports = {
  content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        persian: { 800: '#003BE2' },
        lime: { 400: '#D4FB20', 500: '#CBFC01' },
        shuttle: { 50: '#F5F5F6', 100: '#E5E6E8', 200: '#CED0D3', 300: '#ABAEB5', 400: '#82868E', 700: '#4B4C53', 900: '#3A3B3F', 950: '#242528' },
        ink: { 700: '#4F4F4F' },
        vulcan: { 950: '#040819' },
        violet: { 600: '#7F30F7' },
        mindaro: { 400: '#C1E338' },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Satoshi', 'system-ui', 'sans-serif'],
        logo: ['"Clash Display"', 'Satoshi', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
