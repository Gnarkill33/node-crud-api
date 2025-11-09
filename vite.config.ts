import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    ssr: true,
    outDir: 'dist',
    lib: {
      entry: './src/server.ts',
      formats: ['es'],
      fileName: () => 'server.js',
    },
    rollupOptions: {
      external: ['node:http', 'node:fs', 'node:path'],
    },
    minify: false,
  },
});
