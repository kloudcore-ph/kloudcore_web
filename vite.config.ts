import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    // Forwards /api to `npm run dev:api` (wrangler pages dev) so the contact form works locally.
    proxy: { '/api': 'http://localhost:8788' },
  },
})
