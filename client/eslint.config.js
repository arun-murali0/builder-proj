import baseConfig from '../eslint.config';
import nextPlugin from '@next/eslint-plugin-next';

export default [
  ...baseConfig,
  {
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
];
