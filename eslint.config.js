import js from '@eslint/js';
import jsdoc from 'eslint-plugin-jsdoc';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import path from 'path';

// Utilisation de import.meta.url pour obtenir le chemin du fichier
const __dirname = path.dirname(new URL(import.meta.url).pathname);

export default defineConfig([
  jsdoc.configs['flat/recommended'],
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        createDefaultProgram: true,
      },
    },
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    plugins: { js, jsdoc },
    extends: ['js/recommended'],
    rules: {
      '@typescript-eslint/ban-ts-comment': [0],
      '@typescript-eslint/no-redeclare': [2],
      '@typescript-eslint/no-explicit-any': [0],
      '@typescript-eslint/no-unused-vars': [0],
      '@typescript-eslint/ban-types': [0],
      'react/display-name': [0],
      'react/jsx-no-undef': [2],
      'react/jsx-uses-react': [1],
      'react/jsx-wrap-multilines': [2],
      'react/no-string-refs': [0],
      '@typescript-eslint/consistent-type-imports': [
        2,
        { fixStyle: 'separate-type-imports' },
      ],
      '@typescript-eslint/consistent-type-exports': 2,
      'jsdoc/valid-types': 2,
      'jsdoc/require-returns': 3,
      'jsdoc/require-param-type': 3,
      'react/no-is-mounted': [0],
    },
  },
  tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
]);
