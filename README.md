# Contactlab UXD Stylelint

[Stylelint](http://stylelint.io/) configuration used in [Contactlab](https://github.com/contactlab) projects.

The purpose of this library is to promote code style consistency across complex projects in organizations of all sizes.

## Installation

Install Stylelint and this config package:

```bash
$ npm install --save-dev stylelint stylelint-config-uxd

# --- OR ---

$ yarn add --dev stylelint stylelint-config-uxd
```

## Usage

Create a `.stylelintrc` file with the following basic configuration:

```json
{
  "extends": "stylelint-config-uxd"
}
```

In `package.json`:

```json
{
  "name": {
    ...
  },
  "version": {
    ...
  },
  "stylelint": {
    "extends": "stylelint-config-uxd"
  },
  "devDependencies": {
    ...
  }
}
```

For more details about how shareable configs work, see the [Stylelint documentation](https://stylelint.io/user-guide/configuration/#extends).

## Tests

```bash
$ npm install && npm test

# --- OR ---

$ yarn install && yarn test
```

## Similar projects

A configuration for linting JavaScript (ES5 & ES6) with [eslint](http://eslint.org/) is available at [eslint-config-contactlab](https://github.com/contactlab/eslint-config-contactlab).

## Rules

The configuration extends the default [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) rules. A more comprehensive list of examples is available in the [examples](https://github.com/contactlab/stylelint-config-uxd/tree/master/examples) folder.

Package specific rules can be found in `/src` folder.

## License

[MIT License](http://opensource.org/licenses/MIT)
