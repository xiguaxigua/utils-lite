export function get (target, path, defaultValue) {
  if (!path) return target
  const pathArr = path.split('.')
  let targetTemp = target
  pathArr.map((item, index) => {
    if (targetTemp[item] === undefined) {
      targetTemp = defaultValue
      return true
    } else {
      targetTemp = targetTemp[item]
    }
  })
  return targetTemp
}
