/* eslint-disable no-undef */

module.exports = {
    root: true,
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true
        },
    },
    settings: {
        react: {
            version: '16.9.49'
        },
    },
    plugins: [
        '@typescript-eslint',
        'react',
        'react-hooks'
    ],
    rules: {
        "@typescript-eslint/no-unused-vars": "off",
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'prettier',
        'prettier/react',
        'prettier/@typescript-eslint'
    ],
};
