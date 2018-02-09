'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Ruleset
 * @see https://stylelint.io/user-guide/rules/
 * @type Object
 */
exports.default = {
  //
  // String
  // --------------------
  'string-quotes': 'single',

  //
  // Color
  // --------------------
  'color-hex-case': 'upper', // enforce uppercase hex colors

  //
  // General / Sheet
  // --------------------
  'max-empty-lines': 2, // disallow more than a specified number of adjacent empty lines
  'max-nesting-depth': 3, // No test yet
  'no-missing-end-of-source-newline': true, // No test yet
  'no-descending-specificity': null, // No test yet
  'rule-empty-line-before': null, // No test yet

  //
  // At rule
  // --------------------
  'at-rule-empty-line-before': null, // No test yet
  'at-rule-no-unknown': [// No test yet
  true, {
    'ignoreAtRules': ['define-mixin', 'mixin']
  }],

  //
  // Property
  // --------------------
  'property-no-vendor-prefix': true, // disallow vendor prefixes for properties
  'property-no-unknown': [// No test yet
  true, {
    'ignoreProperties': ['contain', 'appearance']
  }],

  //
  // Selector
  //--------------------
  'selector-type-no-unknown': null // No test yet
};