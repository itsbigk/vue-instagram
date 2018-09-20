import Vue from 'vue'
import App from './App'
import VueDragscroll from 'vue-dragscroll'

Vue.use(VueDragscroll)

new Vue({
  render: h => h(App)
}).$mount('#app')
