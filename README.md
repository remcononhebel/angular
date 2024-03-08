# Angular Nx monorepo

This is an Angular [Nx](https://nx.dev) monorepo

## Getting started

### Installation

1. Install nx globally:

```shell
npm install nx@latest --global
```

2. Make sure the correct node version is installed. This version can be found in [.nvmrc](./.nvmrc). It is recommended to use Node Version Manager (nvm) if you use multiple node.js versions on your machine

```shell
$ nvm install <node version from .nvcmrc>
$ nvm use <node version from .nvcmrc>
```

2. Use `npm i` to install the packages required by this
3. Activate Husky git hooks by executing `npm run prepare`

It is highly recommended to use VSCode for editing your code, and to install all VSCode extensions mentioned for this repository.

## Starting applications

Use `nx serve <project> -o` to start an application, e.g. `nx serve ngrx-demo -o`

## Unit tests

Unit tests have been implemented using jest and `@ngneat/spectator`. The unit tests for a project can be run in watch mode using `nx test <project> --watch --watch-all`.
Code coverage is forced to be 100% by [Jest presets](./jest.preset.js). Using Husky's prepush hook, the unit tests of the affected projects are executed before the code is pushed to origin. If one of the affected projects' unit tests fail, the push is canceled.

## e2e tests

e2e tests have been implemented using Cypress. The e2e tests for a project can be run in watch mode using `nx e2e <e2e project> --watch`, e.g. `nx test gamepad-poc-e2e --watch-all`

## Development

### Code snippets

Binnen deze repo zijn de volgende Code Snippets beschikbaar, te vinden in `.vscode/remco-nonhebel.code-snippets`:

- `rn-spec-comp`: te gebruiken voor de unit test van een Angular Component
- `rn-spec-service`: te gebruiken voor de unit test van een Angular Service
- `rn-it-foreach`: te gebruiken om een `forEach` met meerdere unit tests cases te maken
- `rn-jest-mock`: te gebruiken voor de eerste opzet van een mock service voor unit tests

## Git

### Automatically create upstream branch

In order to immediate create an upstream branch when a new branch is pushed to origin, you need to execute following command once. This is a system wide setting.

```shell
git config --global push.autoSetupRemote true
```

### Committing code

Use the following command to commit and push your code

```shell
git add .
git commit
git push
```

When code is committed, the following pre-commit actions are done:

1. All changed files are formatted using Prettier
2. All changed code is linted
3. Committizen is started to determine the commit message. Commitlint enforces a commit message according to Conventional Commits

When code is pushed, the following pre-push actions are done

1. Unit tests for all affected projects are executed

## Prettier configuration

It is recommended to install Prettier as VSCode extension. Additionally, enable format on save in your VSCode settings (`"editor.formatOnSave": true` in [VSCode settings](./.vscode/settings.json))

1. `prettier:check` checks all projects, without making changes to the code
2. `prettier:write` checks all projects, and attempts to fix all warnings and errors
