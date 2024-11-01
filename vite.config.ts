import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// @ts-expect-error - no TS types yet for beta test.
import PluginObject from 'babel-plugin-react-compiler'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [[PluginObject],react()],
})