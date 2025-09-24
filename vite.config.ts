import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/mb-privacy/' // ← 프로젝트 페이지일 때 필수!
})
