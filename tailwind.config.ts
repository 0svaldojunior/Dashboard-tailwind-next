import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
        form: 'minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 15rem)',
      },

      screens: {
        tablet: '640px',
        laptop: '1024px',
        desktop: '1280',
        'desktop-fullHD': '1920',
        'desktop-quadHD': '2560',
        'desktop-4k': '3840',
      },

      fontSize: {
        '10xl': [
          '10rem',
          {
            lineHeight: '1rem',
          },
        ],
      },
    },
  },
  plugins: [],
}
export default config
