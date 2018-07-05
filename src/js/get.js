export function get (target, path, defaultValue) {
  if (path == null || !target) return target
  const pathArr = path.split ? path.split('.') : [path]
  let targetTemp = target
  pathArr.some((item, index) => {
    if (targetTemp[item] === undefined) {
      targetTemp = defaultValue
      return true
    } else {
      targetTemp = targetTemp[item]
    }
  })
  return targetTemp
}
