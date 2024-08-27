import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import { format } from 'prettier'
import * as path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'prettier',
      enforce: 'pre',
      transform(code: string, id: string) {
        if (id.endsWith('.jsx') || id.endsWith('.tsx')) {
          const prettierOptions = {
            filepath: id,
            requirePragma: false,
            ...JSON.parse(fs.readFileSync('.prettierrc.json', 'utf-8')),
          };
          return format(code, prettierOptions);
        }
      },
    },
  ],
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
});
