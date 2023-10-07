module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        '@ecomfe/eslint-config',
        '@ecomfe/eslint-config/typescript',
        'plugin:@typescript-eslint/recommended',
        'eslint:recommended',
        'plugin:react/recommended',
    ],
    overrides: [],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react', 'react-hooks', 'prettier'],
    rules: {
        indent: ['error', 4, {SwitchCase: 1}],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-console': ['error', {allow: ['warn', 'error']}],
        'no-duplicate-imports': 'error',
        'no-var': 'error',
        'import/no-unresolved': 'off',
        'no-unused-vars': 'off', // 关掉eslint no-unused-vars默认配置
        'max-nested-callbacks': ['warn', 4], // 循环最多4层，超过4层警告
        'brace-style': ['error', '1tbs', {allowSingleLine: true}],
    },
};
