var ELEMENT = '__';
var MODS = '--';

function join(name, el, symbol) {
  return el ? name + symbol + el : name;
}

function prefix(name, mods) {
  if (typeof mods === 'string') {
    return join(name, mods, MODS);
  }
  if (Array.isArray(mods)) {
    return mods.map(function(item) {
      return prefix(name, item);
    });
  }
  var ret = {};
  if (mods) {
    Object.keys(mods).forEach(function(key) {
      ret[name + MODS + key] = mods[key];
    });
  }
  return ret;
}

export function useBEM(name) {
  return function(el, mods) {
    if (el && typeof el !== 'string') {
      mods = el;
      el = '';
    }
    el = join(name, el, ELEMENT);
    return mods ? [el, prefix(el, mods)] : el;
  };
}
