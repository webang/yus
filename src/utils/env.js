export const isAndroid = () => {
  const u = navigator.userAgent
  return u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
}

export const isIOS = () => {
  const u = navigator.userAgent
  return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
}

export const isWechat = () => {
  return /MicroMessenger/i.exec(navigator.userAgent) !== null
}
