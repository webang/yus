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
export const addZero = num => {
  return num > 9 ? num : `0${num}`
}

/**
 * 将毫秒级的时间戳格式话
 * @param {*} timeStamp
 */
export const parseTimeStamp = timeStamp => {
  const date = new Date(timeStamp)
  return {
    year: date.getFullYear(),
    month: date.getMonth(),
    date: date.getDate(),
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  }
}

/**
 * 标准日期格式正则匹配
 */
export const dateRegExp = /^(\d{4})-(\d{1,2})-(\d{1,2})((\s)(\d{1,2}):(\d{1,2}):(\d{1,2}))?$/

/**
 * 将倒计时时间转换为：天数, 小时，分钟，秒钟
 * @param {*} number
 */
export const parseCountDown = (number) => {
  const day = parseInt(number / 24 / 3600)
  const hour = parseInt((number - day * 24 * 3600) / 3600)
  const minute = parseInt((number - day * 24 * 3600 - hour * 3600) / 60)
  const second = parseInt(number - day * 24 * 3600 - hour * 3600 - minute * 60)
  return { day, hour, minute, second }
}
