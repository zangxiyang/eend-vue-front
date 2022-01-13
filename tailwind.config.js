module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {},
    height:{
      'banner': '370px'
    },
    minHeight:{
      '24': '6rem'
    },
    minWidth:{
      '1300': '1300px'
    },
    zIndex:{
      '1': '1'
    },
  },
  plugins: [],
}
