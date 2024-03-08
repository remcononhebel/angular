# Angular Nx monorepo

## Getting started

### Installation

1. Make sure the correct node version is installed. This version can be found in [.nvmrc](./nvmrc). It is highly recommended to use Node Version Manager (nvm) if you use multiple node.js versions on your machine

```shell
$ nvm install <node version from .nvcmrc>
$ nvm use <node version from .nvcmrc>
```

2. Use `npm i` to install the packages required by this

### Starting applications

Use `nx serve <project> -o` to start an application, e.g. `nx serve ngrx-demo -o`

## Unit tests

Unit tests have been implemented using jest and `@ngneat/spectator`. The unit tests for a project can be run in watch mode using `nx test <project> --watch --watch-all`
