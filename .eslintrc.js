module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/essential', '@vue/airbnb', '@vue/typescript'],
  rules: {
    'import/no-extraneous-dependencies': 0,
    'linebreak-style': 0,
    'import/extensions': 0,
    'vue/max-attributes-per-line': 0,
    'no-shadow': 0,
    'arrow-parens': 0,
    'max-len': 0,
    'no-param-reassign': 0,
    'vue/attribute-hyphenation': 0,
    'no-underscore-dangle': 0,
    'space-infix-ops': 0,
    'object-curly-newline': 0,
    'no-restricted-globals': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
  },
};
