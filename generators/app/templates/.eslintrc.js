module.exports = {
  extends: ['plugin:@typescript-eslint/recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier'],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.js', '.ts'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.json', '.ts'],
        paths: ['src'],
      },
      typescript: {},
    },
  },
  rules: {
    '@typescript-eslint/indent': [2, 2],
    '@typescript-eslint/no-var-requires': 0,
  },
  globals: {
    document: false,
  }
};
