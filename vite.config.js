import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: './', // Use relative paths so dist works correctly on Netlify
  plugins: [react()],
})
