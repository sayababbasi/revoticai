// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// Sayab's custom Vite config for React app (ready for Netlify deployment)
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Default output folder for Netlify
    sourcemap: false, // Set to true if you want debugging info
  },
  server: {
    port: 3000, // Custom port if needed during development
  },
});
