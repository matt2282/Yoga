/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
          '2xsm': '100px',
        'xsm': '580px',
        'sm': '775px',
        'md': '975px',
        'lg': '1170px',
        'xl': '1280px',
        
      },
      backgroundImage:{
        "home-screen": "url('/public/images/pexels-enginakyurt-1642225.jpg')",
        "restorative": "url('/public/images/pexels-pok-rie-33563-191839.jpg')",
        "standing": "url('/public/images/pexels-lee-starry-1667861-10610139.jpg')",
        "seated": "url('/public/images/pexels-pok-rie-33563-135477.jpg')",
        "balance": "url('/public/images/pexels-darina-belonogova-8789646.jpg')",
        "type-selection": "url('/public/images/pexels-simone-defendi-262061463-12762122.jpg')"
      },
      backgroundPosition: {
        'crop-bottom': 'center bottom 10%',
        'crop-top': 'center top 45%'
      },
      colors:{
        'Eunry': '#D7ADA2'
      },

    },
  },
  plugins: [],
}

