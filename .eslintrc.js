module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-typescript',
],
  parserOptions: {
    project: './tsconfig.eslint.json',
    createDefaultProgram: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src/'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    'react/jsx-props-no-spreading': 'off',
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/no-unused-expressions': 'off',
    '@typescript-eslint/no-shadow': 'off',
    'consistent-return': 'off',
    'no-param-reassign': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'no-underscore-dangle': 'off',
    'operator-linebreak': 'off',
    'prefer-destructuring': 'off',
    'no-empty': 'off',
    'import/no-cycle': 'off',
    'jsx-filename-extension': 'off',
    'react/jsx-filename-extension': 'off',
    'import/no-named-as-default': 'off',
    'react/require-default-props': 'off',
    'import/no-webpack-loader-syntax': 'off',
    'no-useless-escape': 'off',
    'react/destructuring-assignment': 'off',
    'react/no-unused-prop-types': 'off',
    'no-nested-ternary': 'off',
    'global-require': 'off',
    'no-await-in-loop': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'import/no-extraneous-dependencies': 'off', // TODO: пересмотреть
    'jsx-a11y/img-redundant-alt': 'off', // TODO: пересмотреть
    'guard-for-in': 'off', // TODO: пересмотреть
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
  },
};

