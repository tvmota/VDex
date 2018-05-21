import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import UIkit from 'uikit'
import icons from 'uikit/dist/js/uikit-icons'

Vue.config.productionTip = false
UIkit.use(icons)

window['UIkit'] = UIkit

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
