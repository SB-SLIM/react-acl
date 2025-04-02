import js from '@eslint/js';
import jsdoc from 'eslint-plugin-jsdoc';
import pluginReact from 'eslint-plugin-react';
import { defineConfig } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        project: './tsconfig.json',
        createDefaultProgram: true,
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: { js, jsdoc, pluginReact },
    extends: ['js/recommended'],
    settings: {
      react: {
        version: 'detect',
      },
    },
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
      'jsdoc/require-returns': 2,
      'jsdoc/require-param-type': 2,
      'react/no-is-mounted': [0],
    },
  },

  // JSdoc recommended config
  jsdoc.configs['flat/recommended'],

  // TypeScript recommended config
  tseslint.configs.recommended,

  // React recommended config
  pluginReact.configs.flat.recommended,
]);
