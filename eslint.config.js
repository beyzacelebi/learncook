import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),

  // React JS dosyaları
  {
    files: ['**/*.{js,jsx}'],
    ignores: ['tailwind.config.js'], // tailwind dosyasını bu kuraldan çıkarıyoruz
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },

  // Node ortamı için (örneğin tailwind.config.js)
  {
    files: ['tailwind.config.js'],
    languageOptions: {
      globals: globals.node,
    },
  },
])
