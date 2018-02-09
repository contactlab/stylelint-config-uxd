'use strict';

var _rules = require('./rules');

var _rules2 = _interopRequireDefault(_rules);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Stylelint configuration used in Contactlab projects.
 * @see http://stylelint.io/?/docs/user-guide/rules.md
 * @type Object
 */
module.exports = {
  extends: 'stylelint-config-standard',
  rules: _rules2.default
}; /* global module */

// Stylelint doesn't support Babel 6 default exports,
// so we have to use CommonJS exports instead.