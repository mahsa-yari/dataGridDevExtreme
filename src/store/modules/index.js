import Vue from 'vue';

const modules = {};

function loadModules(ctx) {
  ctx.keys().forEach((key) => {
    if (key === './index.js') {
      return;
    }

    const moduleName = key.replace(/(\.\/|\.js)/g, '').replace(/\/store/g, '');
    if (moduleName && ctx(key).default) {
      const module = ctx(key).default;
      modules[moduleName] =
        typeof module === 'function' ? module({ app: Vue.prototype }) : module;
    }
  });
}

loadModules(require.context('@/store/modules', false, /\.js$/));
loadModules(require.context('@/services', true, /store\.js$/));
loadModules(require.context('@/views', true, /store\.js$/));

export default modules;
