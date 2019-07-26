let prev = Date.now();

function fallback(fn) {
  const curr = Date.now();
  const ms = Math.max(0, 16 - (curr - prev));
  const id = setTimeout(fn, ms);
  prev = curr + ms;
  return id;
}

const iRaf = window.requestAnimationFrame || fallback;
const iCancel = window.cancelAnimationFrame || window.clearTimeout;

export function raf(fn) {
  return iRaf.call(window, fn);
}

export function cancel(id) {
  iCancel.call(window, id);
}