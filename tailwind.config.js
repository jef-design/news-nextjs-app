module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'gray-prim': '#3c4043',
        'business': '#1e8e3e',
        'technology': '#1bb3c8',
        'entertainment': '#8430c3',
        'sports': '#fa7b17',
        'science': '#df3093',
        'health': '#4285f4',
        'world': '#34a853',
        'nation': '#185abc',
      },
      fontFamily:{
        'sans': ['Roboto', 'sans-serif'],
      },
      animation: {
        shimmer: 'shimmer 2s ease-in-out infinite',
       },
      keyframes: {
        shimmer: {
          '0% ':{
            left:'0%;',
            right:'100%',
            width:'5%',
          },
          '10%': {
            left:'0%',
            right:'75%',
            width:'70%',
          },
          '90%': {
            right:'0%',
            left:'75%',
            width:'70%',
          },
          '100% ':{
            left:'100%',
            right:'0%',
            width:'0%',
          }
        }
       }
      
    },
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    // require('tailwind-scrollbar'),
  ],
  rules: {
    'at-rule-no-unknown': [true, {
      ignoreAtRules: [
        'tailwind',
        'apply',
        'variants',
        'responsive',
        'screen'
      ]
    }],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null
  }
}
