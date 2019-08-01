export const objToStr = Object.prototype.toString;

export function isType(name, type) {
  return objToStr(name) === `[object ${type}]`;
}

export function isUndefined(value) {
  return objToStr.call(value) === '[object Undefined]';
}

export function isString(value) {
  return objToStr.call(value) === '[object String]';
}

export function isPlainObject(value) {
  return objToStr.call(value) === '[object Object]';
}

export function isArray(value) {
  return objToStr.call(value) === '[object Array]';
}

export function isFunction(value) {
  return objToStr.call(value) === '[object Function]';
}

export function isDef(value) {
  return value !== undefined && value !== null;
}
