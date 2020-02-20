# Web Application Yeoman Generator

[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]

## About

This Yeoman generator helps you scaffold your next HTML5 application.

### Features

- Bundle with Webpack
- Develop with Webpack Dev Server
- Easy sub page generating and splitting
- Support TypeScript
- Test with Jest

## Installation

First, install [Yeoman](http://yeoman.io) and generator-web-application using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
$ npm install -g yo
$ npm install -g generator-web-application
```

## How to Use

Generate your new project:

```bash
$ mkdir my-app && cd $_
$ yo web-application
```

Create a new page:

```bash
$ yo web-application:page "{YOUR PAGE NAME}"
```

Start the dev server:

```bash
$ npm run start
```

the index page will be launched automatically at `http://localhost:8080/`, to see sub pages, go to `http://localhost:8080/pages/{your-page-name}.html`.

Generate development bundle:

```bash
$ npm run dev
```

Generate production bundle:

```bash
$ npm run build
```

Run ESLint:

```bash
$ npm run lint
```

Run tests:

```bash
$ npm run test
```

## Getting To Know Yeoman

- Yeoman has a heart of gold.
- Yeoman is a person with feelings and opinions, but is very easy to work with.
- Yeoman can be too opinionated at times but is easily convinced not to be.
- Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

The MIT License (MIT)

Copyright (c) 2020 jeantimex

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

[npm-image]: https://badge.fury.io/js/generator-web-application.svg
[npm-url]: https://npmjs.org/package/generator-web-application
[travis-image]: https://travis-ci.org/jeantimex/generator-web-application.svg?branch=master
[travis-url]: https://travis-ci.org/jeantimex/generator-web-application
[daviddm-image]: https://david-dm.org/jeantimex/generator-web-application.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/jeantimex/generator-web-application
[coveralls-image]: https://coveralls.io/repos/jeantimex/generator-web-application/badge.svg
[coveralls-url]: https://coveralls.io/r/jeantimex/generator-web-application
