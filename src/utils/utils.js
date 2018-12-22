/**
 * polyfill requestAnimationFrame
 */
export const raf = (typeof window !== 'undefined' && window.requestAnimationFrame) || ((fn) => {
  return setTimeout(fn, 1000 / 60)
})

/**
 * @param {*} string
 * 过滤字符串两侧的空格
 */
export const trim = (string) => {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')
}

/**
 * 给小于10的数字在十位数补0
 * @param {*} num
 */
export const addZero2SingleNum = (num) => {
  return num > 9 ? num : `0${num}`
}
