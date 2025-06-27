import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(() => ({
  envPrefix: 'PUBLIC_',
  envDir: '..',
  plugins: [
    react(),
  ],
  build: {
    outDir: 'build',
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name]-[hash][extname]',
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js'
      }
    },
  },
  esbuild: {
    minifyIdentifiers: false,
  },
  server: {
    port: 3000,
  }
}));
