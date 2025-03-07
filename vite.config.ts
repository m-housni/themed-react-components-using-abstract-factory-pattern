import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/themed-react-components-using-abstract-factory-pattern/',
  plugins: [react()],
})
