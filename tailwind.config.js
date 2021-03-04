module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],//isso remove os estilo não utilizados da produção
  darkMode: false, // or 'media' or 'class'
  theme: {
    //cria novas cores para ser utilizada em toda a aplicação
    //mas remove as default
    /* colors:{
      red:{
        light:"#eb5245",
        DEFAULT:"#f02a19",
        dark:"#CE1000",
      }
    }, */
    //edita as as configurações padrões mas mantem as que não foram editadas
    extend: {
      colors: {
        red: {
          600: '#f02a19'
        },
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}
