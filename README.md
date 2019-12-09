# The opinioned advanced well-structured TypeScript template for Create React App.

## Features included

- Opinioned project structure to create easy-maintainable React project.
- [Hot module replacement](https://github.com/gaearon/react-hot-loader) to immediately see changes of your code in browser.
- [Next.js](https://nextjs.org/)-like [routing](https://reacttraining.com/react-router/web/guides/quick-start).
- Polyfills.
- CSS normalization using [normalize.css](https://necolas.github.io/normalize.css/).
- Built-in [Sass/SCSS](https://sass-lang.com/).
- [VSCode](https://code.visualstudio.com/) debug configuration.
- [Prettier](https://prettier.io/).
- **Production-ready** [Docker](https://www.docker.com/) configuration.

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
