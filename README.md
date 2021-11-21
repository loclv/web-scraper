# blog html scraper - blog migration

TypeScript Node.js Project.

## ✨ Using

- [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager.
- [TypeScript](https://www.typescriptlang.org/) - a strongly typed programming language.
- [Jest](https://jestjs.io/) - a delightful Testing Framework with a focus on simplicity.

```sh
curl -fsSL https://get.pnpm.io/install.sh | sh -
pnpm -v
```

Expected output: version >= `6.14.5`.

## 🏔️ Environment

If you are using [fnm - Node.js version manager](https://github.com/Schniz/fnm):

```sh
fnm use
```

Set your environment variable in `.env` file.

## 🧑🏿‍💻 Build Setup

```sh
# install dependencies
pnpm i

# create `.env`
cp .env.development .env

# 🧑🏿‍💻 Development: serve with hot reload
pnpm dev

pnpm lint
pnpm test

# Compile and transpile the TypeScript code:
pnpm build

# Compile and transpile the TypeScript code, and then runs the resulting `.js` application:
# Starts the app in production
pnpm start
```

If you want to run Unit tests every time you commit code, you can add `pnpm test` to `.husky/pre-commit`.

### Deployment

In develop environment, build first:

```sh
pnpm build
```

In production environment, install dependencies and run builded source:

```sh
pnpm i --production --quiet
pnpm prod
```

## 🏘️ Special Directories

## `media`

The `media` directory is used to store supporting files for the application.
Things like requirement documentation, text outlines, etc.
This is the junk drawer for the project.

### `src`

#### `data`

The `data` directory holds the types (models/entities) and services (repositories) for data consumed by the application.

#### `mock`

The `mock` directory contains your JSON mock data for testing purposes.

## Editor - vscode

### Extensions

- [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- ✨ [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- 🐋 [docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)
- 🐋 [Better DockerFile Syntax](https://marketplace.visualstudio.com/items?itemName=jeff-hykin.better-dockerfile-syntax)
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- [markdown lint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
- [sonar lint](https://marketplace.visualstudio.com/items?itemName=SonarSource.sonarlint-vscode)

Options:

- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
