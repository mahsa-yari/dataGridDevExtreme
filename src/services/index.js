import Vue from 'vue';
import store from '@/store';

/*
 $bridge works like a mediator and
 used for communications between services
*/
Vue.prototype.$bridge = {};

function inject(name, service) {
  Vue.prototype['$' + name] = service;
  store['$' + name] = service;
}

function loadPlugins(ctx) {
  ctx.keys().forEach((key) => {
    if (key === './index.js') {
      return;
    }

    const moduleName = key.replace(/(\.\/|\.js)/g, '').replace(/\/plugin/g, '');
    if (moduleName && ctx(key).default) {
      ctx(key).default({
        Vue,
        inject,
        $bridge: Vue.prototype.$bridge,
        store,
      });
    }
  });
}

/* inject all services into Vue */
loadPlugins(require.context('@/services', true, /plugin\.js$/));
