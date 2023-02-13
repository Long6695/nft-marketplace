/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      mobile: '375px',
      tablet: '834px',
      desktop: '1280px',
    },
    fontSize: {
      h1: [
        'var(--h1)',
        {
          lineHeight: 'var(--h1-line-height)',
          fontWeight: 'var(--font-weight-700)',
        },
      ],
      h2: [
        'var(--h2)',
        {
          lineHeight: 'var(--h2-line-height)',
          fontWeight: 'var(--font-weight-600)',
        },
      ],
      h3: [
        'var(--h3)',
        {
          lineHeight: 'var(--h3-line-height)',
          fontWeight: 'var(--font-weight-600)',
        },
      ],
      h4: [
        'var(--h4)',
        {
          lineHeight: 'var(--h4-line-height)',
          fontWeight: 'var(--font-weight-400)',
        },
      ],
      h5: [
        'var(--h5)',
        {
          lineHeight: 'var(--h5-line-height)',
          fontWeight: 'var(--font-weight-400)',
        },
      ],
      base: [
        'var(--base)',
        {
          lineHeight: 'var(--base-line-height)',
          fontWeight: 'var(--font-weight-400)',
        },
      ],
      caption: [
        'var(--caption)',
        {
          lineHeight: 'var(--caption-line-height)',
          fontWeight: 'var(--font-weight-400)',
        },
      ],
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
        'call-to-action-color': 'var(--call-to-action)',
      },
    },
  },
  plugins: [],
}
