# TypeScript Node.js Template Project

TypeScript Node.js Project.

## 🌠 Using

- [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager.
- [TypeScript](https://www.typescriptlang.org/) - a strongly typed programming language.
- [Jest](https://jestjs.io/) - a delightful Testing Framework with a focus on simplicity.

```sh
curl -fsSL https://get.pnpm.io/install.sh | sh -
pnpm -v
```

Expected output: version >= `6.14.5`.

## 🏔️ Environment

If you are using [nvm](https://github.com/nvm-sh/nvm#nvmrc):

```sh
nvm use
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

```sh
pnpm i --production --quiet
pnpm prod
```

## 🏘️ Special Directories

### `mock`

The `mock` directory contains your JSON mock data for testing purposes.

## Editor - vscode

### Extensions

- [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- ✨ [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- 🐋 [docker](https://marketplace.visualstudio.com/items?itemName=ms-azuretools.vscode-docker)
- 🐋 [Better DockerFile Syntax](https://marketplace.visualstudio.com/items?itemName=jeff-hykin.better-dockerfile-syntax)
- [Code Spell Checker](https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker)
- [markdown lint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)

Options:

- [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
- [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
