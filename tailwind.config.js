/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'light-pink': 'hsl(6, 100%, 80%)',
        'dark-pink': 'hsl(335, 100%, 65%)',

        'pale-blue': 'hsl(243, 100%, 93%)',
        'grayish-blue': 'hsl(229, 7%, 55%)',
        blue: 'hsl(228, 56%, 26%)',
        'dark-blue': 'hsl(229, 57%, 11%)',
      },
      fontFamily: {
        raleway: ['var(--font-raleway)'],
      },
      fontSize: {
        body: '0.875rem',
      },
      backgroundImage: {
        mobile: ['url(./images/bg-mobile.png)'],
        desktop: ['url(./images/bg-desktop.png)'],
      },
    },
  },
  plugins: [],
}
