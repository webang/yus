const rafMock = (fn) => {
  return setTimeout(fn, 1000 / 60)
}

export const raf = window.requestAnimationFrame || rafMock

export const trim = (string) => {
  return (string || '').replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, '')
}
