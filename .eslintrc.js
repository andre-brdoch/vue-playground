module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:prettier/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  ignorePatterns: ['!.prettierrc.js', '!.storybook'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',

    'vue/html-self-closing': [
      2,
      { html: { void: 'always', normal: 'never', component: 'always' } },
    ],
  },
  overrides: [
    {
      files: ['**/__tests__/*.{j,t}s?(x)', '**/*.test.{j,t}s?(x)'],
      env: {
        jest: true,
      },
      rules: {
        'vue/one-component-per-file': 0,
      },
    },
  ],
}
