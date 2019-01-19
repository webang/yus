// 星期几
export const dayMap = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']

// 标准日期格式正则匹配
export const dateReg = /^(\d{4})-(\d{1,2})-(\d{1,2})((\s)(\d{1,2}):(\d{1,2}):(\d{1,2}))?$/

// 将毫秒级的时间戳格式话
// export const parseTimeStamp = (time, options = {}) => {
//   if (!options.isSecond) {
//     // 单位为秒
//     time = time * 1000
//   }
//   const obj = new Date(time)
//   const year = obj.getFullYear()
//   const month = obj.getMonth()
//   const date = obj.getDate()
//   const hour = obj.getHours()
//   const minute = obj.getMinutes()
//   const second = obj.getSeconds()

//   return {
//     year,
//     month,
//     date,
//     hour,
//     minute,
//     second
//   }
// }
