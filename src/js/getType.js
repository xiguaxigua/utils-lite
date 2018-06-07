export function getType (v) {
  return Object.prototype.toString.call(v)
}

export function isObject (v) {
  return getType(v) === '[object Object]'
}

export function isArray (v) {
  return getType(v) === '[object Array]'
}

export function isFunction (v) {
  return getType(v) === '[object Function]'
}
