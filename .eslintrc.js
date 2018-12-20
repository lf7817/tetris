module.exports = {
  extends: [
    'eslint-config-alloy/typescript-react',
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  settings: {
    react: {
      version: '^16.6.3',
      pragma: 'React',
    }
  },
  plugins: [
    'react-hooks'
  ],
  rules: {
    'indent': ["error", 2, { "SwitchCase": 1 }],
    'react/jsx-indent-props': ['error', 2],
    'react-hooks/rules-of-hooks': 'error',
    'typescript/member-ordering': 0
  }
};
