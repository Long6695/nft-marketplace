/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      workSans: ['Work Sans', 'sans-serif'],
      spaceMono: ['Space Mono', 'monospace'],
    },
    container: {
      center: true,
      screens: {
        sm: '315px',
        md: '690px',
        lg: '1050px',
      },
    },
    screens: {
      mobile: '315px',
      tablet: '690px',
      desktop: '1050px',
    },
    fontSize: {
      h1: ['var(--h1)', 'var(--h1-line-height)'],
      h2: ['var(--h2)', 'var(--h2-line-height)'],
      h3: ['var(--h3)', 'var(--h3-line-height)'],
      h4: ['var(--h4)', 'var(--h4-line-height)'],
      h5: ['var(--h5)', 'var(--h5-line-height)'],
      default: ['var(--default)', 'var(--default-line-height)'],
      small: ['var(--small)', 'var(--small-line-height)'],
    },

    extend: {
      gap: {
        150: '150px',
      },
      gridTemplateColumns: {
        footer: '1.2fr 1fr 1.5fr',
        ranking: '0.5fr 4fr 1fr 1fr 1fr',
      },
      colors: {
        'black-secondary': 'var(--black-secondary)',
        'gradient#1': 'var(--gradient1)',
        'gradient#2': 'var(--gradient2)',
        black: 'var(--black)',
        gray: 'var(--gray)',
        white: 'var(--white)',
        'call-to-action': 'var(--call-to-action)',
        green: 'var(--green)',
      },
    },
  },
  plugins: [],
}
