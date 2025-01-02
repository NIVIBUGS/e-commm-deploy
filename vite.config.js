import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  "base":"/e-commm-deploy/",
  plugins: [react()],
})
// https://github.com/NIVIBUGS/e-commm-deploy.git