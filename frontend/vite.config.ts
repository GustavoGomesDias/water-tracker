import * as path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const config = defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@components', replacement: path.resolve(__dirname, './src/components/index.ts') },
    ]
  }
})

// https://vitejs.dev/config/
export default config;
