![download](https://img.shields.io/npm/dm/utils-lite.svg)
![version](https://img.shields.io/npm/v/utils-lite.svg)
![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/utils-lite.svg)
![language](https://img.shields.io/badge/language-javascript-yellow.svg)
![License](https://img.shields.io/badge/license-MIT-000000.svg)

## Install

`npm i utils-lite -S`

## Start JS

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

## Start CSS

Now css utils package has three file type: less, sass, stylus as `index.less`/
`index.sass`/`index.styl`, you can choose one and import to you project, for example

```less
@import 'project-path/node_modules/utils-lite/index.less';
.test {
  .text-ellipsis
}
```

```less
@import 'project-path/node_modules/utils-lite/index.sass';
.test {
  @include text-ellipsis;
}
```

```less
@import 'project-path/node_modules/utils-lite/index.styl';
.test
  text-ellipsis();
```

## JS Utils List

### debounce
```js
debounce(<fn>, <delay>)
```

### throttle
```js
throttle(<fn>, <wait>, [delay])
```

### get
```js
get(<target>, <path>, [default])
```
> path format: 'a.b.c'

### set
```js
set(<target>, <path>, <value>)
```

### clone
```js
clone(<target>)
```

### cloneDeep
```js
cloneDeep(<target>)
```

### getType
```js
getType(<target>)
```

### isObject
```js
isObject(<target>)
```

### isArray
```js
isArray(<target>)
```

### getStore
```js
getStore(<key>)
```

### setStore
```js
setStore(<key>, <value>)
```

## CSS Utils List

### text-ellipsis

```less
.target {
  .text-ellipsis
}
```

### text-loading

```less
.target {
  .text-loading([time])
}
```

## License

MIT
