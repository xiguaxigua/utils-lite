# utils-lite

> smaller js utils

![download](https://img.shields.io/npm/dm/utils-lite.svg)
![version](https://img.shields.io/npm/v/utils-lite.svg)
![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/utils-lite.svg)
![language](https://img.shields.io/badge/language-javascript-yellow.svg)
![License](https://img.shields.io/badge/license-MIT-000000.svg)

## Install

`npm i utils-lite -S`

## Start

#### use npm

```js
import { debounce } from 'utils-lite'
// commonjs package is 'utils-lite/lib/index.cjs.js'
debounce(() => {
  // code...
}, 1000)
```

#### use cdn 

```html
<script src="https://unpkg.com/utils-lite/lib/index.umd.min.js"></script>
<script>
UtilsLite.debounce(function () {
  // code ...
}, 1000)
</script>
```

## Utils List

### debounce
```js
debounce(fn, delay)
```

## License

MIT
