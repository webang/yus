import Toast from './src/toast.vue'

Toast.install = (Vue) => {
  Vue.component(Toast.name, Toast)
}

export default Toast
