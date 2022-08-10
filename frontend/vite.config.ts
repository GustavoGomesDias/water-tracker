import * as path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const config = defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@components', replacement: path.resolve(__dirname, './src/components/index.ts') },
      { find: '@hooks', replacement: path.resolve(__dirname, './src/hooks/index.ts') },
      { find: '@wails', replacement: path.resolve(__dirname, './wailsjs/') },
      { find: '@backend', replacement: path.resolve(__dirname, './wailsjs/go/backend/App') },
    ]
  }
})

// https://vitejs.dev/config/
export default config;
