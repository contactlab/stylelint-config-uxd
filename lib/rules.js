/**
 * Ruleset
 * @see https://stylelint.io/user-guide/rules/
 * @type Object
 */
module.exports = {
  //
  // String
  // --------------------
  'string-quotes': 'single',

  //
  // Color
  // --------------------
  'color-hex-case': 'upper',

  //
  // General / Sheet
  // --------------------
  'max-empty-lines': 2,
  'max-nesting-depth': 3,
  'no-descending-specificity': null,
  'rule-empty-line-before': null,

  //
  // At rule
  // --------------------
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

  //
  // Property
  // --------------------
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


  //
  // Selector
  //--------------------
  'selector-type-no-unknown': null // No test yet
};
