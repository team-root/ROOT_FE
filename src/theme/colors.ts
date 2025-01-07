


export const colors = {
  gray: {
    100: '#fff',
    200: '#E4E6EB',
    300: '#C6C8CC',
    400: '#7A7C80',
    500: '#494A4C',
    550: '#242424',
    600: '#1C1C1C',
    700: '#000',
  },

  main: {
    100: '#88A0FC',
    200: '#6686FF',
    300: {
      from: '#D5A0FF',
      to: '#9CE6FE',
      direction: 'to right',
    },
    400: '#BFCCFF',
  },

  error: '#F54B31',

} as const;

export type Gradient = typeof colors["main"]["300"];
