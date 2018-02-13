const fs = require('fs');
const config = require('../src/index');
const stylelint = require('stylelint');
const rules = require('./rules');

rules.forEach(rule => {
  const validCSS = fs.readFileSync(`./examples/${rule.name}/css-valid.css`, 'utf-8');
  const invalidCSS = fs.readFileSync(`./examples/${rule.name}/css-invalid.css`, 'utf-8');

  describe('flags no warnings with valid css', () => {
    let result;
    beforeEach(() => {
      result = stylelint.lint({
        code: validCSS,
        config
      });
    });

    it(`rule: ${rule.name.toUpperCase()} — test: did not error`, () => {
      return result.then(data => (
        expect(data.errored).toBeFalsy()
      ));
    });

    it(`rule: ${rule.name.toUpperCase()} — test: flags no warnings`, () => {
      return result.then(data => (
        expect(data.results[0].warnings.length).toBe(0)
      ));
    });
  })

  describe('flags warnings with invalid css', () => {
    let result;
    beforeEach(() => {
      result = stylelint.lint({
        code: invalidCSS,
        config
      });
    });

    it(`rule: ${rule.name.toUpperCase()} — test: did error`, () => {
      return result.then(data => (
        expect(data.errored).toBeTruthy()
      ));
    });

    it(`rule: ${rule.name.toUpperCase()} — test: flags ${rule.warnings} warning`, () => {
      return result.then(data => (
        expect(data.results[0].warnings.length).toBe(rule.warnings)
      ));
    });

    it(`rule: ${rule.name.toUpperCase()} — test: correct rule flagged`, () => {
      return result.then(data => (
        expect(data.results[0].warnings[0].rule).toBe(rule.name)
      ));
    });

    it(`rule: ${rule.name.toUpperCase()} — test: correct warning text`, () => {
      return result.then(data => (
        expect(data.results[0].warnings[0].text).toBe(rule.warningText)
      ));
    });

    it(`rule: ${rule.name.toUpperCase()} — test: correct severity flagged`, () => {
      return result.then(data => (
        expect(data.results[0].warnings[0].severity).toBe(rule.severityFlag)
      ));
    });

    it(`rule: ${rule.name.toUpperCase()} — test: correct line number`, () => {
      return result.then(data => (
        expect(data.results[0].warnings[0].line).toBe(rule.warningLine)
      ));
    });

    it(`rule: ${rule.name.toUpperCase()} — test: correct column number`, () => {
      return result.then(data => (
        expect(data.results[0].warnings[0].column).toBe(rule.warningCol)
      ));
    });
  });
});
