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

  //
  // At rule
  // --------------------
  'at-rule-empty-line-before': ['always', // require an empty line before @rules
  {
    except: ['first-nested', // reverse the primary option for at-rules that are nested and the first child of their parent
    'blockless-group' // reverse the primary option for at-rules within a blockless group
    ],
    ignore: ['after-comment' // ignore rules that come after a comment
    ]
  }],

  //
  // Property
  // --------------------
  'property-no-vendor-prefix': true, // disallow vendor prefixes for properties


  //
  // Wait for testing
  //--------------------
  "no-missing-end-of-source-newline": true,
  "no-descending-specificity": null,
  "selector-type-no-unknown": null,
  "rule-empty-line-before": null,
  "max-nesting-depth": 3,
  "property-no-unknown": [true, {
    "ignoreProperties": ["contain", "appearance"]
  }],
  "at-rule-no-unknown": [true, {
    "ignoreAtRules": ["define-mixin", "mixin"]
  }]
};