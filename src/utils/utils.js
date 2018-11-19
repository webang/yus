const rafMock = (fn) => {
  return setTimeout(fn, 1000 / 60)
}

export const raf = window.requestAnimationFrame || rafMock
