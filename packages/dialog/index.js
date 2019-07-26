import Vue from 'vue';
import VueDialog from './Dialog';

let DialogClass = Vue.extend(VueDialog);
let queue = [];
let defaultOptions = {
  value: true,
  type: 'text',
  message: '',
  speed: 400,
  duration: 2000,
  autoClose: true,
  position: 'middle'
};

function createInstance() {
  const instance = new DialogClass({
    el: document.createElement('div')
  });
  document.body.appendChild(instance.$el);
  queue.push(instance);
  return instance;
}

function Dialog(options = {}) {
  let res;
  let rej;

  let promise = new Promise((resolve, reject) => {
    res = resolve;
    rej = reject;
  });

  const instance = createInstance();
  const props = {
    ...defaultOptions,
    ...options,
    close() {
      instance.value = false;
      setTimeout(() => {
        const parent = instance.$el.parentNode;
        if (parent) {
          parent.removeChild(instance.$el);
        }
        instance.$destroy();
      }, this.speed);
    },
    handleConfirm() {
      if (instance.type === 'prompt') {
        res(instance.currentInputValue);
      } else {
        res();
      }
    },
    handleCancel() {
      rej();
    }
  };
  Object.assign(instance, props);
  return promise;
}

Dialog.close = function(all) {
  if (!all) {
    queue.shift().close();
  } else {
    queue.forEach(instance => {
      instance.close();
    });
    queue = [];
  }
};

Dialog.install = () => {
  Vue.use(VueDialog);
};

export default Dialog;
