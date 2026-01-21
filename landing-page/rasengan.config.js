import { defineConfig } from 'rasengan';
import { rasengan } from 'rasengan/plugin';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  vite: {
    plugins: [rasengan()],
    resolve: {
      alias: {
        react: path.resolve(__dirname, './node_modules/react'),
        'react-dom': path.resolve(__dirname, './node_modules/react-dom'),
        '@': path.resolve(__dirname, './src'),
      },
    },
  },
});
