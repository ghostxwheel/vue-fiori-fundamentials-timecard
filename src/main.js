import Vue from 'vue'
import StartApp from './StartApp.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(StartApp),
}).$mount('#app')
