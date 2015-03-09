min-qs
===

[![NPM version][npm-image]][npm-url]
[![Downloads][downloads-image]][downloads-url]
[![Dependency Status][david-image]][david-url]
[npm-image]: https://img.shields.io/npm/v/min-qs.svg?style=flat-square
[npm-url]: https://npmjs.org/package/min-qs
[downloads-image]: http://img.shields.io/npm/dm/min-qs.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/min-qs
[david-image]: http://img.shields.io/david/chunpu/min-qs.svg?style=flat-square
[david-url]: https://david-dm.org/chunpu/min-qs


Mini Querystring Parse and Stringify Library

Installation
---

```sh
npm i min-qs
```

Usage

just like querystring in node.js

```js
var qs = require('min-qs')
qs.parse('foo=bar')
qs.stringify({foo: 'bar'})
```

No nested or array support, can also custom sep and eq

```js
qs.parse('a:1;b:2', ';', ':')
```

License
---

[![License][license-image]][license-url]

[license-image]: http://img.shields.io/npm/l/min-qs.svg?style=flat-square
[license-url]: #
