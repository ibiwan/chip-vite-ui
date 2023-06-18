import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve:{alias:{
    component:'/src/component',
    context:'/src/context',
    gql:'/src/gql',
    state:'/src/state',
  }}
})
