# TypeScript Node.js Template Project

TypeScript Node.js Project.

## 🌠 Using

- [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager
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

Using node `v16.8.0`.

Set your environment variable in `.env` file.

## 🧑🏿‍💻 Build Setup

```sh
# install dependencies
pnpm i

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

## 🏘️ Special Directories

### `mock`

The `mock` directory contains your JSON mock data for testing purposes.
