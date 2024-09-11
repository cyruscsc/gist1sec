import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        tree: {
          50: '#eefbf4',
          100: '#d7f4e2',
          200: '#b2e8c9',
          300: '#80d5a9',
          400: '#4ebd88',
          500: '#29a06c',
          600: '#1a8155',
          700: '#156747',
          800: '#135239',
          900: '#104430',
          950: '#08261c',
        },
      },
    },
  },
  plugins: [],
}
export default config
