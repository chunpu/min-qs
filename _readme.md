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
