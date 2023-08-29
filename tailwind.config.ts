import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
      },

      screens: {
        tablet: '640px',
        laptop: '1024px',
        desktop: '1280',
        'desktop-fullHD': '1920',
        'desktop-quadHD': '2560',
        'desktop-4k': '3840',
      },

      colors: {
        junior: '#8257e6',
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
