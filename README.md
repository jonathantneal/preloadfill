# Preload Fill [<img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" alt="Preload Fill" width="90" height="90" align="right">][Preload Fill]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Licensing][lic-img]][lic-url]
[![Changelog][log-img]][log-url]

[Preload Fill] is a polyfill for the [preload link type].

Visit a [CodePen Example of Preload] demonstrating asynchronously loaded CSS.

**THIS PROJECT IS IN A DRAFT STAGE**

```html
<link href="style.non-critical.css" rel="preload" as="style">
```

## Usage

Install [Preload Fill] to your project.

```sh
npm install jonathantneal/preloadfill --save-dev
```

Import [Preload Fill] within your script.

```js
import 'preloadfill';
```

## Additional Reading

[Smashing Magazine: Preload: What Is It Good For?](https://www.smashingmagazine.com/2016/02/preload-what-is-it-good-for/)

---

[Preload Fill] is 558 bytes after being transpiled, minified, and gzipped.

[Preload Fill]: https://github.com/jonathantneal/preloadfill

[CodePen Example of Preload]: http://codepen.io/jonneal/details/dNdRaj
[preload link type]: https://w3c.github.io/preload/

[npm-url]: https://www.npmjs.com/package/preloadfill
[npm-img]: https://img.shields.io/npm/v/preloadfill.svg
[cli-url]: https://travis-ci.org/jonathantneal/preloadfill
[cli-img]: https://img.shields.io/travis/jonathantneal/preloadfill.svg
[lic-url]: LICENSE.md
[lic-img]: https://img.shields.io/badge/license-CC0--1.0-blue.svg
[log-url]: CHANGELOG.md
[log-img]: https://img.shields.io/badge/changelog-md-blue.svg
