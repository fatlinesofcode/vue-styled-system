module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': ['error', { semi: false, singleQuote: true, printWidth: 120 }],
    semi: [1, 'never'],
    'no-console': [2, { allow: ['warn', 'error'] }]
  }
}
