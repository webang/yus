function install(Vue) {
  const { name } = this;
  Vue.component(name, this);
}

export function useName(name) {
  return component => {
    component.name = name;
    component.install = install;
    return component;
  };
}
