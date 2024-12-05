import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    proxy: {
      '/api': 'https://localhost:5000', // Forward API requests to Express
    },
  },
});

