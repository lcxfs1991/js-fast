module.exports = {
    extends: [
        '@commitlint/config-conventional',
    ],
    plugins: [
        {
            rules: {},
        },
    ],
    rules: {
        'header-max-length': [2, 'always', 72],
    },
};
