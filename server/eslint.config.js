import baseConfig from '../eslint.config';

export default [
  ...baseConfig,
  {
    files: ['**/*.ts', '**/*.js'],
    languageOptions: {
      sourceType: 'module',
    },
  },
];
