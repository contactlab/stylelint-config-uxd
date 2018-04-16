/**
 * Ruleset
 * @see https://stylelint.io/user-guide/rules/
 */
module.exports = {
  /**
   * String
   */
  'string-quotes': 'single',

  /**
   * Color
   */
  'color-hex-case': 'upper',

  /**
   * General/Sheet
   */
  'max-empty-lines': 2,
  'max-nesting-depth': 3,
  'no-descending-specificity': null,
  'rule-empty-line-before': null,

  /**
   * At rules
   */
  'at-rule-empty-line-before': null,
  'at-rule-no-unknown': [
    true,
    {
      'ignoreAtRules': [
        'define-mixin',
        'mixin'
      ]
    }
  ],

  /**
   * Properties
   */
  'property-no-vendor-prefix': true,
  'property-no-unknown': [
    true,
    {
      'ignoreProperties': [
        'contain',
        'appearance'
      ]
    }
  ],

  /**
   * Selectors
   */
  'selector-type-no-unknown': null
};
