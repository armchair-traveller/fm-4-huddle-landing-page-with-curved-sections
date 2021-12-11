module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      primary: {
        100: '#ff52bf',
        200: '#ff8fd8',
        300: '#ff4242',
        400: '#FFF',
      },
      neutral: {
        100: '#00252e',
        200: '#f5faff',
      },
    },
    extend: {},
  },
  plugins: [],
}
