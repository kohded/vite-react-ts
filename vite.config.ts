import fs from 'fs';
import react from '@vitejs/plugin-react';
import { defineConfig, loadEnv } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import manifest from './manifest.json';

const https = {
  cert: fs.readFileSync('./config/ssl/cert.pem'),
  key: fs.readFileSync('./config/ssl/key.pem'),
};

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // https://main.vitejs.dev/config/#using-environment-variables-in-config
  const env = loadEnv(mode, process.cwd());
  const isProduction = mode === 'production';
  // eslint-disable-next-line no-console
  console.log('vite.config.js: ', 'env', env, 'isProduction', isProduction);

  return {
    plugins: [
      react(),
      VitePWA({
        injectRegister: 'auto',
        devOptions: {
          enabled: true,
        },
        manifest,
        registerType: 'autoUpdate',
        workbox: {
          globPatterns: ['**/*.{css,html,js,png,woff2}'],
          // https://github.com/vite-pwa/vite-plugin-pwa/issues/120#issuecomment-1202579983
          navigateFallback: null,
        },
      }),
    ],
    preview: {
      https,
      port: 443,
    },
    server: {
      https,
      port: 3000,
    },
  };
});
