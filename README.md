# Create React App w/ TypeScript & Docker

## Getting started

See [Create React App](https://facebook.github.io/create-react-app/docs/getting-started) documentation.
**NOTE:** To enable VSCode linting, please follow [this instruction](https://facebook.github.io/create-react-app/docs/setting-up-your-editor#displaying-lint-output-in-the-editor).

## Working with Docker

To build container simply run:

```bash
docker build -t react-app .
```

And to run container follow this:

```bash
docker run -p 8000:80 react-app
```
