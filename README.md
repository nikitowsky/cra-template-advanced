# Advanced Create React App template with TypeScript & Docker

## Getting started

```bash
npx create-react-app my-app --template advanced

# or

yarn create react-app my-app --template advanced
```

More details can be found on [Create React App](https://facebook.github.io/create-react-app/docs/getting-started) documentation.
**NOTE:** To enable VSCode linting, please follow [this instruction](https://facebook.github.io/create-react-app/docs/setting-up-your-editor#displaying-lint-output-in-the-editor).

## Working with Docker

To build container simply run:

```bash
docker build -t react-app .
```

And to run **production-ready** container follow this:

```bash
docker run -p 8000:80 react-app
```
