module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'vue/html-closing-bracket-newline': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/multi-word-component-names': [
      'warn',
      {
        ignores: [
          'default',
          '404',
          'home',
          'index',
          'layout',
          'login',
          'register'
        ]
      }
    ]
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './docs/.vitepress/'],
          ['~', './']
        ],
        extensions: ['.tsx', '.ts', '.jsx', '.js', 'vue']
      }
    }
  }
}
