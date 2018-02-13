# Contributing Guidelines

Some basic conventions for contributing to **stylelint-config-uxd**.

### General

Please make sure that there aren't existing pull requests attempting to address the issue mentioned. Likewise, please check for issues related to update, as someone else may be working on the issue in a branch or fork.

* Please open a discussion in a new issue / existing issue to talk about the changes you'd like to bring
* Develop in a topic branch, not master/develop

When creating a new branch, prefix it with the *type* of the change (see section **Commit Message Format** below), the associated opened issue number, a dash and some text describing the issue (using dash as a separator).

For example, if you work on a bugfix for the issue #361, you could name the branch `fix361-template-selection`.

### Tools

* Prefer latest [Node](https://nodejs.org/en/download/) version
* Use [Yarn](https://yarnpkg.com/lang/en/docs/install/) over npm

### Testing & Linting

Please test and check your code using `npm run test` or `yarn test` before submitting your pull requests.

### Commit Message Format

Each commit message should include a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
```

Lines should not exceed 100 characters. This allows the message to be easier to read on github as well as in various git tools and produces a nice, neat commit log ie:

```
#271 feat: Add 'color-no-invalid-hex' rule
#270 style: Add semicolons after every statement
#269 refactor: Update rule 'unit-no-unknown' test
```

#### Type

Must be one of the following:

* **feat**: A new feature
* **fix**: A bug fix
* **docs**: Documentation only changes
* **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
* **refactor**: A code change that neither fixes a bug or adds a feature
* **test**: Adding missing tests
* **chore**: Changes to the build process or auxiliary tools and libraries such as documentation generation

#### Subject

The subject contains succinct description of the change:

* Use the imperative, present tense: "change" not "changed" nor "changes"
* Capitalize first letter
* No dot (.) at the end