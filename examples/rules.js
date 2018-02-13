module.exports = [
  {
    name: 'string-quotes',
    warningText: 'Expected single quotes (string-quotes)',
    warnings: 1,
    warningLine: 1,
    warningCol: 14,
    severityFlag: 'error'
  }, {
    name: 'color-hex-case',
    warningText: 'Expected \"#fff\" to be \"#FFF\" (color-hex-case)',
    warnings: 1,
    warningLine: 1,
    warningCol: 12,
    severityFlag: 'error'
  }, {
    name: 'max-empty-lines',
    warningText: 'Expected no more than 2 empty lines (max-empty-lines)',
    warnings: 1,
    warningLine: 5,
    warningCol: 1,
    severityFlag: 'error'
  }, {
    name: 'max-nesting-depth',
    warningText: 'Expected nesting depth to be no more than 3 (max-nesting-depth)',
    warnings: 2,
    warningLine: 5,
    warningCol: 9,
    severityFlag: 'error'
  }, {
    name: 'at-rule-no-unknown',
    warningText: 'Unexpected unknown at-rule \"@unknown\" (at-rule-no-unknown)',
    warnings: 3,
    warningLine: 1,
    warningCol: 1,
    severityFlag: 'error'
  }, {
    name: 'property-no-vendor-prefix',
    warningText: 'Unexpected vendor-prefix \"-webkit-transform\" (property-no-vendor-prefix)',
    warnings: 2,
    warningLine: 1,
    warningCol: 5,
    severityFlag: 'error'
  }, {
    name: 'property-no-unknown',
    warningText: 'Unexpected unknown property \"colr\" (property-no-unknown)',
    warnings: 1,
    warningLine: 2,
    warningCol: 3,
    severityFlag: 'error'
  }
];