export default {
  is (name) {
    const ua = window.navigator.userAgent
    let result
    switch (name) {
      case 'ios':
        result = ua.indexOf(name) !== -1
        break
      case 'android':
        result = ua.indexOf(name) !== -1
        break
      default:
    }
    return result
  }
}
