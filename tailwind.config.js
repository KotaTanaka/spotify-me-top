module.exports = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    prefix: 'daisy-',
    themes: [
      {
        mytheme: {
          primary: '#a3e635',
          secondary: '#a7f9cd',
          accent: '#7d5ebc',
          neutral: '#35233E',
          'base-100': '#2E2C3A',
          info: '#60A2D7',
          success: '#21B58B',
          warning: '#967B0D',
          error: '#EB3D66',
        },
      },
    ],
  },
};
