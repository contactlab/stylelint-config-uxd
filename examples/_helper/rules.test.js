const chalk = require('chalk');
const config = require('../../src/index');
const fs = require('fs');
const rules = require('./rules');
const stylelint = require('stylelint');

rules.forEach(function (rule) {
  const validCSS = fs.readFileSync(`./examples/${rule.name}/css-valid.css`, 'utf-8');
  const invalidCSS = fs.readFileSync(`./examples/${rule.name}/css-invalid.css`, 'utf-8');
  const ruleNameUppercase = rule.name.toUpperCase();

  describe(`\n ${chalk.magentaBright('Flags no warnings with valid css:')} \n`, function () {
    let result;
    beforeEach(function () {
      result = stylelint.lint({
        code: validCSS,
        config
      });
    });

    describe(`${ruleNameUppercase}:`, function () {
      it('did not error', function () {
        return result.then(function (data) {
          expect(data.errored).toBeFalsy();
        });
      });

      it('flags no warnings', function () {
        return result.then(function (data) {
          expect(data.results[0].warnings.length).toBe(0);
        });
      });
    });
  });

  describe(`\n ${chalk.magentaBright('Flags warnings with invalid css:')} \n`, function () {
    let result;
    beforeEach(function () {
      result = stylelint.lint({
        code: invalidCSS,
        config
      });
    });

    describe(`${ruleNameUppercase}:`, function () {
      it(`did error`, function () {
        return result.then(function (data) {
          expect(data.errored).toBeTruthy();
        });
      });

      it(`flags ${rule.warnings} warning`, function () {
        return result.then(function (data) {
          expect(data.results[0].warnings.length).toBe(rule.warnings);
        });
      });

      it(`correct rule flagged`, () => {
        return result.then(function (data) {
          expect(data.results[0].warnings[0].rule).toBe(rule.name);
        });
      });

      it(`correct warning text`, function () {
        return result.then(function (data) {
          expect(data.results[0].warnings[0].text).toBe(rule.warningText);
        });
      });

      it(`correct severity flagged`, function () {
        return result.then(function (data) {
          expect(data.results[0].warnings[0].severity).toBe(rule.severityFlag);
        });
      });

      it(`correct line number`, function () {
        return result.then(function (data) {
          expect(data.results[0].warnings[0].line).toBe(rule.warningLine);
        });
      });

      it(`correct column number`, function () {
        return result.then(function (data) {
          expect(data.results[0].warnings[0].column).toBe(rule.warningCol);
        });
      });
    });
  });
});
