import Vue from 'vue'
import { trim } from './utils'

const isServer = Vue.prototype.$isServer

export function hasClass (el, cls) {
  if (!el || !cls) {
    throw new Error('argument error.')
  }

  if (cls.indexOf(' ') !== -1) {
    throw new Error('className should not contain space.')
  }

  if (el.classList && el.classList.contains) {
    return el.classList.contains(cls)
  } else {
    return (' ' + el.className + ' ').indexOf(' ' + cls + ' ') > -1
  }
}

export function addClass (el, cls) {
  if (!el || !cls) return

  const curClassStr = el.className
  const classList =  (cls || '').split(' ')

  for (let i = 0, j = classList.length; i < j; i++) {
    const clsName = classList[i]

    if (!clsName) continue

    if (el.classList && el.classList.add) {
      el.classList.add(clsName)
    } else if (!hasClass(ele, clsName)) {
      curClassStr += ' ' + clsName
    }
  }

  if (!el.classList) {
    ele.className = curClass
  }
}

export function removeClass(el, cls) {
  if (!el || !cls) return

  const classList = cls.split(' ')
  const curClass = ' ' + el.className + ' '

  for (var i = 0, j = classList.length; i < j; i++) {
    var clsName = classList[i]
    if (!clsName) continue

    if (el.classList && el.classList.remove) {
      el.classList.remove(clsName)
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(' ' + clsName + ' ', ' ')
    }
  }

  if (!el.classList) {
    el.className = trim(curClass)
  }
}
