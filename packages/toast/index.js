import Vue from 'vue';
import ToastComponent from './Toast';

let ToastClass = Vue.extend(ToastComponent);
let queue = [];
let defaultOptions = {
  value: true,
  type: 'text',
  message: '',
  speed: 400,
  duration: 1000,
  autoClose: true,
  position: 'middle'
};

function createInstance() {
  const toast = new ToastClass({
    el: document.createElement('div')
  });
  document.body.appendChild(toast.$el);
  queue.push(toast);
  return toast;
}

function Toast(options = {}) {
  const toast = createInstance();
  if (typeof options === 'string') {
    options = {
      message: options
    };
  }
  const props = {
    ...defaultOptions,
    ...options,
    clear() {
      toast.value = false;
      setTimeout(() => {
        const parent = toast.$el.parentNode;
        if (parent) {
          parent.removeChild(toast.$el);
        }
        toast.$destroy();
      }, this.speed);
    }
  };

  Object.assign(toast, props);

  if (options.duration > 0) {
    toast.timer = setTimeout(() => {
      toast.clear();
    }, options.duration);
  }

  return toast;
}

// 关闭所有的 toast
Toast.clear = function (all) {
  if (!all) {
    queue.shift().clear();
  } else {
    queue.forEach(toast => {
      toast.clear();
    });
    queue = [];
  }
};

Toast.install = () => {
  Vue.use(ToastComponent);
};

export default Toast;
