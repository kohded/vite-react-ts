module.exports = {
  extends: [
    'stylelint-config-standard',
    // Installs: stylelint-order, stylelint-scss
    'stylelint-config-sass-guidelines',
    // Reinstall after this is merged: https://github.com/YozhikM/stylelint-a11y/pull/66
    // 'stylelint-a11y/recommended',
    // https://github.com/prettier/stylelint-prettier#user-content-recommended-configuration
    'stylelint-prettier/recommended',
  ],
  ignoreFiles: ['dist/**'],
  plugins: [
    'stylelint-high-performance-animation',
    // https://github.com/AndyOGo/stylelint-declaration-strict-value#user-content-usage
    'stylelint-declaration-strict-value',
    'stylelint-no-unsupported-browser-features',
  ],
  rules: {
    'at-rule-empty-line-before': [
      'always',
      {
        except: ['inside-block'],
        ignore: ['after-comment', 'blockless-after-same-name-blockless'],
      },
    ],
    'plugin/no-low-performance-animation-properties': true,
    'plugin/no-unsupported-browser-features': [
      true,
      {
        severity: 'warning',
      },
    ],
    'scale-unlimited/declaration-strict-value': [],
    'selector-max-id': 1,
    'value-keyword-case': [
      'lower',
      {
        ignoreKeywords: ['/is([A-Z]?[a-z]*)*/'],
      },
    ],
  },
};
