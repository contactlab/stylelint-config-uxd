# Contactlab UXD Team Stylelint

[Stylelint](http://stylelint.io/) configuration used in [Contactlab](https://github.com/contactlab) projects.

The purpose of this library is to promote code style consistency across complex projects in organizations of all sizes.

## Installation

Install this config package and Stylelint:

```bash
npm install stylelint-config-uxd --save-dev
```

## Usage

Create a `.stylelintrc` file with the following basic configuration:

```json
{
  "extends": "stylelint-config-uxd"
}
```

This configuration is meant to be extended on a per-project basis as necessary
using Stylelint's shareable configs feature. For more details about how shareable
configs work, see the [Stylelint documentation](https://stylelint.io/user-guide/configuration/#extends).

## Example

```css
/* colors.pcss */

html {
  --my-color-a: #FF0000;
  --my-color-b: #0000FF;
}
```

```css
/* media.pcss */

@custom-media --small (width >= 100px) and (width <= 200px);
```

```css
/* main.pcss */

@import './colors';
@import './media';

.component-a,
.component-b {
  color: var(--my-color-a);
  box-shadow:
    0 0 0 1px #5B9DD9,
    0 0 2px 1px rgba(30, 140, 190, 0.8);
}

@media (--small) {
  .component-a {
    color: var(--my-color-b);
  }
}
```

A more comprehensive list of examples is available in the [examples](https://github.com/contactlab/stylelint-config-uxd/tree/master/examples) folder.

## Tests

```bash
npm install && npm test
```

## Similar projects

A configuration for linting JavaScript (ES5 & ES6) with [eslint](http://eslint.org/) is available at [eslint-config-contactlab](https://github.com/contactlab/eslint-config-contactlab).

## Rules

The configuration extends the default [stylelint-config-standard](https://github.com/stylelint/stylelint-config-standard) rules.

Package specific rules can be found in `/src` folder.

## License

[MIT License](http://opensource.org/licenses/MIT)
