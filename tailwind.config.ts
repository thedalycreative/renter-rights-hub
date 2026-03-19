import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        sand:    { DEFAULT: '#F5F0E8', 2: '#EDE6D6', 3: '#D9CFBA' },
        teal:    { DEFAULT: '#1A5C54', 2: '#134840', 3: '#0D302B', lt: '#E3EFED', md: '#2E7D74' },
        amber:   { DEFAULT: '#C97B2A', lt: '#FBF0E0', 2: '#9D5E18' },
        ink:     { DEFAULT: '#1C1A16', 2: '#3D3A32', 3: '#6B6659', 4: '#9E9889' },
      },
      fontFamily: {
        serif: ['Lora', 'Georgia', 'serif'],
        mono:  ['DM Mono', 'monospace'],
        sans:  ['DM Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
