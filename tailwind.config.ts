import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        menu: '#2b2e3d',
      },
      gridTemplateColumns: {
        app: 'minmax(18rem, 20rem) 1fr',
        'aligned-itens-2': '1fr 1fr',
        'aligned-itens-3': '1fr 1fr 1fr',
      },
      padding: {
        tableCell: '0.75rem 1.25rem',
      },
    },
  },
  plugins: [],
}
export default config
