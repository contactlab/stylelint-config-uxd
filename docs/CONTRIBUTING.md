# Contributing Guidelines
Some basic conventions for contributing to **stylelint-config-uxd**.

## Contents
- [First Contribution](#first-contribution)
- [Tools](#tools)
- [General](#general)
- [Forking](#forking)
- [Cloning and Building](#cloning-and-building)
- [Testing and Linting](#testing-and-linting)
- [Branching](#branching)
- [Commit Message Format](#commit-message-format)

## 📚 First Contribution?
Working on your first Pull Request? You can learn how from this **free series**, [How to Contribute to an Open Source Project on GitHub](https://egghead.io/courses/how-to-contribute-to-an-open-source-project-on-github).

## 🛠️ Tools
* Prefer latest [Node](https://nodejs.org/en/download/) version
* Use [Yarn](https://yarnpkg.com/lang/en/docs/install/) over npm

## 📝 General
Please make sure that there aren't existing pull requests attempting to address the issue mentioned. Likewise, please check for issues related to update, as someone else may be working on the issue in a branch or fork.

* Please open a discussion in a new issue / existing issue to talk about the changes you'd like to bring
* Develop in a topic branch, not `master` or `develop`

## 👷 Forking
If you do not have direct write access, please fork this repository.

When you are happy with your changes, submit a pull request for code review.

## 📦 Cloning and Building
1. `git clone https://github.com/contactlab/stylelint-config-uxd.git`
2. `cd stylelint-config-uxd`
3. `yarn install`
4. `yarn build`

## 🚨 Testing and Linting
Please, test and check your code using `npm run test` or `yarn test` before submitting your pull requests.

## 🚧 Branching
We follow a [Gitflow workflow](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow).

We try to keep two main branches at all times:

- `master` for production
- `develop` for current development, a branch off `master`

#### Branch Prefixes
When branching, try to prefix your branch with one of the following:

 Prefix     | Description           | Example                                   |
------------|-----------------------|-------------------------------------------|
 `feature/` | New feature was added | `feature/add-learning-outcome-alignment`  |
 `fix/`     | A bug was fixed       | `fix/crash-when-code-submission-finished` |

## 💬 Commit Message Format
Each commit message should include a **type** and a **subject**:

```
<type>: <subject>
```

Lines should not exceed 100 characters. This allows the message to be easier to read on github as well as in various git tools and produces a nice, neat commit log ie:

```
#271 feat: add 'color-no-invalid-hex' rule
#270 fix: add semicolons after every statement
#269 chore: update 'usage' paragraph
```

#### Type
Must be one of the following:

| Prefix  | Description                                                         |
|---------|---------------------------------------------------------------------|
| `docs`  | Changes to the documentation.                                       |
| `feat`  | A new feature.                                                      |
| `fix`   | A bug fix.                                                          |
| `chore` | Changes to the build process or auxiliary tools and libraries.      |
| `test`  | Adding missing tests, refactoring tests; no production code change. |

#### Subject
The subject contains succinct description of the change:

* Use the imperative, present tense: "change" not "changed" nor "changes"
* Don't capitalize first letter
* No dot (.) at the end