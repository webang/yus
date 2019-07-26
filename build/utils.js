/**
 * 从缓存中移除module
 */
function purgeCache(moduleName) {
  searchCache(moduleName, function(mod) {
    delete require.cache[mod.id];
  });

  Object.keys(module.constructor._pathCache).forEach(function(cacheKey) {
    if (cacheKey.indexOf(moduleName) > 0) {
      delete module.constructor._pathCache[cacheKey];
    }
  });
}

/**
 * 遍历缓存来查找通过特定模块名缓存下的模块
 */
function searchCache(moduleName, callback) {
  var mod = require.resolve(moduleName);
  if (mod && (mod = require.cache[mod]) !== undefined) {
    (function traverse(mod) {
      mod.children.forEach(function(child) {
        traverse(child);
      });
      callback(mod);
    })(mod);
  }
}

module.exports = {
  purgeCache,
  searchCache
};
