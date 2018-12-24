export const objectPrototypeTostring = Object.prototype.toString

export const isType = (name, type) => {
  return objectPrototypeTostring(name) === `[object ${type}]`
}

export const isUndefined = (argv) => {
  return objectPrototypeTostring.call(argv) === '[object Undefined]'
}

export const isString = (argv) => {
  return objectPrototypeTostring.call(argv) === '[object String]'
}

export const isPlainObject = (argv) => {
  return objectPrototypeTostring.call(argv) === '[object Object]'
}

export const isArray = (argv) => {
  return objectPrototypeTostring.call(argv) === '[object Array]'
}

export const isFunction = () => {
  return objectPrototypeTostring.call(argv) === '[object Function]'
}
