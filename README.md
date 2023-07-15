<p align="center">
 <img width="400px" src="https://res.cloudinary.com/ydevcloud/image/upload/v1662120202/yassi/xqfnpbpagjkccvdoogos.svg" align="center" alt="gdrive" />
</p>

<br>

<p align="center">
an express api starter template with dynamic routes, Powered by
<br>
</p>

<p align="center">
  <img width="200px" src="https://res.cloudinary.com/ydevcloud/image/upload/v1662120635/yassi/r923h19buxqfs5ouzzf6.svg" align="center" alt="express" />
</p>

<br>

<p align="center">
  <img src="https://res.cloudinary.com/ydevcloud/image/upload/v1657122244/yassi/goafdvoalju7ty1seuqo.gif" alt="star-repo" style="border-radius: 5px;">
  <br>
</p>

![📟](https://res.cloudinary.com/ydevcloud/image/upload/v1656874185/asm9cp84cbuuqmarw9wq.png)

## ❯ Usage

Requires Node.js 15.0 or higher download & install for [Windows](https://nodejs.org/en/download/) or [Linux](https://nodejs.org/en/download/)

```sh
# Recommended.
npx ex-api-cli --directory my-api-name

# OR an alternative global install.
npm install -g ex-api-cli
```

### API includes

Server utilities:

-   [Express](https://expressjs.com/)
    -   Fast, unopinionated, minimalist web framework for Node.js
-   [helmet](https://www.npmjs.com/package/helmet)
    -   Helmet helps you secure your Express apps by setting various HTTP headers. It's not a silver bullet, but it can help!
-   [dotenv](https://www.npmjs.com/package/dotenv)
    -   Dotenv is a zero-dependency module that loads environment variables from a `.env` file into `process.env`
-   [cors](https://www.npmjs.com/package/cors)
    -   CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
-   [response-time](https://www.npmjs.com/package/response-time)
    -   response-time is a node.js package for creating a middleware that records the response time for requests in HTTP servers.
-   [serve-favicon](https://www.npmjs.com/package/serve-favicon)
    -   serve-favicon is a node.js package for serving the favicon.
-   [compression](https://www.npmjs.com/package/compression)
    -   compression is a node.js package for compressing response bodies.
-   [http-status-code](https://www.npmjs.com/package/http-status-codes)
    -   Constants enumerating the HTTP status codes. Based on the Java Apache HttpStatus API.
-   [signale](https://www.npmjs.com/package/signale)
    -   signale is a Hackable and configurable to the core, signale can be used for logging purposes, status reporting, as well as for handling the output rendering process of other node modules and applications.

Development utilities:

-   [nodemon](https://www.npmjs.com/package/nodemon)
    -   nodemon is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
-   [@types/express](https://www.npmjs.com/package/@types/express)
    -   @types/express is a node.js package that contains type definitions for Express.js.
-   [@types/node](https://www.npmjs.com/package/@types/node)
    -   @types/node is a node.js package that contains type definitions for Node.js.
-   [prettier](https://www.npmjs.com/package/prettier)
    -   Prettier is an opinionated code formatter. It enforces a consistent style by parsing your code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.

### Setup

```sh
pnpm install

# OR
npm install
```

### Format

```sh
pnpm run format

# OR
npm run format
```

### Development

```sh
pnpm run dev

# OR
npm run dev
```

<br>

![⚙️](https://res.cloudinary.com/ydevcloud/image/upload/v1656874522/fmfktytvymbnnc0fg4zz.png)

## ❯ Project structure

```
ex-api-template
│   .env.example
│   .prettierrc
│   .gitignore
│   Dockerfile
│   LICENCE
│   package.json
│   pnpm-lock.yaml
│   README.md
│   server.js
│
├───.github
│──────workflows
│           release.yml
├───.vscode
│       extensions.json
├───controllers
│       main.controller.js
│
├───helpers
│       apiResponse.js
│       logger.js
│
├───middlewares
│       notFoundHandler.js
│
└───routes
        healthcheck.js
        index.js
```

<br>

![🙌](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/connect.png)

## ❯ Contributing

Pull requests and stars are always welcome. For bugs and features requests, [please create an issue](../../issues/new).

<br>

<p align="center">
  <img src="https://res.cloudinary.com/ydevcloud/image/upload/v1657122244/yassi/goafdvoalju7ty1seuqo.gif" alt="star-repo" style="border-radius: 5px;">
  <br>
</p>

<br>

![📃](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/license.png)

## ❯ License

Copyright © 2023-present, [Ysn4Irix](https://github.com/Ysn4Irix).
Released under the [MIT License](LICENSE).
