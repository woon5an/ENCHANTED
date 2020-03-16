module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'linebreak-style': 'off',
    'semi': ['error', 'never'],
    "no-underscore-dangle": 'off',
    "no-unused-vars": 0,
    'space-before-function-paren': [

      'error',

      {

        anonymous: 'always',

        named: 'always',

        asyncArrow: 'always',

      },

    ]
  },
};
