import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://localhost:5000', // Ensure HTTPS is used for the proxy
        changeOrigin: true, // Fixes any issues with CORS
        secure: false, // Use this if you're in a local development environment with self-signed SSL certificates
      },
    },
  },
});

