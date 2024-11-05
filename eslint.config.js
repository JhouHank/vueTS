import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginVue from 'eslint-plugin-vue';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
// npx eslint --inspect-config

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,vue}'],
    languageOptions: {
      globals: globals.browser,
    },
  },
  // JS 推薦的 eslint 規則
  {
    ...pluginJs.configs.recommended,
  },
  // TS 推薦的 eslint 規則
  {
    ...tseslint.configs.recommended[0],
    rules: {
      ...tseslint.configs.recommended[0].rules,
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
  // Vue 推薦的 eslint 規則
  ...pluginVue.configs['flat/recommended'],
  // Prettier 推薦的 eslint 規則
  eslintPluginPrettierRecommended,
  // 自定義規則
  {
    rules: {
      // 'vue/no-unused-vars': 'error',
      'no-unused-vars': ['error', { varsIgnorePattern: '^(cn|_)$' }],
      'vue/multi-word-component-names': 'off',
      'vue/require-default-prop': 'off',
      'prettier/prettier': 'error',
      // 解決 LF / CRLF 的問題
      // 最根本解法是：在拉專案前輸入 git config --global core.autocrlf false
    },
  },
  // 對 Vue 文件使用特定的解析器
  {
    files: ['**/*.vue'],
    languageOptions: { parserOptions: { parser: tseslint.parser } },
  },
];
