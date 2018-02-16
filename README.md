# Contactlab UXD Stylelint
[![NPM version](https://img.shields.io/npm/v/@contactlab/stylelint-config-uxd.svg)](https://www.npmjs.com/package/@contactlab/stylelint-config-uxd)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

[Stylelint](http://stylelint.io/) configuration used in [Contactlab](https://github.com/contactlab) projects.

The purpose of this library is to promote code style consistency across complex projects in organizations of all sizes.

## Contents
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Similar projects](#similar-projects)
- [Rules](#rules)
- [Contributing](./CONTRIBUTING.md)
- [Apache License 2.0](http://opensource.org/licenses/MIT)

## Installation
We recommend to use [Yarn](https://yarnpkg.com/lang/en/docs/install/) over npm (is fine anyway) and this **stylelint config** package:

```bash
$ yarn add --dev @contactlab/stylelint-config-uxd
```

## Usage
Create a `.stylelintrc` file with the following basic configuration:

```json
{
  "extends": "@contactlab/stylelint-config-uxd"
}
```

**Otherwise**, add the stylelint key to your `package.json`:

```json
{
  "stylelint": {
    "extends": "@contactlab/stylelint-config-uxd"
  }
}
```

For more details about how shareable configs work, see the [Stylelint documentation](https://stylelint.io/user-guide/configuration/#extends).

## Tests
```bash
$ yarn install && yarn test
```

## Similar projects
A configuration for linting JavaScript (ES5 & ES6) with [eslint](http://eslint.org/) is available at [eslint-config-contactlab](https://github.com/contactlab/eslint-config-contactlab).

## Rules
The configuration extends the default [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) rules. A more comprehensive list of examples is available in the [examples](https://github.com/contactlab/stylelint-config-uxd/tree/master/examples) folder.

Package specific rules can be found in `./lib` folder.