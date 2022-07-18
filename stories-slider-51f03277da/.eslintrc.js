const rules = {
  'import/no-extraneous-dependencies': 'off',
  'no-param-reassign': ['off'],
  'import/extensions': 'off',
  'react/prop-types': 'off',
};
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ['react'],
  extends: ['airbnb-base', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    ...rules,
  },
  overrides: [
    {
      extends: [
        'plugin:react/recommended',
        'airbnb-base',
        'plugin:prettier/recommended',
      ],
      files: ['**/*.jsx', 'src/react/*.js'],
      plugins: ['react'],
      rules,
    },
    {
      files: ['**/*.svelte'],
      plugins: ['svelte3'],
      processor: 'svelte3/svelte3',
      rules: {
        ...rules,
        'no-restricted-globals': 'off',
      },
    },
    {
      files: ['**/*.vue'],
      extends: ['plugin:vue/vue3-recommended', 'prettier'],
      rules: {
        ...rules,
      },
    },
  ],
};
