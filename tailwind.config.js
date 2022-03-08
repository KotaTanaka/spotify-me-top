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
          secondary: '#58C7F3',
          accent: '#F3CC30',
          neutral: '#20134E',
          'base-100': '#701a75',
          info: '#53C0F3',
          success: '#71EAD2',
          warning: '#F3CC30',
          error: '#E24056',
        },
      },
    ],
  },
};
