
/** 深拷贝 目前只支持基本数据类型 Object Array */
function deepCopy(data) {
  // 如果data为原始类型，则直接返回
  if (isPrimitiveValue(data)) return data

  const clone = data instanceof Array ? [] : {}

  for (let i in data) {
    const item = data[i]
    clone[i] = (item instanceof Object) ? deepCopy(item) : item
  }

  return clone
}

/** 是否为原始对象 */
function isPrimitiveObject(value) {
  return toString.call(value) === '[object Object]' || toString.call(value) === '[object Array]'
}

/** 是否为基本类型 */
function isPrimitiveValue(value) {
  return !(value instanceof Object)
}

/** 是否为有效属性 */
function isValidProperty(target, props) {
  return (
    target.hasOwnProperty(props) &&
    Object.getOwnPropertyDescriptor(target, props).enumerable &&
    Object.getOwnPropertyDescriptor(target, props).configurable
  )
}

module.exports.deepCopy = deepCopy
module.exports.isPrimitiveValue = isPrimitiveValue
module.exports.isPrimitiveObject = isPrimitiveObject
module.exports.isValidProperty = isValidProperty