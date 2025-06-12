import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    server: {
      port: 3000,
    },
  };

  if (command === 'build') {
    config.base = '/blitar-keren/';
  }

  return config;
});
