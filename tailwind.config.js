module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      height:{
        'banner': '370px'
      },
      minHeight:{
        '24': '6rem'
      },
      minWidth:{
        '1300': '1300px'
      },
      colors:{
        'footer-gray': '#f7f8fa'
      },
      screens:{
        'max-md':{'max': '767px'}
      }
    },
    zIndex:{
      '1': '1',
      '0': 0,
      '10': 10,
      '20': 20,
      '30': 30,
      '40': 40,
      '50': 50,
      '25': 25,
      '75': 75,
      '100': 100,
      'auto': 'auto',
    },
  },
  plugins: [],
  variants:{
    extend: {
      margin: ['first'],
    }
  }
}
