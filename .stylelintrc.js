module.exports = {
    processors: [],
    plugins: [],
    extends: ['@ecomfe/stylelint-config'],
    rules: {
        // 自定义规则，可参考官方：https://stylelint.docschina.org/user-guide/rules/
        'comment-empty-line-before': null, // 块级注释之前的空行
        'no-invalid-double-slash-comments': null, // 允许单行注释
        'rule-empty-line-before': null, // 选择器前的空行
        'number-leading-zero': 'always',
    },
};
