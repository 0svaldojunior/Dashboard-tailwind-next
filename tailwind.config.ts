import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
        form: 'minmax(7.5rem, 17.5rem) minmax(25rem, 1fr) minmax(0, 15rem)'
      },

      borderWidth: {
        6: '6px'
      },

      colors: {
        violet: {
          25: '#fcfaff'
        }
      },

      screens: {
        tablet: '640px',
        laptop: '1024px',
        desktop: '1280',
        'desktop-fullHD': '1920',
        'desktop-quadHD': '2560',
        'desktop-4k': '3840'
      },

      fontSize: {
        '10xl': [
          '10rem',
          {
            lineHeight: '1rem'
          }
        ]
      },

      keyframes: {
        slideDownAndFade: {
          from: { opacity: '0', transform: 'translateY(-2px)' },
          to: { opacity: '1', transform: 'translateY(-2px)' }
        },
        slideUpAndFade: {
          from: { opacity: '1' },
          to: { opacity: '0' }
        }
      },

      animation: {
        slideDownAndFade: 'slideDownAndFade 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        slideUpAndFade: 'slideUpAndFade 1s linear'
      }
    }
  },
  plugins: []
}
export default config
