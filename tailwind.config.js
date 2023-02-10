/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      h1: [
        'var(--h1)',
        {
          lineHeight: 'var(--h1-line-height)',
          fontWeight: 'var(--font-weight-700)',
        },
      ],
      h2: 'var(--h2)',
      h3: 'var(--h3)',
      h4: 'var(--h4)',
      h5: 'var(--h5)',
      base: 'var(--base)',
      caption: 'var(--caption)',
    },
    fontFamily: {
      space: ['Space Mono', 'monospace'],
      workSans: ['Work Sans', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'gradient#1-bg-color': 'var(--gradient1)',
        'gradient#2-bg-color': 'var(--gradient2)',
        'black-bg-color': 'var(--black)',
        'black-secondary-bg-color': 'var(--black-secondary)',
        'gray-bg-color': 'var(--gray)',
        'white-bg-color': 'var(--white)',
        'call-to-action--bg-color': 'var(--call-to-action)',
      },
      colors: {
        'black-color': 'var(--black)',
        'black-color-secondary': 'var(--black-secondary)',
        'gray-color': 'var(--gray)',
        'white-color': 'var(--white)',
      },
    },
  },
  plugins: [],
}
