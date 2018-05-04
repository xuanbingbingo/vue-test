// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueSplit from 'vue-split-panel'

import '../node_modules/jspanel4/es6module/extensions/hint/jspanel.hint.min.js'
import '../node_modules/jspanel4/es6module/extensions/modal/jspanel.modal.min.js'
import '../node_modules/jspanel4/es6module/extensions/contextmenu/jspanel.contextmenu.min.js'
import '../node_modules/jspanel4/es6module/extensions/tooltip/jspanel.tooltip.min.js'
import '../node_modules/jspanel4/es6module/extensions/layout/jspanel.layout.min.js'
import '../node_modules/jspanel4/es6module/extensions/dock/jspanel.dock.min.js'
import '../node_modules/jspanel4/dist/jspanel.min.css'
import '../node_modules/jspanel4/es6module/jspanel.min.css'

Vue.use(VueSplit)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
