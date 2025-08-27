import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';

export default defineConfig({
  plugins: [react()],
  base: '/home/',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'components': fileURLToPath(new URL('./src/components', import.meta.url)),
      // Add other aliases as needed
    },
  },
  server: {
    port: 3000, 
    open: true, 
  },
  build: {
    outDir: 'docs', 
  },
});