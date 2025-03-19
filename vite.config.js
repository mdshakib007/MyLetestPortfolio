import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  optimizeDeps: {
    include: [
      'rehype-slug',
      'rehype-autolink-headings',
      'react-syntax-highlighter',
      'react-syntax-highlighter/dist/cjs/styles/prism',
      'clsx'
    ]
  }
})