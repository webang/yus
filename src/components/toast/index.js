import Vue from 'vue'
import ToastComponent from './src/toast.vue'

const ToastClass = Vue.extend(ToastComponent)
const defaultOptions = {
  value: true,
  type: 'text',
  message: '',
  speed: 400,
  duration: 2000,
  autoClose: true,
  position: 'middle'
}
const queue = []

function createInstance (options) {
  const toast = new ToastClass({
    el: document.createElement('div')
  })
  document.body.appendChild(toast.$el)
  queue.push(toast)
  return toast
}

function Toast (options = {}) {
  const toast = createInstance()
  const props = {
    ...defaultOptions,
    ...options
  }

  Object.assign(toast, props)

  if (props.duration > 0 && props.autoClose) {
    toast.timer = setTimeout(() => {
      Toast.clear(toast)
    }, props.duration)
  }

  return toast
}

Toast.clear = (toast) => {
  toast.value = false
  setTimeout(() => {
    document.body.removeChild(toast.$el)
  }, toast.speed)
}

export default Toast
