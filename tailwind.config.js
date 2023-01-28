/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        '1.5xl': '1440px',
        phone: {max: '640px'}
      },
      spacing: {
        100: '100px',
      },
      gap: {
        '7.5': '1.875rem'
      },
      lineHeight: {
        relaxed: '1.73',
      },
      margin: {
        '7.5': '1.875rem',
        '22': '5.5rem',
      },
      padding: {
        '7.5': '1.875rem',
        container: '13.313rem',
      },
      colors: {
        'soft-orange': 'hsl(35, 77%, 62%)',
        'soft-red': 'hsl(5, 85%, 63%)',
        'off-white': 'hsl(36, 100%, 99%)',
        'grayish-blue': 'hsl(233, 8%, 79%)',
        'dark-grayish-blue': 'hsl(236, 13%, 42%)',
        'very-dark-blue': 'hsl(240, 100%, 5%)'
      },
    },
    fontFamily: {
      'body': ['Inter'],
    },
    fontSize: {
      sm: '0.875rem',
      base: '0.938rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '2rem',
      '3xl': '2.5rem',
      '4xl': '3.5rem'
    },
    letterSpacing: {
      normal: 0,
      widest: '0.274rem'
    },
    container: {
      center: true,

    }
  },
  plugins: [],
}